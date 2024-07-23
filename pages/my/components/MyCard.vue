<template>
	<view class="my-card cards">
		<image class="my-card-img"></image>
		<view class="my-card-introduce">
			<view>
				<view v-if="isLogin.value">{{username}}</view>
				<view v-else>这是名字</view>
			</view>
			<view>
				<text v-if="isLogin.value">{{password}}</text>
				<text v-else style="color: #bababa; font-size: 1.5ex;">ID:未绑定</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
import {getUserAPI} from '/apis/user.js'
	
	const isLogin = ref('false')
	
	//调用用户登录接口获取名字和ID
	const username = ref('登录之后的名字')
	// const getUser = getUserAPI(()=>{
		
	// })
	
</script>

<style lang="scss">
	.my-card {
		// display: flex;
		flex-direction: row;
		// margin: 10px;
		height: 100px;
		align-items: center;
		
	}
	
	.my-card-img {
		margin: 50rpx;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		box-shadow: 3px 3px 10px 1px rgba(223, 223, 223);
	}
	
	.my-card-introduce {
		display: flex;
		flex-direction: column;
		height: 50px;
		justify-content: space-between
	}
</style>