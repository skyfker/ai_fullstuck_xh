<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
    </div>
    <list :lists="lists"/>

</template>

<script>
import list from './components/body2/list.vue'
export default {
    components:{
        list
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: ''
        }
    },
    methods: {
        submit() {
            if(this.message) {
                this.lists.push(this.message)
                this.message = ''
            }
        }
    }
}
</script>

<style lang="css" scoped></style>