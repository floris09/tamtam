import {
  FETCHED_SLIDE
} from '../actions/slider/fetch'
import florensis from '../assets/slider/Florensis.jpg'
import oxxio from '../assets/slider/Oxxio.png'
import walibi from '../assets/slider/Walibi.jpg'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {

    case FETCHED_SLIDE :
      const slides = [florensis, oxxio, walibi]
      const titles = ['FLORENSIS', 'OXXIO', 'WALIBI']
      return { image: slides[payload], title: titles[payload], index: payload }

    default :
      return state

  }
}
