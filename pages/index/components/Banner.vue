<template>
	<view class="content">
		<view class="banner">
			<swiper style="height: 350rpx;" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image :mode="aspectFill" src="/static/imges/banner/2060218.jpg" mode=""></image>
					<view class="banner-text">
						<view style="font-weight: 800; font-size: 18px; margin-bottom: 20rpx;">欢迎关注XXX公众号</view>
						<view style="font-size: 15px;" @click="toOfficialAccount">
							点击查看更多精彩内容~
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="class">

		</view>
		<view class="function">

		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';

	// const imgList = ref("")
	// console.log(imgList.value)

	
</script>

<style lang="scss">
	.banner {
		margin: 20rpx;
		height: 350rpx;
		border-radius: 10px;
		background-color: white;

		image {
			height: 350rpx; // 设置图片高度为容器高度的100%
			width: 100%; // 设置图片宽度为容器宽度的100%
			// object-fit: cover; // 根据容器比例调整图片
			border-radius: 10px; // 继承父容器的圆角属性
		}
	}
	.banner-text{
		position: absolute;
		top: 90rpx;
		left: 60rpx;
		color: white;
	}
</style>