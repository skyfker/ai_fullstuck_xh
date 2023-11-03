// 递归
// 自顶向下
// 每个问题都相同
// 退出条件

// function climbStairs(n){
//     if(n===1) return 1;
//     if(n===2) return 2;
//     return climbStairs(n-1)+climbStairs(n-2);
// }

// console.log(climbStairs(10))  超出时间限制


//怎么解决递归带来的内存问题
//递归的优点：简单 但性能不好
//如果不往执行栈里push太多函数
//入栈过的函数是没有必要再入栈的：记忆法
//两种做法：
// const f = [];
// const climbStairs = function(n){
//     //退出条件
//     if(n===1) return 1;
//     if(n===2) return 2;
//     if(f[n]===undefined){//第一次
//         //函数嵌套函数
//         f[n] = climbStairs(n-1)+climbStairs(n-2);//递归公式
//     }
//     return f[n];
// }

//不用递归  for 循环 
const climbStairs = function(n){
    const f =[]; //记忆优化
    f[1] = 1;
    f[2] = 2;
    for(let i = 3;i<=n;i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}