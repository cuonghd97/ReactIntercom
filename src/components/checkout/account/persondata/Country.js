import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class Country extends Component {
  render () {
    return (
      <Form.Group>
        <Form.CustomSelect className="crs-country" name="country" defaultValue={this.props.data}>
          <option value="CT">
            Quốc Gia
          </option>
          <option value="VN">
            Việt Nam
          </option>
          <option value="AF">
            Afghanistan
          </option>
        </Form.CustomSelect>
      </Form.Group>
    )
  }
}
