# 1. js数组上有哪些方法

1. 增加：push()、unshift()、concat()、splice()
2. 删除：pop()、shift()、splice()、slice()
3. 修改：reverse()、sort()
4. 查找：indexOf()、lastIndexOf()、include()、find()
5. 转换：join()
6. 迭代：forEach()、map()、filter()、some()、every()
7. Array.from()、Array.of()

# 2. 字符串上面有哪些方法
1. 增加：concat()
2. 删除：slice()、substr()、substring() // 效果与slice()一模一样
3. 修改：replace()、split()、toLowerCase()、toUpperCase()、trim()、trimLeft()、trimRight()、padStart()、padEnd()、
4. 查找：indexOf()、lastindexOf()、startWith()、endsWith()、includes()
5. 转换：split()

# 3. 谈谈js中的类型转换机制
- 是什么：
js中有原始类型和引用类型：
原始类型：number string boolean undefined null symbol bigint
引用类型：[] {} function Date RegExp Set Map 

通常开发过程中，会用到一些显示类型转换的手段来完成逻辑开发。
Number...

在V8执行过程中还存在另一种类型转换 --- 隐式类型转换

通常发生在 比较运算符 和 算数运算符

==  !=  <  > if while 
+ - * / %

# 4. == 和 === 的区别
== 是比较运算符，比较的是值，不比较类型
=== 是比较运算符，比较的是值和类型

# 5. 深浅拷贝的区别？ 如何实现一个深拷贝
- 深浅拷贝通常只针对引用类型

- 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的指针。

 Object.assign()  slice()    concat()  [...arr]

- 深拷贝：层层拷贝，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
 JSON.parse(JSON.stringify(obj)) --- 无法处理 undefined Symbol function 循环引用


# 14. 说说JS中的事件模型？
1. DOM0级事件模型：onclick (无法控制事件在捕获冒泡哪个阶段执行)
2. DOM1级事件模型：addEventListener (可以控制事件在哪个阶段执行)
3. IE6以下：attachEvent (无法控制冒泡在哪个阶段执行)

# 15.  说说typeof 和 instanceof 的区别？
- typeof 
    能判断除了null之外的所有原始类型（typeof的底层逻辑是判断数据前是否有 000 ，null通体为0，所以被归为Object类型）

- instanceof
    能判断一个变量是否属于某种类型，是通过原型链来判断的

- object.prototype.toString()   object.prototype.tostring.call(x)
    例如：object.prototype.toString({})  => '[object Object]'
         object.prototype.toString([])  => '[object Object]'

         object.prototype.toString.call([])  => ''
         效果相当于[].toString()，但不是一个tostring()方法

    object.prototype.tostring.call(x)，该方法会让变量 x 调用对象上的tostring()方法.
    而[].toString()  就是调用数组身上的toString()方法
    
# 16. 说说Ajax的原理？
- 是什么：
    asyncronous javascript and xml，是一种异步js和网页交互技术，可以实现不刷新网页就跟服务器进行数据交互，更新页面

- 实现过程：
    1. 创建一个XMLHttpRequest对象
    2. 调用实例对象中的open()方法
    3. 调用实例对象中的send()方法
    4. 监听onreadyStateChange事件，通过判断readyState的值来获取到最终数据

- readyState:
0: xhr 刚刚创建，请求还没发
1：open 准备完成
2：请求已经发送出去
3：接收到了服务端的响应体
4：数据解析完成

# 17. 怎么实现上拉加载，下拉刷新？
1. 监听 toutchstart   toutchmove   toutchend  事件，记录手指移动的距离，大于临界值时实现刷新操作，其中使用transform:translateY() 来添加各处动画

2. 根据手指滑动的方向和容器顶部或底部到屏幕的距离来确定此时该执行上拉加载更多 还是下拉刷新

# 18. 防抖节流

# 19. 事件代理
- 事件委托：（多个子容器需要绑定相同事件）  将事件绑定到父容器上，通过事件对象的target属性判断事件触发的元素，然后执行相应的事件处理逻辑

# 20. 事件循环
- 是什么
  JS引擎在执行js代码时，会区分同步和异步代码，先执行同步代码在执行异步代码，异步代码中同样按照先执行同步代码再执行异步代码的顺序执行，以此往复。

- 异步
  1. 宏任务：script setTimeout()  setInterval()  setImmediate, I/O, UI-rendering  postMassage  

  2. 微任务：promise.then() nextTick(node)  MutationObserver

- Event-Loop（浏览器角度）
1. 执行同步代码（这也叫宏任务）
2. 执行微任务
3. 如果有需要，会渲染页面
4. 执行宏任务  （下一次event-loop的开始）

难点：
    1. 同步代码带来的微任务会在同步代码执行完后立即执行，而微任务带来的微任务会入微任务队列，按队列规则执行
    2. async/await async相当于promise， await 一脚把后续代码踹到微任务队列里,它自己也是微任务。但是浏览器给await开小灶提速，它会直接执行。

