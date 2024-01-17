<template>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item>
                <img class="introImg" src="../assets/xizai.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="introImg" src="../assets/cake1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="introImg" src="../assets/cake2.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="introImg" src="../assets/cake3.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="introImg" src="../assets/cake4.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-button round type="success">圆形按钮</van-button>

</template>
  
<script setup>

</script>
  
<style lang="less" scoped>

.introImg {
    display: flexbox;
    width: 100%;
    height: 100%;
}
</style>