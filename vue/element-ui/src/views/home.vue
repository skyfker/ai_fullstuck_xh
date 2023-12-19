<template>
    <div class="home">
        <div class="common-layout">
            <el-container>
                <el-header>
                    <h2>后台管理系统</h2>
                    <div class="user-info">欢迎{{ $route.query.user }}</div>
                </el-header>
                <el-container>
                    <el-aside width="200px">
                        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                            default-active="1" text-color="#fff">
                            <el-menu-item index="1">
                                <el-icon><icon-menu /></el-icon>
                                <span>学生列表</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <el-icon>
                                    <document />
                                </el-icon>
                                <span>就业统计</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <el-icon>
                                    <setting />
                                </el-icon>
                                <span>联系方式</span>
                            </el-menu-item>
                        </el-menu>
                    </el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-container {
    width: 100vw;
    height: 100vh;

    .el-header {
        background-color: rgb(96, 204, 220);
        height: 80px;
        line-height: 80px;
        display: flex;
        justify-content: space-between; //子元素之间用空格挤开
    }

    .el-aside {
        background: #545c64;
    }
}
</style>