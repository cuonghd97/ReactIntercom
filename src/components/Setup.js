import React, { Component } from "react";
import { Row, Col, Form } from "bootstrap-4-react";
import VMHostname from "./setup/VMHostname";
import DataCenter from "./setup/DataCenter";
import Service from "./setup/Service";

class Setup extends Component {
  render() {
    return (
      <div>
        <div className="ng-scope">
          <Row className="bigger-margin deploy">
            <Col col="col-sm-10">
              <Row>
                <VMHostname />
              </Row>
              <h3>
                <span className="circle-number">2</span> Datacenter
              </h3>
              <DataCenter />
              <br/>
              <div className="clearfix"></div>
              <h3><span className="circle-number">3</span> Gói Dịch Vụ</h3>
              <Service />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Setup;
