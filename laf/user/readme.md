# Promise

- es6 最让人兴奋的语法点
- Promise 类，then 控制执行流程
    JS单线程，耗时任务（定时器，事件），先跳过，接着执行后面的，
    代码的编写顺序和执行顺序不一致，不好理解
    - 将定时器、请求 等耗时任务，封装到函数里面，resolve函数
    - 实例上有一个then 方法，控制执行的流程
    - 调用resolve 函数就可以运行 then 