import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'

Mock.mock('/api/home/getTableData', 'get', homeApi.getTableData)
Mock.mock('/api/home/getCountData', 'get', homeApi.getCountData)
Mock.mock('/api/home/getChartData', 'get', homeApi.getChartData)
Mock.mock(/user\/getUserData/,"get", userApi.getUserList)
Mock.mock(/user\/deleteUser/,"get", userApi.deleteUser)
Mock.mock(/user\/addUser/,"post", userApi.createUser)
Mock.mock(/user\/editUser/,"post", userApi.updateUser)