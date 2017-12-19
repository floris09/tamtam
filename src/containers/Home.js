import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchInstagram from '../actions/instagram/fetch'
import { Instagram, About, Slider } from '../components'
import '../styles/containers/Home.css'

class Home extends PureComponent {

componentWillMount(){

}

render() {
  return (
    <div className="Home">
      <Slider />
      <About />
      <Instagram />
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, { fetchInstagram })(Home)
