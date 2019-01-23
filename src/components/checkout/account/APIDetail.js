import React, { Component } from 'react'
import { Row, Col } from 'bootstrap-4-react'
import { NavLink } from 'react-router-dom'

export default class APIDetail extends Component {
  render () {
    return (
      <div>
        <div className="box-header text-center with-margin">
          Thông tin API
        </div>
        <div className="box white billing-box notification-box grey-text">
          <div className="active">
            <div id="panel_disabled" style={{display: 'none'}}>
              <p style={{marginBottom: '15px'}}>API hiện đang bị vô hiệu hóa trên tài khoản của bạn.</p>
              <div className="text-center">
                <NavLink to='/' className="btn btn-success">Cho phép sử dụng API</NavLink>
              </div>
            </div>
            <div id="panel_enabled" style={{color: 'white'}}>
              <Row>
                <Col col="col xs-12 lg-8">
                  <p style={{marginBottom: '15px'}}>API truy cập hiện đang được kích hoạt  trên tài khoản của bạn.</p>
                  API Key: {this.props.apiKey}
                </Col>
                <Col col="col xs-12 lg-4" className="text-right">
                  <NavLink to='/' className="btn btn-success">Vô hiệu hóa API</NavLink>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
