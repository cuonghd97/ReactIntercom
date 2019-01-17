import React, { Component } from 'react'
import { Col, Row } from 'bootstrap-4-react'

export default class Verify extends Component {
  render () {
    return (
      <Col col="col xs-12 lg-6">
        <h3>Bảo mật</h3>
        <div className="box white margin-bottom" id="two-factor">
          <h4><span className="square-icon" /> Xác minh hai bước</h4>
          <Row>
            <Col col="col-xs-12">
              <p>Với xác minh 2 bước, bất cứ khi nào bạn đăng nhập vào tài khoản Google của bạn, bạn sẽ cần</p>
              <ol className="rounded-list">
                <li><span>Mật khẩu của bạn</span></li>
                <li><span>Một mã mà Google Authenticator ứng dụng sẽ tạo ra cho bạn</span></li>
              </ol>
            </Col>
            <Col col="col-xs-12" className="text-right">
              <a className="btn btn-success" href="enable-two-factor">Kích hoạt xác thực 2 bước</a>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}
