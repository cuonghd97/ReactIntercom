import React, { Component } from "react";
import { Row, Col, Form, Button } from "bootstrap-4-react";
import { NavLink } from "react-router-dom";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: false
    };
  }

  isChange = e => {
    const name = e.target.name;
    const value = e.target.checked;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e, data) => {
    e.preventDefault();
    this.props.getNotification(data);
  };

  render() {
    return (
      <div>
        <div className="box-header text-center with-margin">Notifications</div>
        <div className="box white billing-box notification-box grey-text">
          <div className="active">
            <Row>
              <Col col="col xs-12 lg-8 md-8">
                <NavLink to="#">
                  Nhận email thông báo khi CPU vượt quá ngưỡng định trước
                </NavLink>
                <Form.Group>
                  <Form.Check>
                    <Form.CheckInput
                      type="checkbox"
                      name="notification"
                      id="notification"
                      onChange={e => this.isChange(e)}
                    />
                    <Form.CheckLabel
                      htmlFor="notification"
                      id="label-notification"
                    >
                      Nhận email cảnh báo CPU
                    </Form.CheckLabel>
                  </Form.Check>
                </Form.Group>
              </Col>
              <Col col="col xs-12 lg-4" className="text-right">
                <Button
                  success
                  onClick={(e, data) => this.handleSubmit(e, this.state)}
                >
                  Lưu
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
