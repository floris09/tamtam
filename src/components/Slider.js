import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import slide from '../actions/slider/fetch'
import '../styles/components/Slider.css'

class Slider extends PureComponent {

componentWillMount(){
  this.props.slide(0)
  this.newSlide(0)
}

sleep(ms){
  return new Promise(res => setTimeout(res, ms))
}

async newSlide(index){
  await this.sleep(5000)
  if (index === 2) { this.props.slide(0); return this.newSlide(0) }
  else { this.props.slide(index+1); return this.newSlide(index+1) }
}

render() {
  return (
    <div className='slider-component' style={{backgroundImage:'url(' + this.props.slider + ')'}}>
      <div className='slider-container'>

      </div>
    </div>
  )
}
}

const mapStateToProps = ({slider}) => ({slider})

export default connect(mapStateToProps, { slide })(Slider)
