import axios from 'axios'
export const request = axios
request.defaults.timeout = '6666'
request.interceptors.request.use((req) => {
  if (PRODUCTION) {
    console.log(req.method, ':', req.url)
  }
  return req
})
