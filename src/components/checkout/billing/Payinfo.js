import React, { Component } from 'react'
import RowPayInfo from './rowpayinfo/RowPayInfo';

export default class Payinfo extends Component {
  render () {
    return (
      <div>
        <h3 style={{marginTop: '0px'}}>Thông tin thanh toán</h3>
        <table className="table" id="billing-info">
          <tbody>
            <tr>
              <th>Dư nợ</th>
              <th>Số tiền hoá đơn đã thanh toán</th>
              <th>Tiền trong tài khoản</th>
            </tr>
            <RowPayInfo/>
            <RowPayInfo/>
            <RowPayInfo/>
            <RowPayInfo/>
          </tbody>
        </table>
      </div>
    )
  }
}
