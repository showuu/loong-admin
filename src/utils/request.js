import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 9000
})

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default instance
