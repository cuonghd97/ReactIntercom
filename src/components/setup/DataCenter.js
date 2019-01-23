import React, { Component } from "react";
import { Row, Col } from "bootstrap-4-react";
class DataCenter extends Component {
  render() {
    return (
      <Row>
        <Col col="col-sm-3 xs-6">
          <div
            className="one-location text-center selected"
            data-location="Hà Nội"
          >
            <span>Hà Nội</span>
          </div>
        </Col>
        <Col col="col-sm-3 xs-6">
          <div className="one-location text-center" data-location="Hồ Chí Minh">
            <span>Hồ Chí Minh</span>
          </div>
        </Col>
      </Row>
    );
  }
}

export default DataCenter;
