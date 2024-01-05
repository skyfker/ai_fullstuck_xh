<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
  <van-swipe-item v-for="(item, index ) in list" :key="index">
    <img :src="item.carouselUrl" alt="">
  </van-swipe-item>
</van-swipe>
</template>

<script setup>
const props = defineProps({
    list: Array
})

</script>

<style lang="less" scoped>
img{
    width: 100%;
    height: 100%;
}
</style>