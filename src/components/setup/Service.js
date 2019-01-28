import React, { Component } from "react";
import Slider from "rc-slider";
import { Col, Nav, Tab } from "bootstrap-4-react";
import "rc-slider/assets/index.css";

class Service extends Component {
  constructor(props) {
    super(props)
    this.state={
      cpu: 20,
      ram: 30,
      ssd: 30
    }
  }
  handleChangeCPU = (value) => {
    this.setState({
      cpu: value
    })
    this.props.getServices(this.state)
  };

  handleChangeRAM = (value) => {
    this.setState({
      ram: value
    })
    this.props.getServices(this.state)
  }

  handleChangeSSD = (value) => {
    this.setState({
      ssd: value
    })
    this.props.getServices(this.state)
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <Nav tabs role="tablist">
                  <Nav.ItemLink
                    active
                    href="#simpleplans"
                    id="simpleplans-tab"
                    data-toggle="tab"
                    aria-selected="true"
                  >
                    Simple Plans
                  </Nav.ItemLink>
                  <Nav.ItemLink
                    href="#highplans"
                    id="highplans-tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    High Plans
                  </Nav.ItemLink>
                  <Nav.ItemLink
                    href="#gpuplans"
                    id="gpuplans-tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    GPU Plans
                  </Nav.ItemLink>
                </Nav>
                <Tab.Content>
                  <Tab.Pane id="simpleplans" aria-labelledby="simpleplans-tab" show active>
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
                            onChange={this.handleChangeCPU}
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
                            onChange={this.handleChangeRAM}
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
                            onChange={this.handleChangeSSD}
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
                  </Tab.Pane>
                  <Tab.Pane id="highplans" aria-labelledby="highplans-tab">
                    Nulla est ullamco ut irure incididunt nulla Lorem Lorem
                    minim irure officia enim reprehenderit. Magna duis labore
                    cillum sint adipisicing exercitation ipsum. Nostrud ut anim
                    non exercitation velit laboris fugiat cupidatat. Commodo
                    esse dolore fugiat sint velit ullamco magna consequat
                    voluptate minim amet aliquip ipsum aute laboris nisi. Labore
                    labore veniam irure irure ipsum pariatur mollit magna in
                    cupidatat dolore magna irure esse tempor ad mollit. Dolore
                    commodo nulla minim amet ipsum officia consectetur amet
                    ullamco voluptate nisi commodo ea sit eu.
                  </Tab.Pane>
                  <Tab.Pane id="gpuplans" aria-labelledby="gpuplans-tab">
                    Sint sit mollit irure quis est nostrud cillum consequat
                    Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo
                    veniam Lorem aliquip laborum occaecat qui Lorem esse mollit
                    dolore anim cupidatat. Deserunt officia id Lorem nostrud
                    aute id commodo elit eiusmod enim irure amet eiusmod qui
                    reprehenderit nostrud tempor. Fugiat ipsum excepteur in
                    aliqua non et quis aliquip ad irure in labore cillum elit
                    enim. Consequat aliquip incididunt ipsum et minim laborum
                    laborum laborum et cillum labore. Deserunt adipisicing
                    cillum id nulla minim nostrud labore eiusmod et amet.
                    Laboris consequat consequat commodo non ut non aliquip
                    reprehenderit nulla anim occaecat. Sunt sit ullamco
                    reprehenderit irure ea ullamco Lorem aute nostrud magna.
                  </Tab.Pane>
                </Tab.Content>
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Service;
