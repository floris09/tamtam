import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import '../styles/components/Footer.css'

class Footer extends PureComponent {

componentWillMount(){
}

render() {
  return (
    <div className='footer'>
      <a href='https://www.facebook.com/tamtamnl' target='_blank' rel='noopener noreferrer'>
        <img src={facebook} alt='facebook'/>
      </a>
      <a href='https://twitter.com/tamtamnl' target='_blank' rel='noopener noreferrer'>
        <img src={twitter} alt='twitter'/>
      </a>
      <a href='https://instagram.com/tamtamnl' target='_blank' rel='noopener noreferrer'>
        <img src={instagram} alt='instagram'/>
      </a>
    </div>
  )
}
}

export default connect(null, {  })(Footer)
