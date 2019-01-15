import React, { Component } from 'react'
import { Form, InputGroup } from 'bootstrap-4-react'
import { NavLink } from 'react-router-dom'

export default class Recharge extends Component {
  render () {
    return (
      <div id="add_transaction">
        <h3 style={{marginTop: 0, paddingBottom: 0}}>Nạp tiền vào tài khoản</h3>
        <Form inline>
          <Form.Group>
            <InputGroup className="custom-container">
              <Form.Input className="amountcustom" name="amountcustom" placeholder="Nhập số tiền" size={12} style={{borderRadius: '4px 0 0 4px', lineHeight: '32px', width: '200px'}} type="text"/>
              <InputGroup.PrependText className="input-group-addon">
                VND
              </InputGroup.PrependText>
            </InputGroup>
            <NavLink to='/' className="btn btn-primary" id="btn_add_transaction" style={{lineHeight: '24px'}}>Thêm thanh toán</NavLink>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
