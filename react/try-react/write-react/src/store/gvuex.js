import { reactive, computed, inject } from "vue"

const STORE_KEY = "__store__"

class store {
    constructor(options) {
        this.$options = options  //原来的对象 最初的状态
        // 添加了私有的对象
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations()
        this._actions = options.actions()
        this._getters = options.getters()
        Object.keys(this._mutations).forEach(name => {
            const fn = options.getters[name]
            this.getters[name] = computed(() => {
                return fn(this.state)
            })
        })
    }
    // 易用性
    get state() {
        return this._state.data
    }
    // 严谨的状态修改
    commit(type, payload) {
        // 执行mutations中的方法
        const entry = this._mutations[type]
        return entry && entry(this.state, payload)
    }
    dispatch(type, payload) {
        // 执行actions中的方法
        const entry = this._actions[type]
        return entry && entry(this.state, payload)
    }
    install(app) {
        // 挂载到vue实例上
        console.log('////////');
        app.provide(STORE_KEY, this)
    }
}

const createStore = (options) => {
    //实例化
    const store = new store()
}