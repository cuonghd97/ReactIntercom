import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

function FirstName() {
  return (
    <Form.Group>
      <Form.Input name="firstname" type="text" placeholder="Họ (*)" onChange={(e)=>this.props.getData(e)}/>
    </Form.Group>
  )
}

export default FirstName
