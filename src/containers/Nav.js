import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/Logo.png'
import { push } from 'react-router-redux'
import '../styles/components/Navbar.css'
import { history } from '../store'

class Nav extends PureComponent {

route(path) {
  this.props.push(path)
}

back(){
  return history.goBack()
}


render() {

  return (
    <div className='navbar'>
      <div id='close' onClick={this.back.bind(this)}><i class="material-icons">close</i></div>
      <img src={Logo} alt='logo' id='logo'/>

      <div className='click-menu'>
        <h2 onClick={this.route.bind(this,'/')}>Home</h2>
        <h2>People</h2>
        <h2 onClick={this.route.bind(this,'/contact')}>Contact</h2>
      </div>
    </div>
  )
}
}

export default connect(null, { push })(Nav)
