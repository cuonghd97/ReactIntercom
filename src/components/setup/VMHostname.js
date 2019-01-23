import React, { Component } from "react";
import { Col, Form } from "bootstrap-4-react";

class VMHostname extends Component {
  render() {
    return (
      <Col col="col-sm-12">
        <h3 className="label-header">
          <span className="circle-number">1</span> VM Hostname{" "}
          <span style={{ fontSize: "18px" }}>(eg. host.domain.tld)</span>
        </h3>
        <Form
          className="ng-pristine ng-valid"
          id="server-hostname"
          name="server-hostname"
        >
          <Form.Input
            className="ng-pristine ng-untouched ng-valid ng-empty"
            type="text"
          />
        </Form>
      </Col>
    );
  }
}

export default VMHostname
