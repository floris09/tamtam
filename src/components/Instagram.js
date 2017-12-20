import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchInstagram from '../actions/instagram/fetch'
import '../styles/components/Instagram.css'

class Instagram extends PureComponent {

componentWillMount(){
  if(this.props.instagram.length === 0){this.props.fetchInstagram()}
}

render() {
  return (
    <div className='instagram-component'>
      <div className='instagram-container'>
        <h2>FOLLOW US ON INSTAGRAM</h2>
        <a href='https://instagram.com/tamtamnl' target='_blank' rel='noopener noreferrer'><h2 id='at'>@ tamtamnl</h2></a>

        { this.props.instagram.map((insta, index) => <div className='instagram-item' ><div className='instagram-pic' style={{backgroundImage:'url(' + insta.thumbnail_url + ')'}} alt='instagram' key={index} /> <p>{ insta.title }</p> </div> ) }
      </div>
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, { fetchInstagram })(Instagram)
