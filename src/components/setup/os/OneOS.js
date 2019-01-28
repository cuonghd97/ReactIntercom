import React, { Component } from "react";
import { Card, Form } from "bootstrap-4-react"
const selectStyle = {
  margin: "0 -41px",
  width: "140px"
};

class OneOS extends Component {
  render() {
    return (
      <Card display="inline-block">
        <Card.Image src={this.props.srcImg} top />
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
    );
  }
}

export default OneOS;
