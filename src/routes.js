import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Home,
  Contact,
  Success
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
      </div>
    )
  }
}
