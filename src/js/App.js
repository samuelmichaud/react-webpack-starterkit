import React, { Component } from 'react'
import { render } from 'react-dom'
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup'
import Header from './Header'
import './../scss/main.scss'

export default class App extends Component {
  render() {
    return (

        <div>
          <Header />
          <RouteCSSTransitionGroup
            component="div" transitionName="page"
            transitionEnterTimeout={500} transitionLeaveTimeout={200}
            >
            {this.props.children}
          </RouteCSSTransitionGroup>
        </div>
    )
  }
}
