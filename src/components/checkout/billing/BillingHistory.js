import React, { Component } from 'react'
import RowBilling from './rowbilling/RowBilling';

export default class BillingHistory extends Component {
  render () {
    return (
      <div>
        <h3>Lịch sử hóa đơn</h3>
        <div className="fc-header-right" id="status_selector" style={{paddingBottom: '15px'}}>
          <span className="label label-success arrowed-in-right arrowed pointer lbstatus" style={{fontSize: '14px'}}>Tất cả <span id="invoice_total"><span>&#40;</span>{this.props.allBill}<span>&#41;</span></span></span>
          <span className="label label-default arrowed-in-right arrowed pointer lbstatus" style={{fontSize: '14px'}}>Paid <span id="invoice_paid"><span>&#40;</span>{this.props.paidBill}<span>&#41;</span></span></span>
          <span className="label label-default arrowed-in-right arrowed pointer lbstatus" style={{fontSize: '14px'}}>Chưa thanh toán <span id="invoice_unpaid"><span>&#40;</span>{this.props.unPaidBill}<span>&#41;</span></span></span>
          <span className="label label-default arrowed-in-right arrowed pointer lbstatus" style={{fontSize: '14px'}}>Quá hạn <span id="invoice_duedate"><span>&#40;</span>{this.props.outDate}<span>&#41;</span></span></span>
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
