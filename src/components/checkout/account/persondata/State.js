import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class State extends Component {
  render () {
    return (
      <Form.Group>
        <Form.CustomSelect id="region" name="state" defaultValue={this.props.data}>
          <option value>
            Tiểu bang / Tỉnh:
          </option>
          <option value="HN">
            Hà Nội
          </option>
          <option value="TPHCM">
            TP HCM
          </option>
        </Form.CustomSelect>
      </Form.Group>
    )
  }
}
