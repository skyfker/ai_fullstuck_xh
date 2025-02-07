/**
 * 整个项目api的统一管理
 */
import request from "./request";

export default {
    getTableData: () => {
        return request({
            url: "/home/getTable",
            method: "get",
            mock: true
        });
    },
}