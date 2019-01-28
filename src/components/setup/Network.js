import React, { Component } from "react";
import { Col, Row } from "bootstrap-4-react";

class Network extends Component {
  isRadCheck = e => {
    console.log(e.target.value);
  };

  isChecked = e => {
    console.log(e.target.checked);
  };

  publicIP = e => {
    console.log(e.target.value);
  };
  render() {
    return (
      <Row className="gutter-0">
        <Col col="xs-12 md-6">
          <label
            className="noselect bold network-label"
            style={{ borderRight: "2px solid #fff" }}
          >
            <input
              className="ng-pristine ng-untouched ng-valid ng-not-empty"
              name="network_type"
              type="radio"
              defaultValue="basic"
              defaultChecked
              onChange={e => this.isRadCheck(e)}
            />{" "}
            Basic Network
          </label>
          <br />
          <div id="basic_network" className="equal-height">
            <Row>
              <Col col="xs-12 md-6">
                <div className="one-networks">
                  <label>
                    Public IP{" "}
                    <select
                      className="styled-input pull-left"
                      id="add-more-ip"
                      style={{ height: "30px" }}
                      onChange={e => this.publicIP(e)}
                    >
                      <option value={0}>1 IPv4 Address (Included)</option>
                      <option value={50000}>
                        2 x IPv4 Address (+50,000/mo)
                      </option>
                    </select>
                  </label>
                </div>
              </Col>
              <Col col="xs-12 md-6">
                <div className="one-networks">
                  <label>
                    Kích hoạt tính năng mạng private{" "}
                    <input type="checkbox" onChange={e => this.isChecked(e)} />
                  </label>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col col="xs-12 md-6">
          <label className="noselect bold network-label">
            <input
              className="ng-pristine ng-untouched ng-valid ng-not-empty"
              name="network_type"
              type="radio"
              onChange={e => this.isRadCheck(e)}
              defaultValue="advance"
            />{" "}
            Advance Network
          </label>
          <br />
          <div
            id="advance_network"
            className="equal-height"
            style={{ height: "173px" }}
          >
            <div style={{ lineHeight: "22px" }}>
              Bạn chưa tạo VPC network nào thuộc Datacenter này.
              <a href="vpc">
                <b>Tạo </b>
              </a>{" "}
              vpc network tại đây
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Network;
