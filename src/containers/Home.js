import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchInstagram from '../actions/instagram/fetch'
import { Instagram, About, Slider, Navbar, Footer } from '../components'
import '../styles/containers/Home.css'

class Home extends PureComponent {

componentWillMount(){

}

render() {
  return (
    <div className="Home">
      <Navbar home='white'/>
      <Slider />
      <About />
      <Instagram />
      <Footer />
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, { fetchInstagram })(Home)
