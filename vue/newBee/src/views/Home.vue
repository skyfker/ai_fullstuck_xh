<template>
    <div class="home">
        <header class="home-header" :class="{'active': state.headerActive}">
            <router-link to="#">
                <i class="iconfont icon-menu"></i>
            </router-link>

            <div class="header-search">
                <span class="app-name">喜仔超市</span>
                <i>|</i>
                <router-link to="#" class="search-title">不买就滚哇</router-link>
            </div>

            <router-link to="/login" class="login">登录</router-link>

        </header>

        <Swiper :list="state.swiperList" />

        <div class="category-list">
            <div v-for="item in state.categoryList" :key="item.id" @click="goDetail(item.name)">
                <img :src="item.imgUrl" alt="">
                <span>{{ item.name }}</span>
            </div>
        </div>
        <GoodsList :list="state.newGoodsData" title="未付款，期待发货"/>
        <GoodsList :list="state.recommendGoodsData" title="热门咯"/>
        <GoodsList :list="state.hotGoodsData"  title="新品哇"/>

        <!-- footBar -->
        <NavBar />
    </div>
</template>
  
<script setup>
import Swiper from '@/components/Swiper.vue'
import NavBar from '@/components/NavBar.vue'
import { getHome } from '@/api/home.js'
import { onMounted, reactive, nextTick } from 'vue';
import { showToast } from 'vant';
import GoodsList from '@/components/Goods.vue'

const state = reactive({// state是被reactive修饰过的对象，也是响应式对象
    swiperList: [],
    categoryList: [
        {
            name: '新蜂超市',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
            categoryId: 100001
        }, {
            name: '新蜂服饰',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
            categoryId: 100003
        }, {
            name: '全球购',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
            categoryId: 100002
        }, {
            name: '新蜂生鲜',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
            categoryId: 100004
        }, {
            name: '新蜂到家',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
            categoryId: 100005
        }, {
            name: '充值缴费',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
            categoryId: 100006
        }, {
            name: '9.9元拼',
            imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
            categoryId: 100007
        }, {
            name: '领劵',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
            categoryId: 100008
        }, {
            name: '省钱',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
            categoryId: 100009
        }, {
            name: '全部',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
            categoryId: 100010
        }
    ],
    newGoodsData: [],
    hotGoodsData: [],
    recommendGoodsData: [],
    headerActive: false
})

const goDetail = (name) => {
    showToast(name + ' 妹有，别瞎点'); 
}

//请求banner数据
onMounted(async () => {
    const { data } = await getHome() //set up 中已经封装好了async
    console.log(data);
    state.swiperList = data.data.carousels
    state.newGoodsData = data.data.newGoodses
    state.hotGoodsData = data.data.hotGoodses
    state.recommendGoodsData = data.data.recommendGoodses
}) 

nextTick(() => { //写在nextTick中的逻辑一定会在页面加载完毕之后执行
    document.body.addEventListener('scroll', function() {
        this.scrollTop > 100 ? state.headerActive = true : state.headerActive = false
    })
})
</script>
  
<style lang="less" scoped>
@import '@/common/style/mixin.less';

.home {
    padding-bottom: 100px;

    .home-header {
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 15px;

        &.active {
            background-color: @primary;

            .icon-menu {
                color: #fff;
            }

            .login {
                color: #fff;
            }
        }

        .icon-menu {
            color: @primary
        }

        .header-search {
            .wh(74%, 20px);
            padding: 5px 0;
            line-height: 20px;
            color: #232326;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 20px;
            display: flex;
            align-items: center;

            .app-name {
                color: @primary;
                padding: 0 10px;
                font-size: 20px;
                font-weight: bold;
            }

            .search-title {
                font-size: 14px;
                padding: 0 10px;

            }
        }

        .login {
            font-size: 16px;
        }
    }
    .category-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;//需要几列写几个1fr
        grid-row-gap: 5px;
        div{
            // text-align: center;
            display: flex;
            // justify-content: center; //弹性容器主轴方向居中
            flex-direction: column;
            align-items: center;
            img{
                .wh(36px, 36px);
                // margin: 0 auto;
                margin: 13px 0 8px 0;
            }
        };
    }
}</style>