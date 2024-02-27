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
