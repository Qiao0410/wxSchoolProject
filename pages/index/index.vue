<template>
	<view>
		<BannerVue></BannerVue>
		<FunctionVue></FunctionVue>
	</view>
</template>

<script setup>
	import BannerVue from './components/Banner.vue';
	import FunctionVue from './components/Function.vue';
	import { getCityAPI } from '../../apis/test';
    import { ref,onMounted } from 'vue';

// const getCity = async ()=>{
// 	const res = await getCityAPI()
// 	console.log(res)
// }
// onMounted(()=>{
// 	getCity()
// })
	// onMounted(()=>{
	// 	getCityAPI().then(res=>{
	// 		console.log(res)
	// 	})
	// })
</script>

<style lang="scss" scoped>

</style>
