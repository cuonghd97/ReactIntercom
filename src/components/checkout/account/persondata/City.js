import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="city" type="text" placeholder="Thành phố:" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
