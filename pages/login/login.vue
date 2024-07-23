<template>
	<view class="content">
		<view class=""></view>
		<text class="login-title">智慧门户</text>
		<view class="login-input cards">
			<view class="login-input-item">
				<text>学号</text>
				<!-- <input type="text" placeholder="请输入学号" v-model="form.account"/> -->
				<uni-easyinput  errorMessage v-model="form.username" focus placeholder="请输入内容" @input="input" 
				:inputBorder="false" :styles="{ height: '20px' }" style="background-color: rgba(0, 0, 0, 0%);"></uni-easyinput>
				<!-- styles="height: 30px; " style="background-color: rgba(0, 0, 0, 0%);" -->
			</view>
			<view class="line"></view>
			<view class="login-input-item">
				<text>密码</text>
				<!-- <input type="text" placeholder="请输入密码" v-model="form.password" /> -->
				<uni-easyinput  type="password" v-model="form.password" placeholder="请输入密码"
					:inputBorder="false" :styles="{ height: '20px' }" style="background-color: rgba(0, 0, 0, 0%);"
					:passwordIcon="true"></uni-easyinput>
			</view>
			<view class="line"></view>
		</view>
		<view class="login-agreement">
			<checkbox-group @change="handleChange">
				<label class="agreement">
					<checkbox style="transform: scale(0.7)" />
					<view>我已阅读并同意
						<uni-link href="https://uniapp.dcloud.io/" text="《用户协议》" color="#007BFF"
							showUnderLine="false"></uni-link>
					</view>
				</label>
			</checkbox-group>
			<uni-link href="" text="忘记密码？" color="#007BFF" showUnderLine="false"></uni-link>
		</view>
		<view class="login-button">
			<button class="login" @click="login">登录</button>
			<button class="recover">重置</button>
		</view>
	</view>
</template>

<script setup>
	import {onMounted, ref} from 'vue';
	// import {getUserAPI} from '../../apis/user.js';
	
	// const getUserList = getUserAPI()
	

	//准备用户列表
	const form = ref({
		username:'',
		password:''
		
	})
	
	//检测是否登陆成功
	const login=()=>{
		 // 检查账号密码和用户协议是否填写
		  if (!form.username || !form.password || !form.agreedToTerms) {
		    // 如果未填写用户名、密码或未勾选用户协议，则显示相应提示
		    if (!form.username) {
		      wx.showToast({
		        title: '请输入学号',
		        icon: 'none'
		      });
		    } else if (!form.password) {
		      wx.showToast({
		        title: '请输入密码',
		        icon: 'none'
		      });
		    } else if (!form.agreedToTerms) {
		      wx.showToast({
		        title: '请勾选用户协议',
		        icon: 'none'
		      });
		    }
		  } else {
		    // 如果账号密码正确且勾选了用户协议，则执行登录成功的操作
		    // wx.request({
		    //   url: 'http://localhost:5173/pages/login/login.vue',
		    //   data: {}
		    // });
		    wx.showToast({
		      title: '登录成功',
		      icon: 'success'
		    });
		    console.log(form); // 输出表单数据到控制台
		  }
	}
    onMounted(()=>{
    	console.log()
    })

	// const isCheck = ref('')

	// const handleChange = (e)=>{
	//  	this.value = e.detail.value;
	// 	console.log(this.value);
	// 	if(this.value.length == 0){
	// 		uni.$u.toast('请勾选《用户协议》《隐私协议》！')
	// 	}else{
	// 		console.log('勾选成功')
	// 	}
	// }
</script>

<style lang="scss">
	.login-title {
		padding: 30rpx 0;
		display: flex;
		justify-content: center;
		font-size: 40rpx;
		font-weight: 600;
	}

	.login-input {
		flex-direction: column;
		height: 220rpx;
		background-color: white;
		margin: 10rpx 30rpx;

		justify-content: center
	}

	.login-input-item {
		display: flex;
		flex-direction: row;
		margin: 5px 5px 5px 30px;
		align-items: center;
		
		text{
			height: 20rpx;
		}
	}

	// input {
	// 	margin-left: 20px;
	// 	font-size: 13px;
	// }

	.line {
		margin: 0 20px 0 30px;
		height: 0.5px;
		border: none;
		background-color: #dedede;
	}

	.login-agreement {
		margin: 15px 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between
	}

	.agreement {
		display: flex;
		flex-direction: row;
	}

	.login-button {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 30rpx;
			width: 200rpx;
			height: 80rpx;
			border-radius: 50px;
		}

		.login {
			background-color: #007BFF;
		}
	}
	element.style {
	    border-color: rgb(229, 229, 229);
	    background-color: rgb(255 255 255 / 0%);
	}
</style>