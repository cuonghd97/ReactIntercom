import React, { Component } from 'react'
import logo from '../images/logo.png'
export default class Mobilemenu extends Component {
  render () {
    return (
      <div className="mobilemenu showonmobile">
        <div className="container" style={{textAlign: 'center'}}>
          <button className="expand-menu" type="button"><span /></button>
          <div className="logo">
            <a href="#"><img src={logo} alt='anh' style={{height: '50px'}} /></a>
          </div>
          <div className="box-admin">
            <ul>
              <li>
                <a href="#"><i className="glyphicon glyphicon-user" /></a>
                <div className="popmenu popmenu-right">
                  <ul>
                    <li>
                      <a href="#" style={{borderBottom: '1px solid #e5e5e5'}}><i className="fa fa-sign-in" />Logout</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-edit" />Hoá don</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
