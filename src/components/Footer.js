import React, { Component } from 'react'
import logo from '../images/logo-ft.png'

export default class Footer extends Component {
  render () {
    return (
      <div id="footer">
        <div id="copy">
          <div className="row">
            <div className="col-xs-12 col-md-6 block-left">
              <span><img src={logo} className="img-responsive" alt="logo" /> © 2018 CMC Cloud - Công ty Cổ phần Hạ tầng Viễn thông CMC</span>
            </div>
            <div className="col-xs-12 col-md-6 block-right">
              <span>Giấy CNĐKDN: 0102900049 - Ngày cấp: 05/09/2008, sửa đổi lần thứ 12 ngày 09/10/2017<br />
                Cơ quan cấp: Phòng đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Hà Nội</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
