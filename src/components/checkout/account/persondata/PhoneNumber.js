import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class PhoneNumber extends Component {
  render () {
    return (
      <Form.Group className="form-group">
        <Form.Input name="phonenumber" type="text" placeholder="Số điện thoại (*):" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
