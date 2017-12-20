import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/Logo.png'
import '../styles/components/Navbar.css'

class Navbar extends PureComponent {

componentWillMount(){
}

render() {
  return (
    <div className='navbar'>
      <img src={Logo} alt='logo' id='logo'/>
      <p>Home</p>
      <p>People</p>
      <p>Contact</p>
    </div>
  )
}
}

export default connect(null, {  })(Navbar)
