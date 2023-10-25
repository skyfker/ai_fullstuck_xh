//对象、
var obj = {
    name:'东鸡',
    age:18,
    health:80,
    smoke:function(){
        console.log("i'm smoking,cool");
        this.health--
    },
    drink: function(){
        console.log('oh god!');
        this.health++
    }
}

obj.girfriend = '刘亦菲'//添加属性（有则修改）

delete obj.girfriend

leng.smoke()
obj.smoke()
obj.drink()