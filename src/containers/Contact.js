import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchInstagram from '../actions/instagram/fetch'
import {  Navbar, Footer, Form } from '../components'
import '../styles/containers/Contact.css'

class Home extends PureComponent {

componentWillMount(){

}

render() {
  return (
    <div className="Home">
      <Navbar contact='white'/>
      <div class='contact-component'>
      <div className='contact-header'>
        WE WOULD LOVE TO HEAR FROM YOU
      </div>
      <Form />
      </div>
      <Footer />
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, { fetchInstagram })(Home)
