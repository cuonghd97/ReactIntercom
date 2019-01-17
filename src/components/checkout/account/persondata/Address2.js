import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="address2" type="text" placeholder="Địa chỉ 2:" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
