import React, { Component } from 'react'
import Mobilemenu from './Mobilemenu';
import Footer from './Footer'
import Header from './Header';
import Leftmenu from './body/Leftmenu';
import Topnav from './checkout/Topnav';
import Recharge from './checkout/billing/Recharge';
import Payinfo from './checkout/billing/Payinfo';
import Voucher from './checkout/billing/Voucher';
import BillingHistory from './checkout/billing/BillingHistory';

export default class Billing extends Component {
  render () {
    return (
      <div>
        <Mobilemenu></Mobilemenu>
        <Header></Header>
        <div id="content" style={{position: 'relative'}}>
          <Leftmenu></Leftmenu>
          <div id="container-itself" style={{minHeight: '940px', overflowY: 'auto'}}>
            <div id="content-itself">
              <div className="container-fluid">
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
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
