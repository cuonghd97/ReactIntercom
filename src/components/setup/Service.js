import React, { Component } from "react";
import Slider from "rc-slider";
import { Col } from "bootstrap-4-react";
import "rc-slider/assets/index.css";

class Service extends Component {
  handleChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <div className="tabbable-panel">
                  <div className="tabbable-line">
                    <ul className="nav nav-tabs plan-tabs">
                      <li className="active" id="simple-plan">
                        <a>Simple Plans</a>
                      </li>
                      <li id="high-plan">
                        <a>High Plans</a>
                      </li>
                      <li id="gpu-plan">
                        <a>GPU Plans</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <Col
                  col="col-xs-12"
                  style={{ backgroundColor: "beige", padding: "25px 25px" }}
                >
                  <div>
                    <h2>CPUs</h2>
                    <div style={{ margin: "50px 0" }}>
                      <Slider
                        min={20}
                        defaultValue={20}
                        marks={{
                          20: {
                            style: { color: "black" },
                            label: <strong>1 Core</strong>
                          },
                          40: {
                            style: { color: "black" },
                            label: <strong>2 Core</strong>
                          },
                          60: {
                            style: { color: "black" },
                            label: <strong>4 Core</strong>
                          },
                          80: {
                            style: { color: "black" },
                            label: <strong>6 Core</strong>
                          },
                          100: {
                            style: { color: "black" },
                            label: <strong>8 Core</strong>
                          }
                        }}
                        step={null}
                        onChange={this.handleChange}
                        handleStyle={{
                          borderColor: "blue",
                          height: 15,
                          width: 15,
                          marginLeft: -7,
                          marginTop: -5,
                          backgroundColor: "rgb(171, 226, 251)"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2>RAM</h2>
                    <div style={{ margin: "50px 0" }}>
                      <Slider
                        min={20}
                        defaultValue={30}
                        marks={{
                          30: {
                            style: { color: "black" },
                            label: <strong>1 GB</strong>
                          },
                          60: {
                            style: { color: "black" },
                            label: <strong>2 GBs</strong>
                          },
                          90: {
                            style: { color: "black" },
                            label: <strong>3 GBs</strong>
                          }
                        }}
                        step={null}
                        onChange={this.handleChange}
                        handleStyle={{
                          borderColor: "blue",
                          height: 15,
                          width: 15,
                          marginLeft: -7,
                          marginTop: -5,
                          backgroundColor: "rgb(171, 226, 251)"
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ clear: "both" }} />
                  <br />
                  <div>
                    <h2>SSD</h2>
                    <div>
                      <Slider
                        min={20}
                        defaultValue={30}
                        marks={{
                          30: {
                            style: { color: "black" },
                            label: <strong>10 GBs</strong>
                          },
                          60: {
                            style: { color: "black" },
                            label: <strong>20 GBs</strong>
                          },
                          90: {
                            style: { color: "black" },
                            label: <strong>30 GBs</strong>
                          }
                        }}
                        step={null}
                        onChange={this.handleChange}
                        handleStyle={{
                          borderColor: "blue",
                          height: 15,
                          width: 15,
                          marginLeft: -7,
                          marginTop: -5,
                          backgroundColor: "rgb(171, 226, 251)"
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Service;
