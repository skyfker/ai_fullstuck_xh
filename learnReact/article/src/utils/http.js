import axios from 'axios'
import {getToken} from '@/utils'

const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,

})

http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response.data
},(error) => {
    message.error('请求失败')
    return Promise.reject(error)
})

export { http }