# reactive 
reactive只能将引用类型代理成响应式，是因为proxy只接受引用类型

被代理对象中的任意属性发生修改，都应该将用到了这个属性的各个函数（副作用函数）重新执行一边，那么在此执行之前，就需要先为每一个属性都做好副作用函数的收集（依赖收集）

1. 用Proxy代理了对象
2. 在代理函数 get 中对 使用了的属性做 副作用函数收集
3. 在代理函数 set 中对 被修改的属性做 副作用函数的触发

# Reflect
将ES6及之后的所有隶属于object对象上的方法，挪到reflect对象上 (reflect 主要解决了一些程序性报错问题) 