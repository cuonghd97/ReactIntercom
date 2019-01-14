import React, { Component } from 'react'
import VM from '../images/VM.svg'
import Deploy from '../images/Deploy.svg'
import VPC from '../images/VPC.svg'
import Billing from '../images/Billing.svg'

export default class Leftmenu extends Component {
  render () {
    return (
      <div id="left-menu" style={{marginRight: '0px', paddingRight: '0px', position: 'absolute', top: '-60px', bottom: 0}}>
        <ul>
          <li style={{height: '60px', lineHeight: '30px', backgroundColor: '#f5f5f5'}}>
            <a className="lang" href style={{display: 'inline', color: '#4c4d4f'}} title="Vietnamese">VN</a> | <a className="lang" href style={{paddingLeft: '0px', display: 'inline', color: '#4c4d4f'}} title="English">EN</a>
          </li>
          <li className="selected">
            <a href><img alt="#" src={VM} /></a> <a href="index">VM</a>
          </li>
          <li>
            <a href><img alt="#" src={Deploy} /></a> <a href="deploy">Tạo mới</a>
          </li>
          <li>
            <a href><img alt="#" src={VPC} /></a> <a href="vpc">VPC</a>
          </li>
          <li>
            <a href><img alt="#" src={Billing} /></a> <a href="account-settings">Thanh toán</a>
          </li>
        </ul>
      </div>
    )
  }
}
