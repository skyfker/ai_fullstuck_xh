# react + AI 结合

- 百度翻译
    - nlp 任务 翻译
        选择语言  ->  transformers.js  huggingface 推出的transformers python 的平替

- 项目介绍
    - 代码优化
        - 函数封装
        - 配置const 声明大写
        - 面向对象封装
            - es6 提供了类java等企业级大型项目的class static extends， get set 等语法糖机制
            - 语法糖：底层还是原型式
            - transformers pipeline 封装了 MyTranslatePipeline 类
            - 使用了单例模式
                开销很大，只能实例化一次，在一次任务中，也只需要一次，之后可以复用，单例模式杜绝了没必要的多次实例化
                - 再举个例子，登录框

- transformers.js js库
    - 单例？
    反复的调用
    - 耗时
    - initiate
        装载下载文件
    - progress
        file percentage
        更新进度（模型运行在前端 大小400M+）
    - done
        移除 filter
    - update
        nlp translate 任务
    - complete

- 先从react组件设计出发，如何实现响应式，
- 介绍一下 transformers.js
- 亮点：前端和nlp任务完全分离，因为这个任务比较耗时，