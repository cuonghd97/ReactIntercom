import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Topnav extends Component {
  render () {
    return (
      <div id="top-nav" style={{width: '100%'}}>
        <NavLink activeClassName="active" to="/checkout/billing/">Thanh toán</NavLink>
        <NavLink activeClassName="active" to="/checkout/account/">Thiết lập tài khoản</NavLink>
        <NavLink activeClassName="active" to="/checkout/security/">Bảo mật</NavLink>
      </div>
    )
  }
}
