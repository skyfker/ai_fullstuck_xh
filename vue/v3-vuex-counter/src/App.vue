<template>
  <!-- 挂载Counter组件 复用 管理 -->
  <!-- <Counter />
  <TodoList /> -->

    <h1>推荐</h1>
    <Banner :per-page="3" />
</template>

<script setup>
// import Counter from './components/Counter.vue'
// import TodoList from './components/TodoList.vue';

import Banner from './components/Banner.vue'
</script>

<style lang="less" scoped>

</style>