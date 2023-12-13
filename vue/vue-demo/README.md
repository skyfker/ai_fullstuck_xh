# Vue 开发工作流程

- 得到一个开发模板
    要开发企业级项目了，不用从0开始
    npm init vite
    node package manager
    - 基于vite 工作脚手架创建项目。
        选择 vue 
        选择 js
    - 项目开发模板 start template
    - npm config set registry https://registry.npmmirror.com/  npm国内镜像
    - npm i 安装了依赖

- 工程概念
    vite 工程需要的脚手架
    devDependencies 开发阶段的依赖，上线后不需要
    - 开发阶段
    - 测试阶段
    - 上线阶段
    - npm run script 脚本

- App.vue
    - vite的功劳，编译 .vue文件
        .style -> .css
    - 三段
        template
        script
        style
    - src/
        开发目录
    - dist/
        上线目录    交货了ovo

- 不再做DOM编程
    获取或重设html 动态编程不再需要操作DOM,DOM性能不好。
- template 数据绑定{{name}}，绑定script里的变量
    当它需要动态改变时，响应式编程  let name = ref(初始值)
    name.value = 更新值 template所有绑定到它的都会热更新