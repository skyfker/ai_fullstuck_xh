## 海马体

- 2023年AIGC现象级应用
- 以前花99.9，拍海马体的照片

- 海马体App 用AIGC 技术完成的
    只需9.9，上传自己一些照片，就可以生成
- LLM 找到应用场景落地的成功案例
    tokens赚钱的
- 我很想加入海马体，这只团队找到了AI落地的感觉，
    肯定会更多的邻域，找到AI产品开发的灵感，
    在这样的团队里做前端开发会有好未来，应为未来是属于AI的，未来一定是属于知道怎么让AI落地的团队的。

## VUEX
- 是数据流管理的设计模式，由 state、mutations、actions、getters、modules 组成
- UI组件（简单）+ 数据管理（清晰、共享），大型项目。
- 缺点：学习成本高，难理解 mutation 
- options API太繁琐了，pinia和composition API更搭
- pinia更简单，更易理解
- createStore()  store单例  确保数据的安全和正确，只能有一个管管

## 介绍下自己
    了解你
    破冰
        我平时比较喜欢在掘金上写一些技术文章。
        通过阅读源码提升代码能力。

- vuex 源码学到了什么
    - 严谨的代码逻辑
        vuex 根据type查找mutation的时候 &&  找到了才返回。
    - createStore() 返回了store状态数单例，因为他只会被调用一次，确保状态正确性。
    - es6 class 去封装类
        - 把复杂留给自己 把简单交给别人
            options state 函数返回的对象是初始数据
            使用reactive() 将对象转换成响应式对象
            而且加上data数据的概念
            完成响应式数据的创建 即 this._state
            - _代表私有属性
            get 方法 get  state返回this._state

- es6 class 语法
    - es6 主要目的让JS 适合大型项目企业级开发，简洁优雅
    - 箭头函数  解构  模板字符串
        支持传统的面向对象
        class extends get set constructor() {}   static

    - 原型链式的面向对象
    - class只不过是语法糖
    - proxy
        聊到reactive的源码
    - Map WeakMap   JSON Object 新的数据结构
        set  WeekSet

    - es6 模块化
    - promise
    - async await