# 爬楼梯

- 读题
    - 数学函数思维
    2种方法
    f() n阶台阶有多少种走法 函数式思想
        f(n-1)
        f(n-2)
    f(n) = f(n-1) + f(n-2)
    - 递归
        并不是一种算法，是实现的方式
        内存的不断使用，函数栈的入栈
        f(10)   执行了函数 推入执行栈
        let a = 0;  内存里开辟了一个数值型的内存空间，并把值1 放进去了

        代码的执行是一个栈数据结构

- 函数运行有比较大的内存开销