<template>
  <div class="todo">
    <input type="text" v-model="content">
    <button @click="add">添加</button>

    <!-- list.vue -->
    <List :lists="todos"></List> <!--父组件给子组件传值 -->
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  components: {
    List,
  },

  data() {
    return {
      content: '',
      todos: ['html', 'css','js']
    }
  },
  methods: {
    add() {
      console.log(this.content);
    }
  }
}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

.todo {
  width: 300px;
  margin: 0 auto;
}

input {
  padding: 5px 10px;
}

button {
  padding: 5px 10px;
}

li {
  list-style: none;
  background-color: antiquewhite;
  margin-top: 10px;
}</style>