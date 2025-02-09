<template>
    <div class="tags">
        <el-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'home'"
            :effect="route.name === tag.name ? 'dark' : 'plain'" @click="handleMenu(tag)" @close="handleClose(tag,index)">
            {{ tag.lable }}
        </el-tag>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAllDataStore } from '@/stores'

const store = useAllDataStore()
const tags = computed(() => store.state.tags)
const route = useRoute()
const router = useRouter()
const handleMenu = (tag) => {
    // console.log(tag);
    router.push(tag.name)
    store.selectMenu(tag)
}
const handleClose = (tag, index) => {
    store.undateTags(tag, index)
    //对关闭的tag进行判断
    if (route.name === tag.name) {
        router.push(tags.value[index - 1] || tags.value[index + 1])
    }
}
</script>

<style lang="less" scoped>
.tags {
    margin: 20px 0 0 20px;
}

.el-tag {
    margin-right: 10px;
}
</style>