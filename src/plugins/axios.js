import axios from 'axios'
import { getCookieToken } from '@/compatibles/method'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

instance.interceptors.request.use(
  (config) => {
    const token = getCookieToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => Promise.reject(error.response.data)
)

export default instance
