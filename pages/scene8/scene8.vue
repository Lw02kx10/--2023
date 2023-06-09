<template>
	<view class="root">
		<view class="info-bar">
			<view class="basic-info">
				<view class="info-text">
					<text></text>
				</view>
				<view class="head-box">
					
				</view>
			</view>
			<view class="skill-info-one">
				
			</view>
			<view class="skill-info-two">
				
			</view>
			<view class="talent-info">
				
			</view>
			<view class="enchant-info">
				
			</view>
		</view>
		<view class="bottom-bar">
			<view class="save-png">
				<text>保存至本地</text>
			</view>
			<view class="ready-btn">
				
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
unipage-body, html, body {
	background-color: #c8b586;
}
.root {
	height: 100%;
	display: flex;
	flex-direction: column;
	.info-bar {
		margin-top: 75rpx;
		display: flex;
		flex-direction: column;
		height: 80%;
		justify-content: space-between;
		.basic-info {
			background-color: #5b5853;
			height: 17.5%;
			width: 600rpx;
			margin: 0 auto;
			display: flex;
			justify-content: flex-end;
			.info-text {
				
			}
			.head-box {
				width: 110rpx;
				height: 80%;
				position: relative;
				top: 10%;
				margin-right: 20rpx;
				background-color: #fdf5d9;
			}
		}
		.skill-info-one {
			background-color: #5b5853;
			height: 17.5%;
			width: 600rpx;
			margin: 0 auto;
		}
		.skill-info-two {
			background-color: #5b5853;
			height: 17.5%;
			width: 600rpx;
			margin: 0 auto;
		}
		.talent-info {
			background-color: #5b5853;
			height: 17.5%;
			width: 600rpx;
			margin: 0 auto;
		}
		.enchant-info {
			background-color: #5b5853;
			height: 17.5%;
			width: 600rpx;
			margin: 0 auto;
		}
	}
	.bottom-bar {
		display: flex;
		width: 600rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		margin-bottom: 30rpx;
		justify-content: space-around;
		.save-png {
			height: 80rpx;
			width: 230rpx;
			background-color: #87725a;
			border-radius: 25rpx;
			align-self: center;
			margin-bottom: 40rpx;
			color: white;
			line-height: 80rpx;
			text-align: center;
			font-size: 32rpx;
		}
		.ready-btn {
			width: 230rpx;
			height: 230rpx;
			background-color: #fdf5d9;
			border-radius: 100%;
		}
	}
}
</style>
