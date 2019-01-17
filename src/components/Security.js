import React, { Component } from 'react'
import Topnav from './checkout/Topnav';
import Verify from './checkout/security/Verify';
import SSHKey from './checkout/security/SSHKey';
import HistorySecurity from './checkout/security/HistorySecurity';

export default class Account extends Component {


  render () {
    return (
      <div>
        <Topnav/>
        <div id="security">
          <div className="row gutter-80">
            <Verify/>
            <SSHKey
              isShowFormSSH={this.props.isShowFormSSH}
              changeShowFormSSH={()=>this.props.changeShowFormSSH()}
              getNewSSHKey={(data)=>this.props.getNewSSHKey(data)}
            />
          </div>
          <HistorySecurity/>
        </div>
      </div>
    )
  }
}
