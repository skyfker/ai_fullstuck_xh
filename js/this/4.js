function foo(x,y){
    console.log(this.a,x + y);
}

var obj ={
    a:1
}

// foo.call(obj, 4, 5)//1 9
// foo.apply(obj, [4, 5])

let bar = foo.bind(obj, 4, 5)  //两边都可以传参数，优先用bind，不够再去bar找
bar(4, 5)