<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useStore} from './store/gvuex'
import {computed} from 'vue'

const count = computed (()=> store.state.count)
const store = useStore()
const double = computed(()=>store.getters.double)

const add = ()=>{
  this.dispatch('add')
}

const asyncAdd = ()=>{
  this.dispatch('asyncAdd')
}
</script>

<template>
  <div>
    {{ count }} *2={{ double }}
    <button @click="add">add</button>
  </div>
</template>

<style scoped>

</style>
