<template>
	<view class="root">
		<view class="top-text">
			<text>文案</text>
		</view>
		<view class="bottom">
			<view class="weapon-bar">
				<view class="weapon-some" @click="tmpGoSeven()">
					<image src="../../static/image/magic.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some">
					<image src="../../static/image/arrow.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some">
					<image src="../../static/image/sword.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some">
					<image src="../../static/image/torch.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
			</view>
			<view class="boss-box">
				<image src="../../static/image/boss.png" mode="" style="width: 100%; height: 100%;"></image>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
const tmpGoSeven = () => {
	uni.navigateTo({
		url: '/pages/scene7/scene7',
	});
}
onMounted(() => {
	
})
</script>

<style lang="less" scoped>
.unipage-body, html, body {
	background-color: #c8b586;
}
.root {
	height: 100%;
	background-color: #c8b586;
	background-image: url("../../static/image/boss_weapon.png");
	background-size: cover;
	display: flex;
	flex-direction: column;
	.top-text {
		opacity: 0; //文案暂时不知道写什么，先隐藏
		color: white;
		border-radius: 20px;
		background-color: aqua;
		height: 100rpx;
		width: 140rpx;
		text-align: center;
		line-height: 100rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}
	.bottom {
		display: flex;
		justify-content: space-around;
		margin-top: 40rpx;
		.weapon-bar {
			display: flex;
			flex-direction: column;
			.weapon-some {
				background-color: rgb(16, 20, 31);
				margin-top: 30rpx;
				width: 140rpx;
				height: 250rpx;
				border-radius: 20rpx;
			}
		}
		.boss-box {
			height: 800rpx;
			//background-color: black;
			width: 265rpx;
/* 			background-image: url("../../static/image/boss.png");
			background-size: contain; */
			margin-top: 250rpx;
		}
	}
}

@media screen and (min-width: 700px) {
	.weapon-some {
		width: 130rpx !important;
		height: 190rpx !important;
		margin-top: 20rpx !important;
	}
	.boss-box {
		margin-top: 90rpx !important;
	}
}

@media screen and (min-width: 1024px) {
	.bottom {
		justify-content: space-evenly !important;
	}
	.weapon-some {
		width: 350rpx !important;
		height: 550rpx !important;
		margin-top: 50rpx !important; 
	}
	.boss-box {
		height: 1600rpx !important;
		width: 580rpx !important;
		margin-top: 750rpx !important;
		padding-right: 120rpx !important;
	}
}
</style>
