<template>
	<view class="content">
		<view class="update-log">
			<uni-steps :options="update" direction="column"></uni-steps>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const update = ref([
		{title:'2024-07-20',desc:'登录、首页、我的，完成静态页面构建'},
		{title:'2024-07-19',desc:'登录、首页、我的，完成静态页面构建'},
		{title:'2024-07-20',desc:'登录、首页、我的，完成静态页面构建'},
		{title:'2024-07-20',desc:'登录、首页、我的，完成静态页面构建,引入全新的用户界面设计，提升用户体验。增加了多语言支持，现在用户可以选择英语、西班牙语和法语。新增快速搜索功能，帮助用户更快速地找到他们需要的信息'}
	])
	
</script>

<style lang="scss">
	.update-log{
		margin: 60rpx 60rpx 0 40rpx;
	}
</style>
