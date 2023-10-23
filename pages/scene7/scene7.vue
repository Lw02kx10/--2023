<template>
	<view class="root animate__animated animate__fadeIn">
		<image src="../../static/image/mirror_back.png" mode="" style="width: 100%; height: 100%; position: absolute; zIndex: -1;"></image>
		<view class="recv-people">
			<image src="../../static/image/girl_final.png" mode="" style="width: 200%; height: 130%;"></image>
		</view>
		<view class="risk-proof">
<!-- 			<image src="../../static/image/reel_row.png" mode="" style="width: 100%; height: 100%;"></image> -->
			<view class="text-title">
				<text>冒险证明</text>
			</view>
			<view class="text-content">
<!-- 				<text>基本信息：xxxxxxxxxxxxxxxxx\n</text>
				<text>战斗技巧信息：xxxxxxx\n</text>
				<text>生活技巧信息：xxxxxxx\n</text>
				<text>天赋特质：xxxxxx\n</text>
				<text>附魔属性：xxxxxx\n</text> -->
				<text>基本信息：*****************\n</text>
				<text>战斗技巧信息：*******\n</text>
				<text>生活技巧信息：*******\n</text>
				<text>天赋特质：******\n</text>
				<text>附魔属性：******\n</text>
			</view>
		</view>
		<view class="recv-btn" @click="tmpGoEight" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
			<text>仔细看看</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie';
import { onMounted } from 'vue';
const tmpGoEight = () => {
	uni.navigateTo({
		url: '/pages/scene8/scene8',
	})
}
onMounted(() => {
	let fightList:number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
	let lifeList:number[] = [-1, -1, -1, -1, -1, -1, -1];
	let fightString:string = "";
	let lifeString:string = "";
	for(let i=0;i<4;i++) {
		let tmp:number = Math.floor(10 * Math.random());
		if (fightList[tmp] == -1) {
			fightString += String(tmp);
			fightList[tmp] = 1;
		} else i--;
	}
	for(let i=0;i<4;i++) {
		let tmp:number = Math.floor(7 * Math.random());
		if (lifeList[tmp] == -1) {
			lifeString += String(tmp);
			lifeList[tmp] = 1;
		} else i--;
	}
	let talentNumber:number;
	talentNumber = Math.floor(8 * Math.random());
	Cookies.set("fightString", fightString);
	Cookies.set("lifeString", lifeString);
	Cookies.set("talentNumber", String(talentNumber));
})
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
		display: flex;
		flex-direction: column;
		align-items: center;
		.text-title {
			text-align: center;
			margin-top: 40rpx;
			color: rgb(81, 70, 57);
			font-size: 50rpx;
			font-weight: bold;
			margin-top: 50rpx;
		}
		.text-content {
			//margin-top: 10rpx;
			width: 60%;
			font-size: 26.5rpx;
			line-height: 34rpx;
			color: rgb(81, 70, 57);
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
		font-size: 40rpx;
		text-align: center;
		line-height: 100rpx;
		color: rgb(253, 245, 217);
	}
}
.hoverButton {
	opacity: 0.9;
	transform: scale(0.95, 0.95) translate(0, -100%) !important;
}
/* @media screen and (min-width: 1000px) {
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
} */
</style>
