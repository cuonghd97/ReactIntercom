import React, { Component } from "react";
import { Col, Form } from "bootstrap-4-react";
import { Button } from "bootstrap-4-react/lib/components";

export default class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      new_password2: ""
    };
  }

  isChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e, data) => {
    e.preventDefault()
    this.props.changePass(data)
  };

  render() {
    return (
      <Col col="col-lg-6">
        <div className="box-header text-center with-margin">Đổi mật khẩu</div>
        <div className="box white billing-box text-center">
          <div className="active">
            <Form.Group>
              <Form.Input
                id="current_password"
                type="password"
                name="current_password"
                placeholder="Mật khẩu hiện tại:"
                onChange={e => this.isChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                id="new_password"
                name="new_password"
                type="password"
                placeholder="Mật khẩu mới:"
                onChange={e => this.isChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                id="new_password2"
                name="new_password2"
                type="password"
                placeholder="Xác nhận mật khẩu mới:"
                onChange={e => this.isChange(e)}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                success
                id="btChangePass"
                onClick={(e, data) => this.handleSubmit(e, this.state)}
              >
                Đổi mật khẩu
              </Button>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
