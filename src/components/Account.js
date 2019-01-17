import React, { Component } from 'react'
import Topnav from './checkout/Topnav';
import PersonData from './checkout/account/PersonData';
import AddUser from './checkout/account/AddUser';
import ChangePass from './checkout/account/ChangePass';
import Notification from './checkout/account/Notification';
import APIDetail from './checkout/account/APIDetail';

export default class Account extends Component {
  render () {
    return (
      <div>
        <Topnav/>
        <div id="account_settings">
          <h3>Thiết lập tài khoản</h3>
          <PersonData/>
          <div style={{clear: 'both'}} />
          <AddUser/>
          <div className="row gutter-80 lowered-marign">
            <ChangePass/>
            <div className="col-lg-6">
              {/* Notification */}
              <Notification/>
              {/* Api */}
              <APIDetail/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
