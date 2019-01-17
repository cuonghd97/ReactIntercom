import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'bootstrap-4-react'
import FirstName from './persondata/FirstName';
import LastName from './persondata/LastName';
import PhoneNumber from './persondata/PhoneNumber';
import CompanyName from './persondata/CompanyName';
import RegisterAddress from './persondata/RegisterAddress'
import Director from './persondata/Director'
import PostCode from './persondata/PostCode'
import TaxNo from './persondata/TaxNo'
import TimeZone from './persondata/TimeZone'
import Address1 from './persondata/Address1'
import Address2 from './persondata/Address2'
import City from './persondata/City'
import Country from './persondata/Country'
import State from './persondata/State'

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

  submit = (event, data)=>{
    event.preventDefault()
    this.props.selfInfo(data)
  }

  getData = (data)=>{
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <div className="box-header">
                    Dữ liệu cá nhân
        </div>
        <Form method='post' className="form-horizontal ng-pristine ng-valid" id="updateInfoForm" name="updateInfoForm">
          <div className="box white billing-box">
            <div className="active">
              <Row>
                <Col col="col-sm-6">
                  <FirstName data={this.state.firstname} getData={(data)=>this.getData(data)}/>
                  <LastName data={this.state.lastname}/>
                  <Form.Group className="form-group">
                    <Form.Input readonly disabled name="email" style={{backgroundColor: '#F7F7F9'}} type="text" placeholder="Địa chỉ email (*):" defaultValue={this.state.email}/>
                  </Form.Group>
                  <PhoneNumber data={this.state.phonenumber}/>
                  <CompanyName data={this.state.companyname}/>
                  <RegisterAddress data={this.state.dia_chi_dkkd}/>
                  <Director data={this.state.ten_giam_doc}/>
                  <TaxNo data={this.state.ma_so_thue}/>
                </Col>
                <Col col="col-sm-6">
                  <Address1 data={this.state.address1}/>
                  <Country data={this.state.country}/>
                  <City data={this.state.city}/>
                  <State data={this.state.state}/>
                  <TimeZone data={this.state.timezone}/>
                  <Address2 data={this.state.address2}/>
                  <PostCode data={this.state.postcode}/>
                  <Form.Group className="text-left">
                    <Button success id="btUpdate" onClick={(event, data)=>this.submit(event, this.state)}>Cập nhật</Button>
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
