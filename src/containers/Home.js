import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchInstagram from '../actions/instagram/fetch'
import '../styles/Home.css'

class Home extends PureComponent {

componentWillMount(){
  this.props.fetchInstagram()
}

render() {
  return (
    <div className="Home">
      <img src={this.props.instagram.thumbnail_url} alt='instagram' />
    </div>
  )
}
}

const mapStateToProps = ({ instagram }) => ({ instagram })

export default connect(mapStateToProps, { fetchInstagram })(Home)
