# DNS 解析  IP协议
1. 客户端从本地服务器查找IP
2. 再去根域名服务器查找IP
3. 再去顶级域名服务器查找IP
4. 最后去到目标域名服务器查找IP，找到了
5. 将IP缓存进本地的dns缓存区

# TCP
- 可靠性高：超时重传（TCP会备份数据包）
- 拥塞控制：假如固定时间我发10个包，网络状态不好的时候，我就只发2个包。
- 丢包重传：（保证有序性）

- 3次握手
1. 客户端给服务端发送建立连接的请求 SYN-SENT 状态
2. 服务端向客户端发送已收到请求的应答 SYN-RECV 状态
3. 客户端接收到同意连接的应答后，再次发送一个确定的请求 双方进入ESTABLISHED 状态

- 为什么两次握手不行

- HTTP数据传输

- 4次挥手断开连接
1. 客户端请求发送完数据后，发送断开连接请求（FIN-WAIT-1 状态）
2. 服务端收到断开连接请求（FIN-WAIT-1 状态），通知应用层释放TCP连接（ACK-FIN-WAIT-2 状态），此时不再接受客户端请求。
3. 服务端如果还有没发送完的数据，则会继续发送。完毕后回想客户端发送释放连接的应答
4. 客户端接收到释放连接应答后，向服务端发送确认请求。

# UDP
- 不可靠
 1. 不需要建立连接：UDP没有确认机制，所以数据包有可能丢失，有可能乱序。
 2. 不会给数据包拼接过多的字段
 3. 没有拥塞控制

 - 效率高

 - 应用场景：
 语音通话 视频通话 直播 游戏

 
# 浏览器获取到服务器资源后
 - 解析 HTML 资源生成 DOM 树
    1. 浏览器接收到的是二进制的字节数据，浏览器会将这些二进制的数据解析成字符串
    2. 对字符串进行语法分析

 - 解析 CSS 资源生成 CSSOM 树
 - 将 DOM 树和 CSSOM 树进行关联，生成渲染（render）树
    1. 只会包含需要显示的节点
    2. 根据渲染树来绘制页面 （回流）
    3. GPU 绘制，合成图层 显示在页面上 （重绘）


# 回流
    修改一个元素的几何属性会导致回流
    1. 修改宽高
    2. 页面初次渲染
    3. 添加删除元素
    4. 改变窗口大小

# 重绘


# 浏览器的优化策略
    当我们修改一个元素的几何属性导致浏览器需要回流时，浏览器会维护一个渲染队列，将需要回流的操作存入队列中，等到后续没有回流行为或者达到阈值时，会一次性执行队列中的所有操作。

    offsetxxx
    clientxxx

    会导致渲染队列强制刷新

    ```
    let el = document.querySelector('app')
    el.Top = el.offsetTop + 1 + 'px'

    ```

# js 加载执行会阻塞html 的渲染
    解决方案： 在script标签中添加 async defer 属性，这样加载js文件的时候就不会阻塞html的渲染了。（执行是一定会阻塞的）

# js操作DOM慢？

 1. dom 结构在js引擎眼里有很庞大的属性
 2. dom 引擎线程和渲染线程是互斥的，一旦js修改dom操作过多，线程之间就会的切换会带来性能的阻塞
