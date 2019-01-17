import React, { Component } from 'react'
import { Col, Form, Button } from 'bootstrap-4-react'

export default class AddUser extends Component {
  render () {
    return (
      <div className="container">
        <Form id="form-add-user">
          <Col col="col xs-12 md-7 lg-6" className="block-left">
            <div className="block-label">
              <h3>Users</h3>
            </div>
            <div className="block-input">
                <Col col="col-md-6" className="form-group">
                  <Form.Input type="email" placeholder="Email" />
                </Col>
                <Col col="col-md-6" className="form-group">
                  <Form.Input type="password" id="pwd" placeholder="Password" />
                </Col>
            </div>
          </Col>
          <Col col="col xs-12 md-5 lg-6" className="block-right">
            <Button type="submit" id="create-new-user">Add user</Button>
          </Col>
        </Form>
      </div>
    )
  }
}
