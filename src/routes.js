import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Home,
  Contact
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}
