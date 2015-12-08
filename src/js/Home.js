import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1>Home</h1>
        <img src={require('./../img/hubble.jpg')} alt=""/>
      </div>
    )
  }
}
