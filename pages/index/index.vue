<template>
	<view :class="activeclass" class="animate__animated animate__fadeIn" id = "root">
<!-- 		<view class="info">
			<text>提示：建议在浏览器中打开</text>
		</view> -->
		<view class="guid">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</view>
		<view class="yyz">&nbsp;&nbsp;&nbsp;</view>
		<view class="enter" @click="enter" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">进入
		</view>
	</view>
</template>

<script scoped>
import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				activeclass: "page",
			}
		},
		onLoad() {
			
		},
		methods: {
			enter() {
				this.activeclass = "page puff-out-center"
				Cookies.set('nextTrue', 0);
				if (Cookies.get('name')) {
					Cookies.remove('name');
					Cookies.remove('attribute');
					Cookies.remove('career');
					Cookies.remove('school');
				}
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/scene2_1/scene2_1"
					})
					this.activeclass = "page"
				}, 2000)
			}
		},
/* 		mounted() {
			let infoDiv = document.querySelector('.info');
			setTimeout(() => {
				infoDiv.style.opacity = 0;
			}, 2000);
		} */
	}
</script>

<style scoped>
/* 	.info {
		position: fixed;
		z-index: 100;
		top: 3vh;
		background-color: #ad6a3d;
		color: white;
		padding: 8rpx 20rpx;
		border-radius: 10rpx;
		box-shadow: 4rpx 4rpx 12rpx rgba(0, 0, 0, 0.4);
		opacity: 1;
		font-size: 32rpx;
		transition: all 2s;
	} */
	.page {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(0deg, rgba(122, 116, 85, 0.2), rgba(122, 116, 85, 0.2)), url("../../static/image/index.jpg");
		background-size: 100% 100%;
	}

	.guid {
		top: 22.2%;
		position: relative;
		font-family: 'Inter';
		font-weight: 600;
		font-size: 80rpx;
		text-align: center;
		color: #FDF5D9;
	}

	.yyz {
		position: relative;
		top: 55%;
		margin-left: 20rpx;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 70rpx;
		color: #F9EB74;
	}

	.enter {
		width: 300rpx;
		height: 100rpx;
		background-image: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		border-radius: 15px;
		font-weight: 900;
		font-size: 60rpx;
		line-height: 100rpx;
		color: #FDF5D9;
		text-align: center;
		position: relative;
		top: 66%;
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
	@media screen and (min-width: 600px) {
		.guid {
			top: 21.6% !important;
			font-size: 72rpx !important;
		}
		.yyz {
			top: 53.6% !important;
		}
		.enter {
			width: 360rpx !important;
			height: 130rpx !important;
			top: 59% !important;
			line-height: 130rpx !important;
		}
	}
	@media screen and (min-width: 1000px) {
		.guid {
			top: 21.6% !important;
			font-size: 72rpx !important;
		}
		.yyz {
			top: 52.6% !important;
		}
		.enter {
			width: 330rpx !important;
			height: 110rpx !important;
			top: 57% !important;
			font-size: 68rpx !important;
			line-height: 110rpx !important;
		}
	}
</style>