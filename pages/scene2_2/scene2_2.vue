<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="upperSpace">
			<view class="selections">
				<text class="title">性别：</text>
				<view class="gender">
					<view id="boy" @click="boy" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
					</view>
					<view id="girl" @click="girl" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
					</view>
				</view>
				<text class="title">服装：</text>
				<view class="cloth">
					<view @click="selectCloth(index)" v-for="(item,index) in cloth" :key="index"
						hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
						<image :src="item.src"></image>
						</view>
				</view>
				<text class="title">发型：</text>
				<view class="hair">
					<view @click="selectHair(index)" v-for="(item,index) in hair" :src="item.src" :key="index"
						hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
						<image :src="item.src"></image>
						</view>
				</view>
			</view>
			<view class="image">
				<image class="person" :src="activeImage"></image>
			</view>
		</view>
		<view class="lowerSpace">
			<view class="enter" @click="gotoImage_1" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">这就是我</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeImage: "../../static/image/test.png",
				cloth: [],
				hair: [],
				cloth_1: [{
					src: "../../static/cloth/c1.png"
				}, {
					src: "../../static/cloth/c2.png"
				}, {
					src: "../../static/cloth/c3.png"
				}, {
					src: "../../static/cloth/c4.png"
				}],
				cloth_2: [{
					src: "../../static/cloth/c5.png"
				}, {
					src: "../../static/cloth/c6.png"
				}, {
					src: "../../static/cloth/c7.png"
				}, {
					src: "../../static/cloth/c8.png"
				}],
				hair_1: [{
					src: "../../static/face/h1.png"
				}, {
					src: "../../static/face/h2.png",
				}, {
					src: "../../static/face/h3.png"
				}, {
					src: "../../static/face/h4.png"
				}],
				hair_2: [{
					src: "../../static/face/h5.png"
				}, {
					src: "../../static/face/h6.png",
				}, {
					src: "../../static/face/h7.png"
				}, {
					src: "../../static/face/h8.png"
				}]
			}
		},
		methods: {
			gotoImage_1() {
				uni.navigateBack();
			},
			boy() {
				this.activeImage = "../../static/image/test.png"
				this.cloth = this.cloth_1
				this.hair = this.hair_1
			},
			girl() {
				this.activeImage = "../../static/image/test2.png"
				this.cloth = this.cloth_2
				this.hair = this.hair_2
			},
			selectCloth(e) {
				console.log(e);
			},
			selectHair(e) {
				console.log(e);
			}
		},
		mounted() {
			this.cloth = this.cloth_1
			this.hair = this.hair_1
		}
	}
</script>

<style>
	.page {
		height: 1500rpx;
		display: flex;
		justify-content: space-around;
		background: linear-gradient(0deg, rgba(35, 26, 137, 0.2), rgba(35, 26, 137, 0.2)), url("../../static/image/mirror_back.png");
		background-size: 100% 100%;
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
		width: 35%;
	}

	.selections text {
		line-height: 3em;
	}

	.title {
		font-family: 'Inter';
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
		color: #FDF5D9;
	}

	.gender {
		height: 10%;
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
		width: 80rpx;
		height: 80rpx;
		margin: 10rpx;
	}

	#boy {
		font-size: 65rpx;
		text-align: center;
		color: #FFCD4D;
		background: url("../../static/image/boy.png");
		background-size: 100% 100%;
	}

	#girl {
		font-size: 65rpx;
		text-align: center;
		color: #FDF5D9;
		background: url("../../static/image/girl.png");
		background-size: 100% 100%;
	}

	.cloth view {
		width: 80rpx;
		height: 80rpx;
		margin: 10rpx;
		background-color: rgba(91, 88, 83, 0.65);
		border-radius: 10px;
	}
	.cloth view image{
		width: 100%;
		height: 100%;
	}
	.hair view {
		width: 80rpx;
		height: 80rpx;
		margin: 10rpx;
		background-color: rgba(91, 88, 83, 0.65);
		border-radius: 10px;
	}
	.hair view image{
		width: 100%;
		height: 100%;
	}
	.image {
		width: 50%;
		position: relative;
		top: 10%;
	}

	.person {
		width: 100%;
		height: 100%;
	}

	.enter {
		width: 45%;
		height: 8%;
		position: absolute;
		bottom: 15%;
		right: 10%;
		border-radius: 30rpx;
		background: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		font-family: 'Inter';
		font-weight: 900;
		font-size: 32px;
		line-height: 60px;
		text-align: center;
		color: #FDF5D9;
	}

	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
</style>