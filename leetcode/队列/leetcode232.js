
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};


MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function() {
    //栈1倒入栈2
    if(!this.stack2.length){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
};

MyQueue.prototype.peek = function() {
    //栈1倒入栈2
    // if(!this.stack2.length){
    //     while(this.stack1.length){
    //         this.stack2.push(this.stack1.pop())
    //     }
    // }
    // return this.stack2[this.stack2.length-1]
    const val = this.pop()
    this.stack2.push(val)
    return val
};

MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};
