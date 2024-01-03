# 网易云音乐

- 组件思维
    - 图标组件库
    - layout 组件
    - 业务组件
        - Menu 不用自己开发，ElementPlus
        - Swiper
        - Music
- SPA
    Menu -> router
- 数据接口

## vue 中大型项目开发流程

- 路由  组件思维
    App(根组件) -> router-viwe(vue-router内置的组件) -> 页面级别组件(views/) -> 子组件

- 样式准备
    - reset
    - stylus
    - tailwindcss  原子化css
        - 安装 
        npm i -D tailwindcss 开发阶段用的库，上线的时候不用
        - 初始化
        npx tailwindcss init -p
        npx 包运行工具
        页面样式也和汽车组装一样的,原子化，不需要写样式
        - w-1 w代表宽度 1个单位 0.25rem
        - flex flex-col flex-shrink-0 items-stretch 原子样式的表达
    - 主题风格样式


- Layout
- 页面级别组件
- 组件

## 项目加分项或难点
    - 多级路由中meta属性一定要添加
        ？
    - tailwindcss 加快样式开发速度
        - 适配问题  w-56  w-screen rem
    - 区别开发阶段
        dev test product 
        npm i -D
    - 单页应用，在组件化开发之前要搭好
    Layout，跟Layout 相关组件放在 /component/layout/

## 考点
- flex 布局
    items-stretch align-items:stretch;
    flex-shrink-0 不缩
    弹 flex：1; flex-grow: 1; flex-shrink: 1; flex-basis: 0%;

- createWebHashHistory 和 createWebHistory 的区别
    - hash 路由 兼容性好--url的一部分
        https://www.juejin.com:8080/user/1221?a=1&n=2#/discover
        https://www.juejin.com:8080/user/1221?a=1&n=2#/music
        url的hash部分发生改变 页面不会重新刷新 页面瞄点

    -    缺点 和传统的路由不太一样
        html5 提供history 路由 优点是和传统路由一样，缺点兼容性有问题

- vue-router js 跳转路由
    - vue-router 提供了useRouter useRouter 两个函数
    - useRouter() 拿到路由管家对象，在这个对象上有push方法
    {name 对应 route.name} 配置时name 属性不能少
    - useRoute() 拿到当前路由对象 meta 属性 关于这个路由的所有东西
    - 路由的切换，直接通过分享闯进来

- vue 的开发思想
    - 组件化思想 
        - components
            - layout
            - common
        - views/ pages/
        - ElementPlus
    - 数据驱动思想 状态会改变  数据状态
        - 数据绑定 {{}}
        - :calss  :style  :动态绑定  响应式 
        - props
        - computed
        - vuex
        - api