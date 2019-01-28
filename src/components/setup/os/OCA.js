import React, { Component } from "react";

class OCA extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="inner">
          <div className="img">
            <img src="images/wordpress.png" style={{ width: "40px" }} />
          </div>
          <div>
            <span className="name">Wordpress</span>{" "}
            <span className="os">on Centos 6.7 X64</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OCA;
