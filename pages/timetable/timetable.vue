<template>
	<view class="content">
		<view class="week-list">
			<view class="course-header" @click="changeWeek">
				<text>{{nowWeek>0 ? '第'+nowWeek+'周' : '现在是假期'}}</text>
				<image src="../../static/imges/timetable/arrow-down.png" mode=""></image>
			</view>
			<view class="week-list-date">
				<view class="now-month">
					<text>{{nowMonth < 10 ? '0' + nowMonth : nowMonth}}</text>
					<text>月</text>
				</view>
				<view class="week-item" v-for="i in weekDayCount" :key="i">
					<text class="week-name">周{{weekIndexText[i-1]}}</text>
					<text class="week-date">
					{{
                    weekCalendar[i-1] === 1
                    ? ((nowMonth === 12 ? 1 : nowMonth + 1) + '月')
                    : (weekCalendar[i-1] < 10 ? '0' + weekCalendar[i-1] : weekCalendar[i-1]) + '日'
                    }} </text>
				</view>
			</view>
		</view>
		<view class="course-content">
			<view class="course-nums">
				<view class="course-num" v-for="i in 12" :key="i">
					{{i > 9 ? i : '0'+i}}
				</view>
			</view>
			<view class="course-list">
				<view class="course-item" v-for="(item,index) in courseList" :key="index"
					:style="{ 'left':(item.week-1)* ((windowWidth * 2 - 50) / 7) + 'rpx' , 'height':item.sectionCount*120 + 'rpx' , 'top':(item.section-1)*120 + 'rpx' }">
					<view class="course-item__content" :style="{'background-color': item.color}">
						{{item.name}}@{{item.address}}
					</view>
				</view>
			</view>
		</view>
	</view>
	<uni-popup ref="popup" type="bottom">
		<view class="switch-week__popup">
			<view class="switch-week__title">切换周数</view>
			<view class="switch-week__list">
				<view class="switch-week__item" v-for="(item,index) in totalWeek" :key="index">
					<view class="switch-week__item-box" :class="{ 'active': nowWeek === index + 1 }"
						@click="switchWeek(item)">{{item}}</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		defineExpose
	} from 'vue';

	//定义渲染数据

	const nowWeek = ref(1) //当前周
	const nowMonth = ref(1) //当前月
	const startDate = '2024/09/02'; //开学日期(必须是周一)
	const totalWeek = ref(20) //总共周数量
	const weekDayCount = ref(7) //总周数
	const weekIndexText = ref(['一', '二', '三', '四', '五', '六', '日', ]) //显示具体星期
	const weekCalendar = ref([])


	//获取当前日期推算每周显示日期
	const getWeekDates = () => {
		const startDateObj = new Date(startDate) //获取开学日期变为标准时间
		const addTime = (nowWeek.value - 1) * 7 * 24 * 60 * 60 * 1000 //增加的时间
		const firstDate = startDateObj.getTime() + addTime //每一周的开始日期
		const weekCalendarArray = [] //定义空数组存放每周日期
		const {
			month
		} = getDateObject(new Date(firstDate)); //获取月份
		nowMonth.value = month
		for (let i = 0; i < weekDayCount.value; i++) {
			const date = new Date(firstDate + i * 24 * 60 * 60 * 1000)
			const {
				day
			} = getDateObject(date)
			weekCalendarArray.push(day)
			// console.log(weekCalendarArray)
		}
		weekCalendar.value = weekCalendarArray
		// console.log(weekCalendar)
		// return weekCalendarArray
	}

	//切换当前周数
	const switchWeek = (item) => {
		nowWeek.value = item
		getWeekDates();
		// getNowWeek();
	}
	//获取现在时间是第几周
	const getNowWeek = () => {
		const nowDate = new Date().getTime()
		const startDateObj = new Date(startDate)
		const tiem = nowDate - startDateObj
		const nowWeekObj = Math.ceil(tiem / 1000 / 60 / 60 / 24 / 7) //当前周数
		nowWeek.value = nowWeekObj
		getWeekDates();
	}


	//获取年月日
	const getDateObject = (date = new Date()) => {
		const year = date.getFullYear()
		const month = date.getMonth() + 1
		const day = date.getDate()
		return {
			year,
			month,
			day
		}
	}
	//初始化手机试图大小为0
	const windowWidth = ref(0);
	onMounted(() => {
		//获取手机视图大小
		const {
			windowWidth: width
		} = wx.getSystemInfoSync();
		windowWidth.value = width;
		getDateObject();
		switchWeek();
		getWeekDates();
		getNowWeek();
		// console.log(weekCalendar)
	})
	//点击触发 切换周数 弹窗
	const popup = ref(null);
	const changeWeek = (() => {
		popup.value.open()
	})

	//课程列表
	const courseList = ref([{
			name: '网络工程', //课程名称
			week: 1, //第几周上课
			section: 1, //从第几节课开始上课
			sectionCount: 1, //上几节课
			address: 'xx楼302', //地址
			color: '#D06969' //背景颜色
		},
		{
			name: '大学体育',
			week: 2,
			section: 3,
			sectionCount: 2,
			address: '篮球场',
			color: '#55aa7f'
		},
		{
			name: '马克思列宁主义很长很长很长的名字',
			week: 3,
			section: 5,
			sectionCount: 4,
			address: 'xx楼103',
			color: '#55aaff'
		},
	])
</script>

<style lang="scss" scoped>
	page {
		background-color: white;
	}

	.week-list {
		position: fixed;
		left: 0;
		width: 100%;
		height: 132rpx;
		display: flex;
		// align-items: center;
		background: #f5f7f8;
		z-index: 1;
		flex-direction: column;
	}

	.course-header {
		height: 40rpx;
		font-size: 30rpx;
		margin-left: 50rpx;
		flex-direction: column;

		image {
			margin-left: 10rpx;
			width: 30rpx;
			height: 30rpx;
		}
	}

	.week-list-date {
		display: flex;
		left: 0;
		width: 100%;
		height: 92rpx;
		display: flex;
		align-items: center;
	}

	.now-month {
		width: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		color: #666666;
	}

	.week-item {
		width: calc((100% - 50rpx) / 7);
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.week-item.active {
		background-color: var(--theme);
		border-radius: 20rpx;
	}

	.week-name {
		font-size: 24rpx;
		color: #444444;
	}

	.week-date {
		font-size: 20rpx;
		color: #a1a1a1;
	}

	.active .week-name,
	.active .week-date {
		color: #fff;
	}

	.course-content {
		width: 100%;
		padding-top: 132rpx;
		display: flex;
	}

	.course-nums {
		width: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #f5f6f7;
	}

	.course-num {
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		color: #999999;
	}

	.course-list {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.course-item {
		position: absolute;
		width: calc((100% - 50rpx) / 7);
		padding: 2rpx;
	}

	.course-item__content {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
		font-size: 24rpx;
		color: #ffffff;
		text-align: center;
	}

	.switch-week__popup {
		// margin-bottom: -20px;
		padding: 50rpx;
		height: 600rpx;
		background-color: #ffffff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.switch-week__title {
		text-align: center;
		font-size: 34rpx;
		font-weight: 500;
	}

	.switch-week__list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 30rpx;
		justify-content: space-around // flex-direction: row;
	}

	.switch-week__item {
		width: 20%;
		height: 70rpx;
		padding: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.switch-week__item-box {
		width: 100%;
		height: 70rpx;
		background-color: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12rpx;
	}

	.active {
		background-color: #98caff;
	}
</style>