import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import './../scss/main.scss'

export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
        </div>
    )
  }
}
