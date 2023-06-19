<template>
	<view class="root">
		<image src="../../static/image/mirror_back.png" mode="" style="width: 100%; height: 100%; position: absolute; zIndex: -1;"></image>
		<view class="recv-people">
			<image src="../../static/image/girl_final.png" mode="" style="width: 100%; height: 130%;"></image>
		</view>
		<view class="risk-proof">
<!-- 			<image src="../../static/image/reel_row.png" mode="" style="width: 100%; height: 100%;"></image> -->
			<view class="text-title">
				<text>冒险证明</text>
			</view>
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
		height: 500rpx;
		width: 290rpx;
		//background-color: #5b5853;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -70%);
	}
	.risk-proof {
		width: 760rpx;
		height: 380rpx;
		margin: 0 auto;
		//margin-top: 40rpx;
		//background-color: #5b5853;
		background-image: url("../../static/image/reel_row.png");
		background-size: contain;
		position: relative;
		top: 50%;
		.text-title {
			text-align: center;
			margin-top: 40rpx;
			color: rgb(81, 70, 57);
			font-size: 50rpx;
			font-weight: bold;
			margin-top: 50rpx;
		}
	}
	.recv-btn {
		width: 214rpx;
		height: 100rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		//background-color: #87725a;
		background-image: url("../../static/image/index_2.png");
		background-size: contain;
		border-radius: 25rpx;
		position: relative;
		top: 50%;
		transform: translate(0, -100%);
		font-size: 48rpx;
		text-align: center;
		line-height: 100rpx;
		color: rgb(253, 245, 217);
	}
}
@media screen and (min-width: 1000px) {
	.recv-people {
		height: 1200rpx !important; 
		width: 696rpx !important;
	}
	.risk-proof {
		width: 1824rpx !important;
		height: 912rpx !important;
		.text-title {
			font-size: 120rpx !important;
			margin-top: 120rpx !important;
		}
	}
	.recv-btn {
		width: 513.6rpx !important;
		height: 240rpx !important;
		margin-top: 180rpx !important;
		font-size: 105.2rpx !important;
		line-height: 240rpx !important;
	}
}
</style>
