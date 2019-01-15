import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col} from 'bootstrap-4-react'

export default class Icon extends Component {
  render () {
    return (
      <Col col="col-xs-6 col-sm-4 col-lg-2" className="one-icon">
        <Link to={this.props.url}>
          <img src={this.props.img} alt="icon" className="img-responsive center-block" />
        </Link>
      </Col>
    )
  }
}
