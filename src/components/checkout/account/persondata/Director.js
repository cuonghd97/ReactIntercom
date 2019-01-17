import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="ten_giam_doc" type="text" placeholder="Tên giám đốc (không bắt buộc):" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
