function foo(){
    var  myName = '阿美'
    let test1 = 1
    const test2 = 2
    var innerBar = {
        getName: function(){
            console.log(test1);
            return myName
        },
        setName: function(newName){}
    }
    return innerBar
}
var bar = foo()
bar.setName('洋洋')
console.log(bar.getName);


