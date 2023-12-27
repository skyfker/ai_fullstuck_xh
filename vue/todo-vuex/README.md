# vue 数据流

- 数据流
    数据库 todos -> MVC 架构 router + controller + model

- HTTP 
    GET /todos MVC 
    router  /todos
    controller todosController 业务逻辑 select * from todos；
    model 表的结构抽象
    api 接口 返回json

- 前后端分离
    - api
    - vuex
        state  getters  mutations   actions

    - api  ->   vuex(管理着页面要的数据)    ->  components

- vue 组件开发难的是设计数据
    - ref/ reactive
    - props 父组件传递过来的
    - computed 计算属性