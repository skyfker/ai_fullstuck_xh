<!-- 独立的模块，vue里面叫组件 html + css + js 的集合 -->
<template>
    <div>
        Clicked {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increement if odd</button>
        <button @click="decrementIfAsync">decrement async</button>
    </div>
</template>

<script setup>
// //composition api
// import { ref, computed } from 'vue';

// const count = ref(0) // 简单的响应式
// // 并不是独立的，与count 有关，进行计算后拿到的
// const evenOrOdd = computed( ()=>
//     count.value % 2 ===0 ? 'even' : 'odd'
// )

// const increment = () => {
//     count.value++;  // dom 不要  性能
// }
// const decrement = () => {
//     count.value--;
// }
// const incrementIfOdd = () => {
//     if (count.value % 2 === 0) {
//         count.value++
//     }
// }
// const decrementIfAsync = () => {
//     setTimeout(() => {
//         count.value++
//     }, 1000);
// }

import { useCounterStore } from '../store/counter'

const{ count } = useCounterStore()
</script>

<style lang="less" scoped>

</style>