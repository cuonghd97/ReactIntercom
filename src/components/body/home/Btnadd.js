import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Btnadd extends Component {
  render () {
    return (
      <Link to='/' className="btn btn-success" style={{marginTop: '0px'}}>Tạo máy ảo mới</Link>
    )
  }
}
