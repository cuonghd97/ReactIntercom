import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="postcode" type="text" placeholder="Mã bưu điện:" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
