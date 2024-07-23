<template>
	<view class="my-body cards">
		<view v-for="(item,index) in items " :key="index" class="item" hover-class="click-hover" @click="handleClick(item)">
			<view>
				<image :src="item.imageSrc" alt="" />
				<text>{{item.text}}</text>
			</view>
			<image src="/static/imges/my/arrow-r.png" class="my-body-arrow" />
		</view>
	</view>
</template>

<script setup>

import { onMounted } from 'vue';

	const items=[
		{imageSrc:'/static/imges/my/account.png',text:'账号'},
		{imageSrc:'/static/imges/my/setting.png',text:'设置'},
		{imageSrc:'/static/imges/my/update.png',text:'更新日志'},
		{imageSrc:'/static/imges/my/about.png',text:'使用说明'}
	];
	
	const handleClick = (async(item)=>{
		setTimeout(()=> {
			if(item.text === '账号'){
				//跳转到登录页面
				// console.log("跳转到登录页面")
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
			else{
				if(item.text === '设置'){
					//跳转到设置页面
					uni.navigateTo({
						url:'/pages/setting/setting'
					})
				}
				else{
					if(item.text === '更新日志'){
						//跳转到更新日志页面
						uni.navigateTo({
							url:'/pages/update/update'
						})
					}
					else{
						//跳转到关于页面
						uni.navigateTo({
							url:'/pages/about/about'
						})
					}
				}
			}
		}, 100);
		

	})
	
	onMounted(()=>{

	})
	
</script>

<style lang="scss">
	.my-body {
		flex-direction: column;
		height: 200px;
	
		view {
			display: flex;
			align-items: center;
			margin: 5px 0 5px 0;
		}
	
		image {
			margin: 5px 20px 5px 30px;
			width: 20px;
			height: 20px;
		}
		.item{
			
			justify-content: space-between
		}
	}
	.my-body-arrow{
		display: flex;
		margin-left:100px ;
	}
	.click-hover{
		background-color: #f5f5f5;
	}
</style>