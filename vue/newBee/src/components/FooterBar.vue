<template>
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" />
  <van-action-bar-icon icon="cart-o" text="购物车" :badge='badgeNum' v-if="badgeNum > 0"/>
  <van-action-bar-icon icon="cart-o" text="购物车" v-else/>
  <van-action-bar-button type="warning" text="加入购物车" @click="handelAddCart"/>
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex'
import { addCart } from '@/api/cart.js' 
import { showSuccessToast } from 'vant';



const store = useStore()
const badgeNum = computed(() => {
  return store.state.cartCount
})

onMounted(() => {
  store.dispatch('setCartcountAction')  //  dispatch 是 store中专门用来触发actions里的函数的方法
})

const props = defineProps({
  id: String
})

const handelAddCart = async() => {
  const res = await addCart({ goodsCount: 1, goodsId: props.id })
  console.log(res);
  if( res.resultCode === 200){
    showSuccessToast('购物车里已经存在了哇');
    store.dispatch('setCartcountAction')
  }
}

</script>

<style lang="less" scoped>

</style>
<style>
.van-action-bar .van-button--warning{
    background: linear-gradient(to right, #18ba66, #0c7b42);
}
.van-action-bar .van-button--danger{
    background: linear-gradient(to right, #3eba18, #0d6005);

}
</style>