var arr = []

for(var i = 0;i<10;i++){//2. var->let  输出0-9  因为let{}形成块级作用域
    arr[i] = function(){
        console.log(i);
    }
}

for(var j=0;j<arr.length;j++){//1.输出10个10
    arr[j]()
}
