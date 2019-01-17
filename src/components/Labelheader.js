import React, { Component } from 'react'
import { InputGroup, Form, Button, Col } from 'bootstrap-4-react'

export default class Labelheader extends Component {
  render () {
    return (
      <h3 className="label-header">
        <span className="border-label">Máy ảo của tôi</span>
        <Col col="col lg-4 md-5" className="searchvmbox">
          <InputGroup>
            <Form.Input type="text" id="smart_search" placeholder="Tìm kiếm..." />
              <InputGroup.Append>
                <Button className="btn btn-gradient btn-home-search">Tìm kiếm</Button>
              </InputGroup.Append>
          </InputGroup>
        </Col>
      </h3>
    )
  }
}
