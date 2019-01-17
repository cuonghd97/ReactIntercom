import React, { Component } from 'react'
import { Row, Col, Form } from 'bootstrap-4-react'
import { NavLink } from 'react-router-dom'

export default class Notification extends Component {
  render () {
    return (
      <div>
        <div className="box-header text-center with-margin">
          Notifications
        </div>
        <div className="box white billing-box notification-box grey-text">
          <div className="active">
            <Row>
              <Col col="col xs-12 lg-8 md-8">
                <NavLink to="#">Nhận email thông báo khi CPU vượt quá ngưỡng định trước</NavLink>
                <Form.Group>
                <Form.Check>
                  <Form.CheckInput type="checkbox" id="notification"/>
                  <Form.CheckLabel htmlFor="notification" id="label-notification">Nhận email cảnh báo CPU</Form.CheckLabel>
                </Form.Check>
                </Form.Group>
              </Col>
              <Col col="col xs-12 lg-4" className="text-right">
                <NavLink to="#" className="btn btn-success">Lưu</NavLink>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
