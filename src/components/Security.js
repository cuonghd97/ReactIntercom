import React, { Component } from 'react'
import Mobilemenu from './Mobilemenu';
import Footer from './Footer'
import Header from './Header';
import Leftmenu from './body/Leftmenu';
import Topnav from './checkout/Topnav';

export default class Account extends Component {
  render () {
    return (
      <div>
        <Mobilemenu></Mobilemenu>
        <Header></Header>
        <div id="content" style={{position: 'relative'}}>
          <Leftmenu></Leftmenu>
          <div id="container-itself" style={{minHeight: '940px', overflowY: 'auto'}}>
            <div id="content-itself">
              <div className="container-fluid">
                <Topnav/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
