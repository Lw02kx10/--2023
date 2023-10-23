<template>
	<view class="root">
		<view class="first-line">
			<text>雄关漫道真如铁</text>
		</view>
		<view class="second-line">
			<text>而今迈步从头越</text>
		</view>
		<view class="third-line">
			<text>我亲爱的勇士！</text>
		</view>
		<view class="fourth-line">
			<text>他要携带着一身的装备与勇气探索未来了~</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
const isReady = ref<Boolean>(false);
watch(isReady, (newval : Boolean) => {
	if (newval) {
		setTimeout(() => {
			uni.navigateTo({
				url: "/pages/index/index",
			})
		}, 2000);
	}
})
onMounted(() => {
	let root = document.querySelector('.root');
	setTimeout(() => {
		root.style.backgroundColor = 'white';
	}, 100)
	let first = document.querySelector('.first-line');
	let second =document.querySelector('.second-line');
	let third = document.querySelector('.third-line');
	let fourth = document.querySelector('.fourth-line')
	setTimeout(() => {
		first.style.opacity = 1;
	}, 300);
	setTimeout(() => {
		second.style.opacity = 1;
	}, 1500);
	setTimeout(() => {
		third.style.opacity = 1;
	}, 2700);
	setTimeout(() => {
		fourth.style.opacity = 1;
		isReady.value = true;
	}, 3900);
})
</script>

<style lang="less" scoped>
.root {
	height: 100%;
	width: 100%;
	background-color: gray;
	transition: all 1s;
	display: flex;
	flex-direction: column;
	color: black;
	font-size: 37rpx;
	font-weight: bold;
	line-height: 120rpx;
	.first-line, .second-line, .third-line, .fourth-line {
		text-align: center;
		opacity: 0;
		transition: all 1.7s;
	}
	.first-line, .second-line, .third-line, .fourth-line  {
		position: relative;
		top: 36%;
		transform: translate(0, -50%);
	}
}
</style>
