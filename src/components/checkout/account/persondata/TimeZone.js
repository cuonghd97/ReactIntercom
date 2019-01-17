import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class CompanyName extends Component {
  render () {
    return (
      <Form.Group>
        <Form.CustomSelect id="timezone" name="timezone" defaultValue={this.props.data}>
          <option value>
            Múi giờ:
          </option>
          <option value="Etc/GMT+12|-12:00">
            (GTM -12:00 ) Etc/GMT+12
          </option>
          <option value="Etc/GMT+11|-11:00">
            (GTM -11:00 ) Etc/GMT+11
          </option>
        </Form.CustomSelect>
      </Form.Group>
    )
  }
}
