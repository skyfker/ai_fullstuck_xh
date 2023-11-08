var isValid = function(s) {
    const obj={
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    const stack =[] //定义一个栈
    const len = s.length

    for(let i = 0;i<len;i++){
        if(s[i]=='('||s[i]=='['||s[i]=='{'){//将左括号推入栈中
            stack.push(s[i])
        }else{//只要不配对，后面都不用管了
            if(obj[stack.pop()] !== s[i]){//stack.pop() 会得到栈顶部的那个元素，即console.log(stack.pop)->栈顶部元素
                return false
            }
        }
    }
    return !stack.length// ! 的俩个作用：数字变成布尔值 再取反  
};