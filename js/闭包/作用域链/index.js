function bar(){//函数声明在了哪里，外层作用域就在哪里
    console.log(myname);
}

function foo(){
    var  myname = '涛哥'
    bar()
}

var myname = '万总'

foo()