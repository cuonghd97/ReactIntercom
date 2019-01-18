import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'bootstrap-4-react'
// import FirstName from './persondata/FirstName';
// import LastName from './persondata/LastName';
// import PhoneNumber from './persondata/PhoneNumber';
// import CompanyName from './persondata/CompanyName';
// import RegisterAddress from './persondata/RegisterAddress'
// import Director from './persondata/Director'
// import PostCode from './persondata/PostCode'
// import TaxNo from './persondata/TaxNo'
// import TimeZone from './persondata/TimeZone'
// import Address1 from './persondata/Address1'
// import Address2 from './persondata/Address2'
// import City from './persondata/City'
// import Country from './persondata/Country'
// import State from './persondata/State'

export default class PersonData extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstname: this.props.userData.firstname,
      lastname: this.props.userData.lastname,
      address1: this.props.userData.address1,
      address2: this.props.userData.address2,
      email: this.props.userData.email,
      phonenumber: this.props.userData.phonenumber,
      companyname: this.props.userData.companyname,
      dia_chi_dkkd: this.props.userData.registeraddress,
      ten_giam_doc: this.props.userData.director,
      ma_so_thue: this.props.userData.taxno,
      country: this.props.userData.country,
      region: this.props.userData.region,
      state: this.props.userData.state,
      city: this.props.userData.city,
      timezone: this.props.userData.timezone,
      postcode: this.props.userData.postcode,
    }
  }

  isChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  submit = (e)=>{
    e.preventDefault()
  }

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
                    <Form.Input name="firstname" type="text" placeholder="Họ (*)" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="lastname" type="text" placeholder="Tên (*)" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Input readonly disabled name="email" style={{backgroundColor: '#F7F7F9'}} type="text" placeholder="Địa chỉ email (*):" defaultValue={this.state.email}/>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Input name="phonenumber" type="text" placeholder="Số điện thoại (*):" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="companyname" type="text" placeholder="Công ty (không bắt buộc):" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="dia_chi_dkkd" type="text" placeholder="Địa chỉ đăng kí kinh doanh (không bắt buộc):" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="ten_giam_doc" type="text" placeholder="Tên giám đốc (không bắt buộc):" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="ma_so_thue" type="text" placeholder="Mã số thuế (không bắt buộc):" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                </Col>
                <Col col="col-sm-6">
                  <Form.Group>
                    <Form.Input name="address1" type="text" placeholder="Địa chỉ:" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.CustomSelect className="crs-country" name="country" onChange={(e)=>this.isChange(e)}>
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
                  <Form.Group>
                    <Form.Input name="city" type="text" placeholder="Thành phố:" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.CustomSelect id="region" name="state" onChange={(e)=>this.isChange(e)}>
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
                  <Form.Group>
                    <Form.CustomSelect id="timezone" name="timezone" onChange={(e)=>this.isChange(e)}>
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
                    <Form.Input name="address2" type="text" placeholder="Địa chỉ 2:" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input name="postcode" type="text" placeholder="Mã bưu điện:" onChange={(e)=>this.isChange(e)}/>
                  </Form.Group>
                  <Form.Group className="text-left">
                    <Button success id="btUpdate" onClick={(e)=>this.submit(e)}>Cập nhật</Button>
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
