import axios from './axios.js'

export function getDetail(id) { //export 写在前面表示以后可能还要抛出其它，引用时用 import {}
    return axios.get(`/goods/detail/${id}`)// 后端决定的如何请求
}