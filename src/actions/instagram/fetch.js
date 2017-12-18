import API from '../../api/client'
export const FETCHED_INSTAGRAM = 'FETCHED_INSTAGRAM'

const api = new API()

export default () => {
  return (dispatch) => {

    api.get(`https://api.instagram.com/v1/users/tamtamnl/media/recent/?access_token=${process.env.ACCESS_TOKEN}`)
      .then((result) => {
        console.log('result body:' + result.body)
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
