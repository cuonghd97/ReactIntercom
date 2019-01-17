import React, { Component } from 'react'
import Topnav from './checkout/Topnav';
import Recharge from './checkout/billing/Recharge';
import Payinfo from './checkout/billing/Payinfo';
import Voucher from './checkout/billing/Voucher';
import BillingHistory from './checkout/billing/BillingHistory';

export default class Billing extends Component {
  render () {
    return (
      <div>
        <Topnav/>
        <div id="billing" className="hide active">
          <Recharge/>
          <Payinfo/>
          <Voucher/>
          <BillingHistory
            allBill='10'
            paidBill='2'
            unPaidBill='5'
            outDate='3'
          />
        </div>
      </div>
    )
  }
}
