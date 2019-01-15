import React, { Component } from 'react'
import { Form, Col, Row, InputGroup, Button } from 'bootstrap-4-react'

export default class PersonData extends Component {
  render () {
    return (
      <div>
        <div className="box-header">
                    Dữ liệu cá nhân
        </div>
        <Form className="form-horizontal ng-pristine ng-valid" id="updateInfoForm" name="updateInfoForm">
          <div className="box white billing-box">
            <div className="active">
              <Row>
                <Col col="col-sm-6">
                  <Form.Group>
                    <Form.Input name="firstname" type="text" placeholder="Họ (*)" />
                  </Form.Group>
                  <Form.Group>
                    <input name="lastname" type="text" placeholder="Tên (*)" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Input className="disabled" disabled name="email" style={{backgroundColor: '#F7F7F9'}} type="text" placeholder="Địa chỉ email (*):" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Input name="phonenumber" type="text" placeholder="Số điện thoại (*):" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="companyname" type="text" placeholder="Công ty (không bắt buộc):" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="dia_chi_dkkd" type="text" placeholder="Địa chỉ đăng kí kinh doanh (không bắt buộc):" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="ten_giam_doc" type="text" placeholder="Tên giám đốc (không bắt buộc):" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="ma_so_thue" type="text" placeholder="Mã số thuế (không bắt buộc):" />
                  </Form.Group>
                </Col>
                <Col col="col-sm-6">
                  <Form.Group>
                    <Form.Input name="address1" type="text" placeholder="Địa chỉ:" />
                  </Form.Group>
                  <Form.Group>
                    <select className="crs-country" name="country">
                      <option value>
                        Quốc Gia
                      </option>
                      <option value="VN">
                        Việt Nam
                      </option>
                      <option value="AF">
                        Afghanistan
                      </option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="city" type="text" placeholder="Thành phố:" />
                  </Form.Group>
                  <Form.Group>
                    <select id="region" name="state">
                      <option value>
                        Tiểu bang / Tỉnh:
                      </option>
                      <option value="Hà Nội">
                        Hà Nội
                      </option>
                      <option value="TP HCM">
                        TP HCM
                      </option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <Form.CustomSelect id="timezone" name="timezone">
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
                  <Form.Group>
                    <Form.Input name="address2" type="text" placeholder="Địa chỉ 2:" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="postcode" type="text" placeholder="Mã bưu điện:" />
                  </Form.Group>
                  <Form.Group className="text-left">
                    <Button success id="btUpdate" type="submit">Cập nhật</Button>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
