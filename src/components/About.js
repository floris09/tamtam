import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../styles/components/About.css'

class About extends PureComponent {

componentWillMount(){
}

render() {
  return (
    <div className='about-component'>
      <div className='about-container'>
        <h2>WE ARE TAM TAM</h2>
        <p>Tam Tam is a full service digital agency focusing on Dutch Digital Service Design. We combine strategy, design, technology and interaction to make the digital interactions between company and customer valuable and memorable. We work for awesome brands with a team of 120 digitals from our office in Amsterdam. Making great work and having a blast doing it. That’s what we believe in.</p>
      </div>
    </div>
  )
}
}

export default connect(null, { })(About)
