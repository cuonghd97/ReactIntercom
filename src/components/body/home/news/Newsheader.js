import React, { Component } from 'react'

export default class Newsheader extends Component {
  render () {
    return (
      <h3 style={{marginTop: '30px', textTransform: 'uppercase', fontWeight: 'bold'}}>
        <span className="border-label">Tin tức</span>
      </h3>
    )
  }
}
