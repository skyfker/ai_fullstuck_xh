# vite 之前的前端工程化脚手架

- 把项目跑起来
    vue 文件  .vue文件  css(styus)  image
    静态资源  打包一下， 可执行的

- 打包
    - 将src目录下的资源打包到index.html里面运行
    - vite/webpack 现代MVVM 开发工艺  基于命令的后端实现
    webpack node
    vite node + go + rust

- vite webpack 的比较
    - webpack 配置比较复杂：entry output  module  plugins 
      webpack 学习成本高 配置复杂
      vite 配置比较简单
    - vite script type="module" 引入main.jsr入口文件
        利用了es6 Module 更快 boundless 只有vite的 1/10
        webpack 早期的没有ES6 Module可以用，需要用webpack来打理文件的依赖关系，打包 慢

- dist目录就是我们要上线的目录
- bable
    js语法转换器 js 得到新生，最新的语法可以放心的使用，babel 会帮我们转译
    @babel/core 核心功能
    @babel/preset-env   预处理  按环境的要求编译成相应的代码 默认es6+ -> es5
    - webpack 是厂长
    - babel 车间主任
    - 将相应后缀文件拉到babel 车间转译 babel-loder
        module test /\*.js$/
        编译的工作时间