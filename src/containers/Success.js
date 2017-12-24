import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {  Navbar, Footer } from '../components'
import CheckIcon from 'material-ui/svg-icons/action/check-circle'
import '../styles/containers/Contact.css'

class Success extends PureComponent {

componentWillMount(){

}

render() {
  return (
    <div className="Success">
      <Navbar contact='white'/>
      <div class='contact-component'>
      <div className='contact-header'>
        WE WOULD LOVE TO HEAR FROM YOU
      </div>
      <div className='success-container'>
        <div id='check'><CheckIcon /></div>
        <p>Thank you, we have received your message</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, {  })(Success)
