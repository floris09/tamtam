import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Home,
  Contact,
  Success,
  Nav
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/success" component={Success} />
          <Route path="/nav" component={Nav} />
      </div>
    )
  }
}
