import {
  FETCHED_INSTAGRAM
} from '../actions/instagram/fetch'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {

    case FETCHED_INSTAGRAM :
      return { ...payload }

    default :
      return state

  }
}
