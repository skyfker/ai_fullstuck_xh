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
            <el-card shadow="hover" class="user-table">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key"
                        :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px;">
            <div class="num">
                <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData"
                    :key="item.name">
                    <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
                    <div class="detail">
                        <p class="num">￥{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card class="top-echart">
                <div ref="echart" style="height: 280px"></div>
            </el-card>
            <div class="graph">
                <el-card>
                    <div ref="userEchart" style="height: 240px"></div>
                </el-card>
                <el-card>
                    <div ref="videoEchart" style="height: 240px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'

const tableData = ref([])
const countData = ref([])
const chartData = ref([])
const observer = ref(null)

const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})


const { proxy } = getCurrentInstance()
const getTableData = async () => {
    const data = await proxy.$api.getTableData()
    tableData.value = data.tableData
}
const getCountData = async () => {
    const data = await proxy.$api.getCountData()
    countData.value = data
}
const getChartData = async () => {
    const {orderData, userData, videoData} = await proxy.$api.getChartData()
    //对第一个图表进行x轴 和 series 配置
    xOptions.xAxis.data = orderData.date
    xOptions.series = Object.keys(orderData.data[0]).map(val=>{
        return {
            name: val,
            type: "line",
            data: orderData.data.map(item=>item[val]),
        }
    })
    const oneEchart = echarts.init(proxy.$refs['echart'])
    oneEchart.setOption(xOptions)
    

    //对第二个表格进行渲染
    xOptions.xAxis.data = userData.map(item=>item.date)
    xOptions.series = [
        {
          name: "新增用户",
          data: userData.map((item) => item.new),
          type: "bar",
        },
        {
          name: "活跃用户",
          data: userData.map((item) => item.active),
          type: "bar",
        }
      ]
    //two
    const twoEchart = echarts.init(proxy.$refs["userEchart"])
    twoEchart.setOption(xOptions)
    
    //对饼状图进行渲染
    pieOptions.series = [
        {
          data: videoData,
          type: "pie",
        },
      ]
    //three
    const threeEchart = echarts.init(proxy.$refs["videoEchart"])
    threeEchart.setOption(pieOptions);

    //监听页面变化 如果监视的容器大小变化，如果改变会执行传递的回调
    observer.value = new ResizeObserver((en) => {
        oneEchart.resize()
        twoEchart.resize()
        threeEchart.resize()
    })
    //如果这个容器存在
    if (proxy.$refs["echart"]) {
        //则调用监视器的observe方法，监视这个容器的大小
      observer.value.observe(proxy.$refs["echart"]);
    }
}

//这个是折线图和柱状图 两个图表共用的公共配置
const xOptions = reactive({
    // 图例文字颜色
    textStyle: {
        color: "#333",
    },
    legend: {},
    grid: {
        left: "20%",
    },
    // 提示框
    tooltip: {
        trigger: "axis",
    },
    xAxis: {
        type: "category", // 类目轴
        data: [],
        axisLine: {
            lineStyle: {
                color: "#17b3a3",
            },
        },
        axisLabel: {
            interval: 0,
            color: "#333",
        },
    },
    yAxis: [
        {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#17b3a3",
                },
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
    series: [],
})

const pieOptions = reactive({
    tooltip: {
        trigger: "item",
    },
    legend: {},
    color: [
        "#0f78f4",
        "#dd536b",
        "#9462e5",
        "#a6a6a6",
        "#e1bb22",
        "#39c362",
        "#3ed1cf",
    ],
    series: []
})

onMounted(() => {
    getTableData()
    getCountData()
    getChartData()
})
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href;
}

</script>

<style lang="less" scoped>
.home {
    height: 100%;
    overflow: hidden;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }

        .user-info {
            p {
                font-size: 35px;
                line-height: 40px;
                color: #333;
            }

            p:last-child {
                font-size: 15px;
                color: #999;
            }
        }
    }

    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;

            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }

    .user-table {
        margin-top: 20px;
    }

    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }

        .icons {
            width: 80px;
            height: 80px;
            line-height: 80px;
            color: #fff;
            font-size: 30px;
            text-align: center;
        }

        .detail {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .num {
                font-size: 30px;
                margin-bottom: 10px;
            }

            .txt {
                font-size: 15px;
                text-align: center;
            }
        }
    }
    .graph {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .el-card {
            width: 48%;
            height: 260px;
        }
    }
}
</style>