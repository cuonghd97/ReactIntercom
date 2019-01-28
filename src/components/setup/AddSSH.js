import React, { Component } from "react";

class AddSSH extends Component {
  render() {
    return (
      <p>
        <span className="simu-input-field">Bạn chưa tạo SSH Key nào</span>{" "}
        <a
          style={{margin: "auto"}}
          className="btn btn-primary"
          href="#"
        >
          Quản lý
        </a>
      </p>
    );
  }
}

export default AddSSH;
