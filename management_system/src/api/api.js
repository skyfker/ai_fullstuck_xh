/**
 * 整个项目api的统一管理
 */
import request from "./request";

export default {
    getTableData: () => {
        return request({
            url: "/home/getTableData",
            method: "get",
        });
    },
    getCountData: () => {
        return request({
            url: "/home/getCountData",
            method: "get",
        });
    },
    getChartData: () => {
        return request({
            url: "/home/getChartData",
            method: "get",
        });
    },
    getUserData(params) {
        return request({
         url: '/user/getUserData',
         method: 'get',
         data: params
        })
    },
}