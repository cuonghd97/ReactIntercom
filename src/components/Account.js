import React, { Component } from 'react'
import Mobilemenu from './Mobilemenu';
import Footer from './Footer'
import Header from './Header';
import Leftmenu from './body/Leftmenu';
import Topnav from './checkout/Topnav';
import PersonData from './checkout/account/PersonData';
import AddUser from './checkout/account/AddUser';

export default class Account extends Component {
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
                <div id="account_settings">
                  <h3>Thiết lập tài khoản</h3>
                  <PersonData/>
                  <div style={{clear: 'both'}} />
                  <AddUser/>
                  <div className="row gutter-80 lowered-marign">
                    <div className="col-lg-6">
                      <div className="box-header text-center with-margin">
                        Đổi mật khẩu
                      </div>
                      <div className="box white billing-box text-center">
                        <div className="active">
                          <div className="form-group">
                            <input id="current_password" type="password" defaultValue placeholder="Mật khẩu hiện tại:" />
                          </div>
                          <div className="form-group">
                            <input id="new_password" type="password" defaultValue placeholder="Mật khẩu mới:" />
                          </div>
                          <div className="form-group">
                            <input id="new_password2" type="password" defaultValue placeholder="Xác nhận mật khẩu mới:" />
                          </div>
                          <div className="text-center">
                            <a className="btn btn-success" id="btChangePass">Đổi mật khẩu</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="box-header text-center with-margin">
                        Notifications
                      </div>
                      <div className="box white billing-box notification-box grey-text">
                        <div className="active">
                          <div className="row">
                            <div className="col-xs-12 col-lg-8">
                              <a href="#">Nhận email thông báo khi CPU vượt quá ngưỡng định trước</a>
                              <label><input className="ng-pristine ng-untouched ng-valid ng-empty" type="checkbox" /> Nhận email cảnh báo CPU</label>
                            </div>
                            <div className="col-xs-12 col-lg-4 text-right">
                              <a className="btn btn-success">Lưu</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-header text-center with-margin">
                        Thông tin API
                      </div>
                      <div className="box white billing-box notification-box grey-text">
                        <div className="active">
                          <div id="panel_disabled" style={{display: 'none'}}>
                            <p style={{marginBottom: '15px'}}>API hiện đang bị vô hiệu hóa trên tài khoản của bạn.</p>
                            <div className="text-center">
                              <a className="btn btn-success">Cho phép sử dụng API</a>
                            </div>
                          </div>
                          <div id="panel_enabled" style={{color: 'white'}}>
                            <div className="row">
                              <div className="col-xs-12 col-lg-8">
                                <p style={{marginBottom: '15px'}}>API truy cập hiện đang được kích hoạt  trên tài khoản của bạn.</p>
                                API Key: <span className="label label-default" id="api_key">az9vCcdvwhIixt6z7hxBroRAdiVtU0</span>
                              </div>
                              <div className="col-xs-12 col-lg-4 text-right">
                                <a className="btn btn-success">Vô hiệu hóa API</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
