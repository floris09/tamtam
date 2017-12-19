import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import slide from '../actions/slider/fetch'
import '../styles/components/Slider.css'

class Slider extends PureComponent {
constructor(props){
  super(props)
  this.state = { clicked: false }
}

componentWillMount(){
  this.newSlide(0)
}

sleep(ms){
  return new Promise(res => setTimeout(res, ms))
}

async newSlide(id){
    const { index } = this.props.slider

    if (this.state.clicked) { await this.sleep(5000); return this.newSlide(index)}

    if (id === 2) { this.props.slide(0); await this.sleep(5000); return this.newSlide(0) }
    else { this.props.slide(id+1); await this.sleep(5000); return this.newSlide(id+1) }
}

async next(index) {
  this.setState({ clicked: true })

  if (index === 2) { this.props.slide(0) }
  else { this.props.slide(index+1) }

  await this.sleep(5000)

  this.setState({clicked: false})
}

async previous(index) {
  this.setState({ clicked: true })

  if (index === 0) { this.props.slide(2) }
  else { this.props.slide(index-1) }

  await this.sleep(5000)

  this.setState({clicked: false})
}



render() {
  return (
    <div className='slider-component' style={{backgroundImage:'url(' + this.props.slider.image + ')'}}>
      <div className='slider-container'>
        <h2>{ this.props.slider.title }</h2>
        <div className='arrow arrow-left' onClick={ this.previous.bind(this, this.props.slider.index)}>
          <i class="material-icons">keyboard_arrow_left</i>
        </div>
        <div className='black-button'>
          <p>View case</p>
        </div>
        <div className='arrow arrow-right' onClick={ this.next.bind(this, this.props.slider.index)}>
          <i class="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = ({slider}) => ({slider})

export default connect(mapStateToProps, { slide })(Slider)
