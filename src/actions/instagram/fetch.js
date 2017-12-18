import API from '../../api/client'
export const FETCHED_INSTAGRAM = 'FETCHED_INSTAGRAM'

const api = new API()

export default () => {
  return (dispatch) => {

    api.get('/')
      .then((result) => {

        dispatch({
          type: FETCHED_INSTAGRAM,
          payload: result.body
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
