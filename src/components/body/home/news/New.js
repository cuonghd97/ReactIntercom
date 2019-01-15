import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class New extends Component {
  render () {
    return (
      <div className="one-news">
        <h4><NavLink to='#'>{this.props.newTitle}</NavLink></h4>
        <p className="date">{this.props.newDate}</p>
        <p className="news-text" />
        <p>{this.props.newContent}</p>
        <ul>
          <li><strong>Thời gian tiến hành</strong>: {this.props.timeExcute}</li>
          <li><strong>Downtime Network</strong>: {this.props.downTime}</li>
          <li><strong>Phạm vi ảnh hưởng</strong>: {this.props.sideEffect}</li>
        </ul>Xem thêm chi tiết <Link to={this.props.newDetail}>tại đây</Link>:&nbsp;<Link to={this.props.upgrade}>{this.props.upgradeText}</Link>
      </div>
    )
  }
}
