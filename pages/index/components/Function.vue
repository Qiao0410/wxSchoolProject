<template>
	<view class="content">
		<view class="index-function cards">
			<view class="function-item" v-for="(item,index) in functions" :key="index">
				<view class="items" @click="gotoFunctions(item)">
					<image :src="item.imageSrc" ></image>
					<view class="">
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	
	const functions = [
		{imageSrc:'/static/imges/function/exam.png',text:'考试安排'},
		{imageSrc:'/static/imges/function/card.png',text:'一卡通'},
		{imageSrc:'/static/imges/function/grades.png',text:'成绩查询'},
		{imageSrc:'/static/imges/function/dorm.png',text:'宿舍用电'},
		{imageSrc:'/static/imges/function/phone.png',text:'部门电话'},
		{imageSrc:'/static/imges/function/more.png',text:'更多'},
	]
	const gotoFunctions = ((item)=>{
		if(item.text === '成绩查询'){
			uni.navigateTo({
				url:'/pages/functions/grades/grades'
			})
		}
		else{
			uni.showToast({
				title:'敬请期待',
				icon:'none'
			})
			setTimeout(function () {
			    uni.hideToast();
			}, 500);
		}
		
	})
</script>

<style lang="scss">
	.index-function{
		display: flex;
		height: 400rpx;
		flex-wrap: wrap;
		align-content: space-around;
		justify-content: space-around;
	}
	.function-item{
		display: flex;
		flex-direction: column;
		height: 50px;
		width: 60px;
		margin: 20px 20px;
		align-items: center;
		
		.items{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		image{
			height: 28px;
			width: 28px;
			margin-bottom: 2px;
		}
		
		text{
			height: 20px;
			width: 60px;
			font-size:small;
			align-items: center;
		}
	}
</style>