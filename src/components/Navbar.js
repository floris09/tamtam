import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/Logo.png'
import { push } from 'react-router-redux'
import '../styles/components/Navbar.css'

class Navbar extends PureComponent {

route(path) {
  this.props.push(path)
}

render() {
  const {home, people, contact} = this.props

  return (
    <div className='navbar'>
      <div id='menu' onClick={this.route.bind(this,'/nav')}><i class="material-icons">menu</i></div>
      <img src={Logo} alt='logo' id='logo'/>
      <p id='home' onClick={this.route.bind(this,'/')} style={{color: home}}>Home</p>
      <p id='people' style={{color: people}}>People</p>
      <p id='contact' onClick={this.route.bind(this,'/contact')} style={{color: contact}}>Contact</p>
    </div>
  )
}
}

export default connect(null, { push })(Navbar)
