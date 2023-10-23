<template>
	<view class="root">
		<image src="../../static/image/mirror_back.png" mode="" style="width: 100%; height: 100%; position: absolute; zIndex: -1;"></image>
		<view class="recv-people">
			<image src="../../static/image/girl_final.png" mode="" style="width: 200%; height: 130%;"></image>
		</view>
		<view class="recv-btn" hover-class="hoverButton" hover-stay-time="100" @click="backToOne()"
				hover-start-time="0">
			<text>咦！怎么回事</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
const backToOne = () => {
	uni.navigateTo({
		url: "/pages/scene10/scene10",
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
		height: 500rpx;
		width: 290rpx;
		//background-color: #5b5853;
		position: absolute;
		left: 32%;
		top: 50%;
		transform: translate(-50%, -70%);
	}
	.recv-btn {
		width: 299.6rpx;
		height: 140rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		//background-color: #87725a;
		background-image: url("../../static/image/index_2.png");
		background-size: contain;
		border-radius: 25rpx;
		position: relative;
		top: 77%;
		transform: translate(0, -100%);
		font-size: 42rpx;
		text-align: center;
		line-height: 140rpx;
		color: rgb(253, 245, 217);
	}
	@media screen and (min-width: 600px) {
		.recv-btn {
			top: 83% !important;
		}
	}
}
.hoverButton {
	opacity: 0.9;
	transform: translate(0, -100%) scale(0.95, 0.95) !important;
}
</style>
