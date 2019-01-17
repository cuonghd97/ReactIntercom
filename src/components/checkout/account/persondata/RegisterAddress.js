import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="dia_chi_dkkd" type="text" placeholder="Địa chỉ đăng kí kinh doanh (không bắt buộc):" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
