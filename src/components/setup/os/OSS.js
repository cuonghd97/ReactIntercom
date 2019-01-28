import React, { Component } from "react";
import { Card, Form } from "bootstrap-4-react";
import centos from "../../../images/centos.png";
import ubuntu from "../../../images/ubuntu.png";
import debian from "../../../images/Debian.png";
import fedora from "../../../images/fedora.png";
import windows from "../../../images/windows.png";
const selectStyle = {
  margin: "0 -41px",
  width: "140px"
};

class OSS extends Component {
  isChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <Card.Group>
        <Card display="inline-block">
          <Card.Image src={centos} top />
          <Card.Body>
            <Card.Text>
              <Form.CustomSelect
                style={selectStyle}
                defaultValue="cent6"
                onChange={e => this.isChange(e)}
              >
                <option value="cent6">CentOS 6.7</option>
                <option value="cent7">CentOS 7</option>
              </Form.CustomSelect>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card display="inline-block">
          <Card.Image src={ubuntu} top />
          <Card.Body>
            <Card.Text>
              <Form.CustomSelect
                defaultValue="ubuntu14"
                style={selectStyle}
                onChange={e => this.isChange(e)}
              >
                <option value="ubuntu14">Ubuntu 14.04</option>
                <option value="ubuntu15">Ubuntu 15.04</option>
              </Form.CustomSelect>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card display="inline-block">
          <Card.Image src={debian} height="97.16" top />
          <Card.Body>
            <Card.Text>
              <Form.CustomSelect
                defaultValue="debian8"
                style={selectStyle}
                onChange={e => this.isChange(e)}
              >
                <option value="debian8">Debian 8</option>
              </Form.CustomSelect>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card display="inline-block">
          <Card.Image src={fedora} top />
          <Card.Body>
            <Card.Text>
              <Form.CustomSelect
                defaultValue="fedora21"
                style={selectStyle}
                onChange={e => this.isChange(e)}
              >
                <option value="fedora21">Fedora 21</option>
                <option value="fedora22">Fedora 22</option>
              </Form.CustomSelect>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card display="inline-block">
          <Card.Image src={windows} top />
          <Card.Body>
            <Card.Text>
              <Form.CustomSelect
                defaultValue="winsv2008"
                style={selectStyle}
                onChange={e => this.isChange(e)}
              >
                <option value="winsv2008">
                  Windows Server 2008 R2 Enterprise(Trial)
                </option>
                <option value="winsv2012">
                  Windows Server 2012 R2 Datacenter(Trial)
                </option>
              </Form.CustomSelect>
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Group>
    );
  }
}

export default OSS;
