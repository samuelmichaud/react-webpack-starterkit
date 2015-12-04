import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import About from './About'
import Home from './Home'
import './../scss/main.scss'

export default class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/">
                <Route path="about" component={About}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    );
  }
}
