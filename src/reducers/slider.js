import {
  FETCHED_SLIDE
} from '../actions/slider/fetch'
import florensis from '../assets/slider/Florensis.jpg'
import oxxio from '../assets/slider/Oxxio.png'
import walibi from '../assets/slider/Walibi.jpg'

export default (state = '', { type, payload } = {}) => {
  switch (type) {

    case FETCHED_SLIDE :
      const slides = [florensis, oxxio, walibi]
      return slides[payload]

    default :
      return state

  }
}
