import React, { Component } from "react";

class IBMSecurity extends Component {
  isChecked = e => {
    this.props.getIBMSecurity(e.target.checked)
  };
  render() {
    return (
      <div className="checkbox-wrapper">
        <label className="noselect network-label">
          <input
            className="check-box-custom active-security-checkbox"
            type="checkbox"
            onChange={e => this.isChecked(e)}
            defaultValue={1000000}
          />{" "}
          Active IBM Security feature{" "}
          <span style={{ fontWeight: "bold" }}>(1,000,000 VND)</span>
        </label>
      </div>
    );
  }
}

export default IBMSecurity;
