import React, { Component } from 'react'
import Mobilemenu from './Mobilemenu'
import Header from './Header'
import Leftmenu from './Leftmenu'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Mobilemenu></Mobilemenu>
          <Header></Header>
          <div id="content" style={{position: 'relative'}}>
            <Leftmenu></Leftmenu>
          </div>
      </div>
    )
  }
}
