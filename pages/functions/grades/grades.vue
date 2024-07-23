<template>
	<view class="content ">
		<view class="body">
			<view class="header">
				<text style="margin-left: 20rpx;">当前学期是：</text>
				<view class="score-term">
					<uni-data-select style="width: 900%" v-model="value" :localdata="termRange" @change="changeTerm" :clear="false"></uni-data-select>
					
				</view>
			</view>
			 
			<view class="score-list" >
				<view class="list-title">
					<text>科目</text>
					<text>学分</text>
					<text>绩点</text>
					<text>成绩</text>
				</view>
				<view class="list-item"  v-for="(item,index) in courseList" :key="index">
					<text>{{item.courseName}}</text>
					<text>{{item.credit}}</text>
					<text>{{item.gpa}}</text>
					<text>{{item.score}}</text>
				</view>
<!-- 				<view class="list-item">
					<li></li>
				</view> -->
			</view>
		</view>

	</view>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
    // import { getGradesListAPI } from '../../../apis/course';
	
	const chooseValue = ref(1)//当前选择学期
	//选择第几学期
	const changeTerm = (e)=>{
		chooseValue.value = e
	}
	
	//根据选择的学期展示成绩
	
	//定义模拟数据
	const termRange = ref([
		{value:'1',text:'2022-2023年 第一学期'},
		{value:'2',text:'2022-2023年 第二学期'},
		{value:'3',text:'2023-2024年 第一学期'},
		{value:'4',text:'2023-2024年 第二学期'}
	])
	
	//静态课程数据
	const courseList = ref([
		{courseName:'软件架构',credit:'4.0',gpa:'2.3',score:'73'},
		{courseName:'高等数学',credit:'4.0',gpa:'2.9',score:'79'},
		{courseName:'马克思主义理论',credit:'2.0',gpa:'4',score:'90'},
		{courseName:'体育',credit:'2.0',gpa:'4.5',score:'95'}
	])
	
	//从后端获取数据
	// const gradeList = ref([])
	// const getGradesList = async() =>{
	// 	const res = await getGradesListAPI()
	// 	// console.log(res)
	// 	gradeList.value = res.data
	// }
	
	// onMounted(()=>{
	// 	getGradesList();
	// })
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx;
	}
	.body{
		display: flex;
		flex-direction: column;
		// height: 1000rpx;
	}
	.header{
		display: flex;
        justify-content: space-between;
		align-items: center;
		background-color: white;
		margin: 20rpx;
		border-radius: 5px;
	}
	.score-term{
		display: flex;
		flex-direction: row;
		width: 70%;
	}
	.score-list{
		background-color: white;
		margin: 40rpx 20rpx;
		padding: 5rpx;
		display: flex;
		flex-direction: column;
		border-radius: 5px;

	}
	.list-title{
		display: flex;
		width: 100%;
		justify-content: space-around;
		text{
			// width: 80rpx;
			width: calc(100% / 4);
			height: 60rpx;
			border-bottom: 1rpx solid #a4a4a4;
			border-right: 1rpx solid #a4a4a4;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5rpx;
		}
	}
    .list-item{
		display: flex;
		justify-content: space-around;
		width: 100%;
		text{
			display: flex;
			width: calc(100% / 4);
			height: 80rpx;
			border-bottom: 1rpx solid #a4a4a4;
			border-right: 1rpx solid #a4a4a4;
			justify-content: center;
			align-items: center;
			padding: 5rpx 15rpx;
		}
	}
</style>
