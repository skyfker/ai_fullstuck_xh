function observe(obj) {
    new Observer(obj)
}

function defineReactive(obj, key, val) {
    const dep = new Dep()

    Object.defineProperty(obj, key, {
        get: function() {
            dep.addDep(Dep.target) //谁用到了这个key就收集谁 Dep.target === watcher
            return val
        },
        set: function(newVal) {
            if (newVal === val) return 
            // 修改obj.key的值，触发dep的addSub和notify方法
            dep.notify() //通知watcher触发函数
        }
    })
}

class Dep{
    constructor(){
        this.deps = [] //收集所有依赖的watcher的实例
    }
    addDep(dep){
        this.deps.push(dep)
    }
    notify(){
        this.deps.forEach(dep => dep.update())
    }
}

// --------------------------------

class Complier{
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el) // '#app'
        if(this.$el) {
            this.complie(this.$el)
        }
    }
    complie(el) {
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if(this.isElement(node)) {//是否是节点
                console.log('编译元素' + node.nodeName);
            } else if(this.isInterpolation(node)) {//文本节点
                console.log('编译文本' + node.textContent);
            }

            if(node.childNodes && node.childNodes.length>0) {
                this.compile(node)
            }
        })
    }
}

class Watcher { // 统一调配任务 每一个watcher实例就是一个依赖
    constructor(vm, key, updater) {
        this.vm = vm;
        this.key = key;
        this.updateFn = updater;

        Dep.target = null;
        Dep.target = this;
        vm[key] // this.a
    }

    //更新视图
    update() {
        this.updateFn(this.vm, this.vm[this.key]); //vue.a
    }
}

class Vue {
    constructor(options) {
       this.$options = options; 
       this.$data = options.data();

       observe(this.data) //（假设有）将this.$data变成响应式

       proxy(this)  //（假设有）将data代理到this上

       new Complier(options.el, this)
    }

    
}


class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }

    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

new Vue({
    data() {
        return {
            a: 1, //[Watch{update}]
            b: 2
        }
    },
    methods: {
        gatA(){
            this.a = 2
        }
    },
})