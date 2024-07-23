<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.content {
		display: flex;
		flex-direction: column;
		font-size: 13px;
	}
	page{
		background-color: rgb(245, 245, 245);
	}
	.cards{
		display: flex;
		margin: 20rpx;
		box-shadow: 1px 1px 9px 3px rgba(223, 223, 223);
		border-radius: 5px;
		background-color: white;
	}
</style>
