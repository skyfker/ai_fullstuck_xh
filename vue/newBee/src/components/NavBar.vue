<template>
    <van-tabbar v-model="active" route active-color="#18ba66">
        <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o" :badge='badgeNum' v-if="badgeNum">购物车</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o" v-else>购物车</van-tabbar-item>
        <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex'

const store = useStore()
const badgeNum = computed(() => {
  return store.state.cartCount
})

onMounted(() => {
  store.dispatch('setCartcountAction')  //  dispatch 是 store中专门用来触发actions里的函数的方法
})


const active = ref(0);
</script>

<style lang="less" scoped>

</style>