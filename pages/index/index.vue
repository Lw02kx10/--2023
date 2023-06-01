<template>
	<view class="page">
		<view class="guid">
			<image class="guider"></image>
		</view>
		<view class="enter" @click="enter">进入</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			enter(){
				uni.navigateTo({
					url:"/pages/image_1/image_1"
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #C8B586;
	}

	.guid {
		width: 75%;
		height: 20%;
		position: absolute;
		top: 25%;
		background-color: #5B5853;
	}
	.enter{
		width: 45%;
		height: 8%;
		position: absolute;
		bottom: 20%;
		border-radius: 30rpx;
		background-color: #87725A;
	}
</style>