function foo (...args){//剩余的参数。当不知道要传多少参数时可用
    // console.log(arguments[0]);
    console.log(args);
}

foo(1,2,3)