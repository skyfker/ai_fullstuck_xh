<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="getImageUrl('user')" class="user"></img>
                    <div class="user-info">
                        <p>Admin</p>
                        <p>超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2025-02-04</span></p>
                    <p>上次登录地点：<span>就是这里</span></p>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href;
}
</script>

<style lang="less" scoped>
.home {
    height: 100%;
    overflow: hidden;
    .user{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }
        .user-info{
            p{
                font-size: 35px;
                line-height: 40px;
                color: #333;
            }
            p:last-child{
                font-size: 15px;
                color: #999;
            }
        }
    }
    .login-info{
        p{
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span{
                color: #666;
                margin-left: 60px;
            }
        }
    }
}
</style>