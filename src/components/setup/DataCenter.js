import React, { Component } from "react";
import { Row, Col } from "bootstrap-4-react";

class DataCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  changeLocation = () => {
    var location = document.getElementsByClassName('one-location')
    console.log(location)
    Object.keys(location).forEach(key=>{
      location[key].classList.remove('selected')
    })
    console.log(this)
  };
  render() {
    return (
      <Row>
        <Col col="col-sm-3 xs-6">
          <div
            onClick={() => this.changeLocation()}
            className="one-location text-center selected"
            data-location="Hà Nội"
          >
            <span>Hà Nội</span>
          </div>
        </Col>
        <Col col="col-sm-3 xs-6">
          <div
            onClick={() => this.changeLocation()}
            className="one-location text-center"
            data-location="Hồ Chí Minh"
          >
            <span>Hồ Chí Minh</span>
          </div>
        </Col>
      </Row>
    );
  }
}

export default DataCenter;
