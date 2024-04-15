import axios from 'axios'
import { message } from 'antd'


const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,

})

http.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    return response
},(error) => {
    message.error('请求失败')
    return Promise.reject(error)
})

export { http }