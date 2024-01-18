<template>
	<view class="content">
		<navigator url="/pages/about/about">点我</navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @cilck="changeTitle">
			<text class="title">{{title}}</text>
		</view>
	</view>
	<song :data="list.song" />
</template>

<script setup>
import song from '../../components/song.vue'
import {reactive, ref} from 'vue';

const title = ref('你好')
console.log(getApp().globalData.name);


const changeTitle = () => {
	title.value = title.value === "你好" ? 'Hello' : '你好'
}

const list = reactive({
	song: {
		img: 'https://img1.baidu.com/it/u=3709586903,1286591012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
		title:'sky',
		price: '10',
		market: '10'
	},
})

const goAbout = () => {
	uni.navigateTo({
		url: '/pages/about/about'
	})
}

</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
