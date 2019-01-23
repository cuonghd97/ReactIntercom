import React, { Component } from "react";
import { Col, Form, Button } from "bootstrap-4-react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  isChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, data) => {
    event.preventDefault();
    this.props.addUser(data)
  };

  render() {
    return (
      <div className="container">
        <Form id="form-add-user">
          <Col col="col xs-12 md-7 lg-6" className="block-left">
            <div className="block-label">
              <h3>Users</h3>
            </div>
            <div className="block-input">
              <Col col="col-md-6" className="form-group">
                <Form.Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={e => this.isChange(e)}
                />
              </Col>
              <Col col="col-md-6" className="form-group">
                <Form.Input
                  type="password"
                  id="pwd"
                  name="password"
                  placeholder="Password"
                  onChange={e => this.isChange(e)}
                />
              </Col>
            </div>
          </Col>
          <Col col="col xs-12 md-5 lg-6" className="block-right">
            <Button
              id="create-new-user"
              onClick={(event, data) => this.handleSubmit(event, this.state)}
            >
              Add user
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}
