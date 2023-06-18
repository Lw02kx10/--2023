<template>
	<view :class="activeclass">
		<view class="guid">冒险者协会</view>
		<view class="yyz">营业中</view>
		<view class="enter" @click="enter" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">进入
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeclass: "page"
			}
		},
		onLoad() {

		},
		methods: {
<<<<<<< Updated upstream
			enter() {
				this.activeclass = "page puff-out-center"
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/image_1/image_1"
					})
					this.activeclass = "page"
				}, 2000)
			}
=======
            
>>>>>>> Stashed changes
		}
	}
</script>

<style>
	.page {
		height: 1540rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(0deg, rgba(122, 116, 85, 0.2), rgba(122, 116, 85, 0.2)), url("../../static/image/index.jpg");
		background-size: 100% 100%;
	}

	.guid {
		width: 70%;
		height: 10%;
		position: absolute;
		top: 22%;
		position: absolute;
		font-family: 'Inter';
		font-weight: 600;
		font-size: 100rpx;
		line-height: 144rpx;
		color: #FDF5D9;
	}

	.yyz {
		position: absolute;
		width: 131px;
		height: 37px;
		left: 37%;
		bottom: 32%;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		line-height: 48px;
		color: #F9EB74;
	}

	.enter {
		position: absolute;
		width: 58%;
		height: 13%;
		bottom: 10%;
		background-image: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		border-radius: 15px;
		font-family: 'Inter';
		font-weight: 900;
		font-size: 80rpx;
		line-height: 200rpx;
		color: #FDF5D9;
		text-align: center;
	}

	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}

	.puff-out-center {
		-webkit-animation: puff-out-center 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
		animation: puff-out-center 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	}

	@keyframes puff-out-center {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-filter: blur(0px);
			filter: blur(0px);
			opacity: 1;
		}

		100% {
			-webkit-transform: scale(2);
			transform: scale(2);
			-webkit-filter: blur(4px);
			filter: blur(4px);
			opacity: 0;
		}
	}
</style>