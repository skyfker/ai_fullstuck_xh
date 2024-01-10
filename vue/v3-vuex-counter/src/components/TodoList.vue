<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
        </li>
    </ul>
</template>

<script setup>
import { useTodoList } from '../store/todo'

const { todos } = useTodoList()
</script>

<style lang="scss" scoped>

</style>