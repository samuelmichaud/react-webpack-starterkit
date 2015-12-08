import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import Home from './js/Home'
import About from './js/About'
import { Router, Route, Link, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>, document.getElementById('root'));
