<template>
	<view class="root">
		<view class="recv-people">
			
		</view>
		<view class="risk-proof">
			
		</view>
		<view class="recv-btn" @click="tmpGoEight">
			<text>收下</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
const tmpGoEight = () => {
	uni.navigateTo({
		url: '/pages/scene8/scene8',
	})
}
</script>

<style lang="less" scoped>
.unipage-body, html, body {
	background-color: #c8b586;
}
.root {
	height: 100%;
	display: flex;
	flex-direction: column;
	.recv-people {
		height: 570rpx;
		width: 500rpx;
		background-color: #5b5853;
		margin: 0 auto;
		margin-top: 100rpx;
	}
	.risk-proof {
		width: 500rpx;
		height: 250rpx;
		margin: 0 auto;
		margin-top: 70rpx;
		background-color: #5b5853;
	}
	.recv-btn {
		width: 240rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		background-color: #87725a;
		border-radius: 25rpx;
		font-size: 48rpx;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
}
</style>
