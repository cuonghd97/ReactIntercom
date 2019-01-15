import React, { Component } from 'react'
import { Row, Form, Col, Button } from 'bootstrap-4-react'
import '../../../css/style.css'

export default class Voucher extends Component {
  render () {
    return (
      <div>
        <h3>Mã voucher</h3>
        <Form inline>
          <Row>
            <Col>
              <Form.Input id="voucher_code" name="voucher_code" type="text" placeholder="Nhập mã vouncher" />
              <Button style={{margin: '1px 1px 0'}} success id="add_voucher">Áp dụng voucher</Button>
              <div style={{clear: 'both'}} />
              <p style={{padding: '10px 0'}}>Nhập mã CMCCLOUD300K nhận ngay 300.000 VNĐ vào tài khoản</p>
              <div style={{clear: 'both'}} />
              <p style={{padding: '10px 0'}}>* Mỗi tài khoản chỉ sử dung được 1 lần duy nhất</p>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
