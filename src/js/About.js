import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to='/'>Home</Link>
        <p>For the previous image : Credit: NASA, ESA, the Hubble Heritage Team (STScI/AURA), and R. Gendler (for the Hubble Heritage Team) Acknowledgment: J. GaBany
          http://www.nasa.gov/mission_pages/hubble/science/m106.html</p>
      </div>
    )
  }
}
