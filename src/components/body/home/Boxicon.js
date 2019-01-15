import React, { Component } from 'react'
import { Row } from 'bootstrap-4-react'
import Icon from './icon/Icon';
import snapshot from '../../../images/icon-snapshot.png'
import volume from '../../../images/icon-volume.png'
import '../../../css/responsive.css'

export default class Boxicon extends Component {
  render () {
    return (
      <div className="box icons text-center">
        <Row>
          <Icon url='/' img={snapshot}/>
          <Icon url='/' img={volume}/>
          <Icon url='/' img={volume}/>
          <Icon url='/' img={volume}/>
          <Icon url='/' img={volume}/>
          <div className="clearfix"></div>
        </Row>
      </div>
    )
  }
}
