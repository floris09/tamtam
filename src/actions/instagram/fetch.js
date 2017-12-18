import API from '../../api/client'
export const FETCHED_INSTAGRAM = 'FETCHED_INSTAGRAM'

const api = new API()

export default () => {
  return (dispatch) => {

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/BcU1Dy0gvRn')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/BcE7Qs0gdjL')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/Bb4YfsAgOMN')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/BbzTuaxAki0')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/BamE9E2gFaT')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })

    api.get('https://api.instagram.com/oembed?url=http://instagr.am/p/BaLv4igALsj')
      .then((result) => {
        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })
  }
}
