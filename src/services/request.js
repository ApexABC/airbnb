import axios from 'axios'
class ZQRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.instance.request({
      method: 'get',
      ...config
    })
  }
  post(config) {
    return this.instance.request({
      method: 'post',
      ...config
    })
  }
}
const BASE_URL = 'http://codercba.com:1888/airbnb/api'
export default new ZQRequest(BASE_URL, 5000)
