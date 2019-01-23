import React, { Component } from "react";
import VM from "../images/VM.svg";
import Deploy from "../images/Deploy.svg";
import VPC from "../images/VPC.svg";
import Billing from "../images/Billing.svg";
import { NavLink } from "react-router-dom";

export default class Leftmenu extends Component {
  render() {
    return (
      <div
        id="left-menu"
        style={{
          marginRight: "0px",
          paddingRight: "0px",
          position: "absolute",
          top: "-60px",
          bottom: 0
        }}
      >
        <ul>
          <li
            style={{
              height: "60px",
              lineHeight: "30px",
              backgroundColor: "#f5f5f5"
            }}
          >
            <NavLink
              className="lang"
              to="/"
              style={{ display: "inline", color: "#4c4d4f" }}
              title="Vietnamese"
            >
              VN
            </NavLink>{" "}
            |{" "}
            <NavLink
              className="lang"
              to="/"
              style={{
                paddingLeft: "0px",
                display: "inline",
                color: "#4c4d4f"
              }}
              title="English"
            >
              EN
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/home">
              <img alt="#" src={VM} />
            </NavLink>{" "}
            <NavLink activeClassName="selected" to="/home">
              VM
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/setup">
              <img alt="#" src={Deploy} />
            </NavLink>{" "}
            <NavLink activeClassName="selected" to="/setup">
              Tạo mới
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/">
              <img alt="#" src={VPC} />
            </NavLink>{" "}
            <NavLink activeClassName="selected" to="/">
              VPC
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/checkout/billing/">
              <img alt="#" src={Billing} />
            </NavLink>{" "}
            <NavLink activeClassName="selected" to="/checkout/billing/">
              Thanh toán
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
