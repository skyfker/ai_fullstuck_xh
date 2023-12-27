<script setup>
// vue3 setup 语法糖， 更简单
import { computed, ref } from 'vue';
import TodoItem from './TodoItem.vue'
const todos = ref([
    {
        text:'ooxx',
        done: true,
    },
    {
        text:'打豆豆',
        done: false,
    },
]);  //所有任务的数据
const allChecked = computed(()=>todos.value.every(todo=>todo.done));
const filteredTodos = ref([]);

const addTodo = () => {

}

const toggleAll = () => {

}
</script>

<template>
    <!-- UI + state  -->
    <section class="todoapp">
        <!-- html5语义化 -->
        <!-- 表单部分 -->
        <!-- v-on 时间修饰符 @event.enter -->
        <header class="header">
            <h1>todos</h1>
            <!-- 用户体验 autofocus -->
            <input class="new-todo" autofocus autocomplete="off" placeholder="what needs to be done?"
                @keyup.enter="addTodo">
        </header>
        <br><br><br>
        <!-- 条件渲染指令 -->
        <section class="main" v-show="todos.length">
            <input class="" id="toggle-all" :checked="allChecked" @change="toggleAll(!allChecked)"
                type="checkbox">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <!-- 组件树 组件结构清晰 -->
                <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
            </ul>
        </section>
    </section>
</template>

<style scoped></style>