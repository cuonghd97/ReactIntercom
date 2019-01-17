import React, { Component } from 'react'
import { Col, Form } from 'bootstrap-4-react'
import { NavLink } from 'react-router-dom'

export default class ChangePass extends Component {
  render () {
    return (
      <Col col="col-lg-6">
        <div className="box-header text-center with-margin">
          Đổi mật khẩu
        </div>
        <div className="box white billing-box text-center">
          <div className="active">
            <Form.Group>
              <Form.Input id="current_password" type="password" placeholder="Mật khẩu hiện tại:" />
            </Form.Group>
            <Form.Group>
              <Form.Input id="new_password" type="password" placeholder="Mật khẩu mới:" />
            </Form.Group>
            <Form.Group>
              <Form.Input id="new_password2" type="password" placeholder="Xác nhận mật khẩu mới:" />
            </Form.Group>
            <div className="text-center">
              <NavLink to='/' className="btn btn-success" id="btChangePass">Đổi mật khẩu</NavLink>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}
