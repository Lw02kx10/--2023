<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="upperSpace">
			<view class="selections">
				<text>性别</text>
				<view class="gender">
					<view></view>
					<view></view>
				</view>
				<text>服装</text>
				<view class="cloth">
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
				</view>
				<text>发型</text>
				<view class="hair">
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
					<view></view>
				</view>
			</view>
			<view class="image">人物形象</view>
		</view>
		<view class="lowerSpace">
			<view class="enter">这就是我</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.page {
		height: 1500rpx;
		display: flex;
		justify-content: space-around;
		background-color: #C8B586;
	}

	.upperSpace {
		width: 100%;
		height: 60%;
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: 5%;
	}

	.selections {
		height: 100%;
		width: 40%;
	}

	.selections text {
		line-height: 3em;
	}

	.gender {
		height: 20%;
		display: flex;
		flex-wrap: wrap;
	}

	.cloth {
		height: 20%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.hair {
		height: 20%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.gender view {
		width: 70rpx;
		height: 70rpx;
		margin: 10rpx;
		background-color: #5B5853;
	}

	.cloth view {
		width: 70rpx;
		height: 70rpx;
		margin: 10rpx;
		background-color: #5B5853;
	}

	.hair view {
		width: 70rpx;
		height: 70rpx;
		margin: 10rpx;
		background-color: #5B5853;
	}

	.image {
		height: 100%;
		width: 35%;
		background-color: #5B5853;
	}

	.enter {
		width: 45%;
		height: 8%;
		position: absolute;
		bottom: 20%;
		border-radius: 30rpx;
		background-color: #87725A;
	}
</style>