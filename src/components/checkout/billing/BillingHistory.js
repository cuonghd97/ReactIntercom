import React, { Component } from 'react'
import RowBilling from './rowbilling/RowBilling';
import { Badge } from 'bootstrap-4-react'

export default class BillingHistory extends Component {
  render () {
    return (
      <div>
        <h3>Lịch sử hóa đơn</h3>
        <div className="fc-header-right" id="status_selector" style={{paddingBottom: '15px'}}>
          <span className="arrowed-in-right arrowed pointer lbstatus"><Badge pill primary>Tất cả<span>&#40;</span>{this.props.allBill}<span>&#41;</span></Badge></span>
          <span className="arrowed-in-right arrowed pointer lbstatus"><Badge pill success>Paid<span>&#40;</span>{this.props.paidBill}<span>&#41;</span></Badge></span>
          <span className="arrowed-in-right arrowed pointer lbstatus"><Badge pill warning>Chưa thanh toán <span>&#40;</span>{this.props.unPaidBill}<span>&#41;</span></Badge></span>
          <span className="arrowed-in-right arrowed pointer lbstatus"><Badge pill danger>Quá hạn <span>&#40;</span>{this.props.outDate}<span>&#41;</span></Badge></span>
        </div>
        <div style={{clear: 'both'}} />
        <div className="table-container" id="invoices">
          <table className="table" style={{borderBottomWidth: '1px', marginBottom: '10px'}}>
            <tbody>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Số hóa đơn</th>
                <th>Số tiền</th>
                <th>Ngày tạo hóa đơn</th>
                <th>Ngày hết hạn</th>
                <th>Ngày thanh toán</th>
                <th>Tình trạng hóa đơn</th>
                <th>Xem / Tải về</th>
              </tr>
            </tbody>
            <tbody id="invoices_history">
              <RowBilling/>
            </tbody>
          </table>
        </div>
        <div id="invoices_history_paging"></div>
      </div>
    )
  }
}
