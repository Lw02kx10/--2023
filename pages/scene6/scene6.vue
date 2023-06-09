<template>
	<view class="root">
		<view class="top-part">
			<view class="top-left">
				<view class="forge-furnace">
					
				</view>
				<view class="text-content">
					<text>文案</text>
				</view>
			</view>
			<view class="top-right">
				<view class="virtual-box"></view>
				<view class="boss-box">
					
				</view>
			</view>
		</view>
		<view class="bottom-part">
			<view class="bottom-left">
				<view class="weapon-box"> <!-- 武器栏 -->
					<view class="enchanted-slot"> <!-- 附魔槽 -->
						
					</view>
					<view class="enchanted-slot"> <!-- 附魔槽 -->
						
					</view>
					<view class="enchanted-slot"> <!-- 附魔槽 -->
						
					</view>
				</view>
			</view>
			<view class="bottom-right">
				<view class="bottom-forge">
					<view class="choose-option" @click="tmpGoSeven">
						
					</view>
				</view>
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
	let rootHtml = document.querySelector('.root');
})
</script>

<style lang="less" scoped>
.unipage-body, html, body {
	background-color: #c8b586;
}
.root {
	height: 100%;
	background-color: #c8b586;
	.top-part {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 75rpx;
		.top-left {
			display: flex;
			flex-direction: column;
			margin-left: 90rpx;
			.forge-furnace {
				height: 360rpx;
				width: 217.5rpx;
				background-color: #87725a;
				font-size: 20px;
			}
			.text-content {
				background-color: #5b5853;
				height: 75rpx;
				margin-top: 50rpx;
				text-align: center;
				line-height: 75rpx;
				color: white;
				font-size: 32rpx;
			}
		}
		.top-right {
			display: flex;
			flex-direction: column;
			margin-right: 90rpx;
			.virtual-box {
				background-color: #c8b586;
				height: 50rpx;
			}
			.boss-box {
				background-color: #87725a;
				width: 271.5rpx;
				height: 520rpx;
			}
		}
	}
	.bottom-part {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		justify-content: space-between;
		.bottom-left {
			margin-left: 110rpx;
			.weapon-box {
				background-color: #87725a;
				width: 178.5rpx;
				height: 480rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				position: relative;
				.enchanted-slot {
					width: 100rpx;
					height: 100rpx;
					background-color: #5b5853;
				}
				:nth-child(1) {
					position: absolute;
					right: 140rpx;
				}
				:nth-child(2) {
					position: absolute;
					top: 55rpx;
					right: 140rpx;
				}
				:nth-child(3) {
					position: absolute;
					bottom: 55rpx;
					right: 140rpx;
				}
			}
		}
		.bottom-right {
			margin-right: 110rpx;
			.bottom-forge {
				width: 220rpx;
				height: 340rpx;
				background-color: #5b5853;
				margin-top: 80rpx;
				position: relative;
				:first-child {
					width: 180rpx;
					height: 100rpx;
					background-color: #87725a;
					border-radius: 25rpx;
					position: absolute;
					left: 50%;
					translate: -50% -65rpx;
				}
			}
		}
	}
}
</style>
