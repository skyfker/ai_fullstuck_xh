<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTab from '@/components/CommonTab.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
        <CommonAside />
        <el-container>
            <el-header class="el-header">
                <common-header />
            </el-header>
            <CommonTab />
            <el-main class="right-main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
    .common-layout,.lay-container {
        height: 100%;
    }
    .el-header {
        background-color: #333;
    }
</style>