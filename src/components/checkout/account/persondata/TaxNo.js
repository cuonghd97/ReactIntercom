import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="ma_so_thue" type="text" placeholder="Mã số thuế (không bắt buộc):" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}