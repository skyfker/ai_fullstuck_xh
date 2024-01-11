import {createStore} from'vuex'
import { getCart } from '@/api/cart'

const store = createStore({
    state() { // 全局公共的数据源 === data
        return {
            cartCount: 0,
        }

    },
    mutations: { // === methods     专职修改state
        setCartcount(state, count) {  // 第一个形参是源码内定，传过来的参数从第二个对应开始
            state.cartCount = count
        }
    },
    actions: { //=== async methods  可以放异步代码
        async setCartcountAction(ctx) {
            const {data} = await getCart()
            console.log(data);
            ctx.commit('setCartcount', data.length)
        }
    },
    getters: { // === computed
    
    },
})

export default store