- 我们有一个ajax 的异步获取数据的任务
- 写一个函数，并且返回一个promise实例， 可以thenable 可以await
- promise 实例初始状态为pending this.state = "pending"
    await p 就一直等待
- promise 构造函数中会立即执行传给它的执行器，也就是一个函数
    得到resolve，reject 两个函数
    执行器就是异步窗口的容器 当异步任务结束后，成功就调用resolve(data)，
    失败就调用reject(error)