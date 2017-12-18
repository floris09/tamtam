import request from 'superagent'

export default class ApiClient {

  get(path) {
    return request
      .get(path)
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    return headers
  }

}
