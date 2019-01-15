import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'bootstrap-4-react'

export default class AddUser extends Component {
  render () {
    return (
      <div className="container">
        <Form inline id="form-add-user">
          <Row className="gutter-80">
            <Col col="col-xs-12 col-md-7 col-lg-6" className="block-left">
              <div className="block-label">
                <h3>Users</h3>
              </div>
              <div className="block-input">
                <Row className="gutter-10">
                  <Col col="col-xs-6" className="form-group">
                    <Form.Input type="email" placeholder="Email" />
                  </Col>
                  <Col col="col-xs-6" className="form-group">
                    <Form.Input type="password" id="pwd" placeholder="Password" />
                  </Col>
                </Row>
              </div>
            </Col>
            <div className="col-xs-12 col-md-5 col-lg-6 block-right">
              <Button type="submit" id="create-new-user">Add user</Button>
            </div>
          </Row>
        </Form>
      </div>
    )
  }
}
