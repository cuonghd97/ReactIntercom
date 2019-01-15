import React, { Component } from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <div id="header">
        <div id="lower-header">
          <NavLink to='/' style={{float: 'left'}}>
            <div style={{marginTop: '5px', paddingLeft: '135px'}}><img alt='anh' src={logo} /></div></NavLink>
          <div id="welcome">
            <span><span className="menu-trigger"><span style={{fontWeight: 'normal'}}>Chào mừng,</span>Snake</span></span>
            <div className="dropdown-menu-absolute">
              <NavLink to='/'>Tickets của tôi</NavLink> <NavLink to='/'>Hóa đơn chưa thanh toán</NavLink> <NavLink to='/'>Thiết lập tài khoản</NavLink> <NavLink to='/'>Ðăng xuất</NavLink>
            </div>
            <div className="sprite triangle-os" style={{fontSize: '11px'}} />
          </div>
          <div id="upper-header">
            <ul>
              <li>
                <NavLink to='/'>TRANG CHỦ</NavLink>
              </li>
              <li>
                <NavLink to='/'>TRỢ GIÚP VÀ HỖ TRỢ</NavLink>
              </li>
              <li>
                <NavLink to="/">Hotline 24/7: 1900.2010</NavLink>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
    )
  }
}
