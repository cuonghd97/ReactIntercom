import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class LastName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.Input name="lastname" type="text" placeholder="Tên (*)" defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
