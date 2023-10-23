<template>
	<view class="root animate__animated animate__fadeIn">
		<view class="top-text">
			<text>文案</text>
		</view>
		<view class="bottom">
			<view class="weapon-bar">
				<view class="weapon-some" @click="tmpGoSeven(0)" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
					<image src="../../static/image/magic.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some" @click="tmpGoSeven(1)" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
					<image src="../../static/image/arrow.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some" @click="tmpGoSeven(2)" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
					<image src="../../static/image/sword.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
				<view class="weapon-some" @click="tmpGoSeven(3)" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
					<image src="../../static/image/torch.png" mode="" style="width: 100%; height: 100%; borderRadius: 20rpx;"></image>
				</view>
			</view>
			<view class="right-wrapper">
				<view class="welcome-text">
					<view class="first-line">
						<text>这里是锻造商店</text>
					</view>
					<view class="second-line">
						<text>勇士</text>
					</view>
					<view class="third-line">
						<text>您有什么需要吗？</text>
					</view>
				</view>
				<view class="boss-box">
					<image src="../../static/image/boss.png" mode="" style="width: 100%; height: 100%;"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie';
import { onMounted, ref } from 'vue';
const isAnimationDone = ref<boolean>(false);
const tmpGoSeven = (idx:number) => {
	if (!isAnimationDone.value) {
		let first = document.querySelector('.first-line');
		let second =document.querySelector('.second-line');
		let third = document.querySelector('.third-line');
		first.style.transition = 'none';
		second.style.transition = 'none';
		third.style.transition = 'none';
		first.style.opacity = 1;
		second.style.opacity = 1;
		third.style.opacity = 1;
		isAnimationDone.value = true;
		return;
	}
	Cookies.set("weaponIdx", idx);
	uni.navigateTo({
		url: '/pages/scene7/scene7',
	});
}
onMounted(() => {
	let bossBox = document.querySelector('.boss-box');
	let root = document.querySelector('.root');
	let totWid = bossBox.clientWidth;
	bossBox.style.height = totWid * 2.557 + "px";
	if (root.clientHeight > root.clientWidth * 2) {
		bossBox.style.height = totWid * 2.557 * 1.4 + 'px';
		bossBox.style.width = totWid * 1.4 + 'px';
	}
	let rightWrapper = document.querySelector('.right-wrapper');
	let weaponBar = document.querySelector('.weapon-bar');
	rightWrapper.style.height = weaponBar.clientHeight + 'px';
	
	/*文案入场动画*/
	let welcomeBox = document.querySelector('.welcome-text');
	welcomeBox.style.opacity = 1;
	let first = document.querySelector('.first-line');
	let second = document.querySelector('.second-line');
	let third = document.querySelector('.third-line');
	setTimeout(() => {
		first.style.opacity = 1;
	}, 200);
	setTimeout(() => {
		second.style.opacity = 1;
	}, 1400);
	setTimeout(() => {
		third.style.opacity = 1;
	}, 2600);
	setTimeout(() => {
		isAnimationDone.value = true;
	}, 3800);
})
</script>

<style lang="less" scoped>
.unipage-body, html, body {
	background-color: #c8b586;
}
.root {
	overflow: hidden;
	height: 100%;
	background-color: #c8b586;
	background-image: url("../../static/image/boss_weapon.png");
	background-size: 100% 100%;
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
		.right-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 180rpx;
			position: relative;
			right: 30rpx;
			.welcome-text {
				width: 120%;
				height: 150rpx;
				background: #87725A;
				border-radius: 20px;
				box-shadow: 15rpx -15rpx 25rpx -13rpx rgb(75, 72, 70);
				text-align: center;
				color: #fdf5d9;
				font-size: 30rpx;
				line-height: 49rpx;
				transition: all 1.7s;
				opacity: 0;
				.first-line, .second-line, .third-line {
					opacity: 0;
					transition: all 1.7s;
				}
			}
		}
		.welcome-text::after {
			content: "";
			display: block;
			width: 40rpx;
			height: 40rpx;
			background-color: #87725A;
			position: relative;
			left: 50%;
			transform: rotate(45deg) translate(-50%, -25%);
			//box-shadow: 1px 1px 10px rgb(75, 72, 70);
			z-index: -1;
		}
		.boss-box {
			height: 800rpx;
			//background-color: black;
			width: 265rpx;
/* 			background-image: url("../../static/image/boss.png");
			background-size: contain; */
			margin-top: 30rpx;
		}
	}
}
.hoverButton {
	opacity: 0.9;
	transform: scale(0.95, 0.95);
}

@media screen and (min-width: 700px) {
	.weapon-some {
		width: 130rpx !important;
		height: 190rpx !important;
		margin-top: 20rpx !important;
	}
	.boss-box {
		margin-top: 50rpx !important;
	}
	.right-wrapper {
		margin-top: 10rpx !important;
	}
}

@media screen and (min-width: 1024px) {
	.bottom {
		justify-content: space-evenly !important;
	}
	.weapon-some {
		width: 120rpx !important;
		height: 180rpx !important;
		margin-top: 20rpx !important; 
	}
	.boss-box {
		height: 650rpx !important;
		width: 230rpx !important;
		margin-top: 20rpx !important;
		margin-right: 40rpx !important;
	}
}
</style>
