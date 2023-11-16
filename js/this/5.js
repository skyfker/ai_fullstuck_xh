// function foo(){}

// var foo = function(){}

var obj = {
   a:1 
}
var foo = ()=>{  //箭头函数没有this
    console.log(this.a);
}
foo()
function bar(){
    console.log(this.a);
}
bar.call(obj)
