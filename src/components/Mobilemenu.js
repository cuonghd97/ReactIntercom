import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default class Mobilemenu extends Component {
  render () {
    return (
      <div className="mobilemenu showonmobile">
        <div className="container" style={{textAlign: 'center'}}>
          <button className="expand-menu" type="button"><span /></button>
          <div className="logo">
            <Link to="/"><img src={logo} alt='anh' style={{height: '50px'}} /></Link>
          </div>
          <div className="box-admin">
            <ul>
              <li>
                <Link to="/"><i className="glyphicon glyphicon-user" /></Link>
                <div className="popmenu popmenu-right">
                  <ul>
                    <li>
                      <Link to="/" style={{borderBottom: '1px solid #e5e5e5'}}><i className="fa fa-sign-in" />Logout</Link>
                    </li>
                    <li>
                      <Link to="/"><i className="fa fa-edit" />Hoá don</Link>
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
