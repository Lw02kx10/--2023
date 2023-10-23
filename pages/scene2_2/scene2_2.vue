<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="upperSpace">
			<view class="selections">
				<view class="text-wrapper">
					<text class="title">性别：</text>
				</view>
				<view class="gender">
					<view id="boy" @click="boy" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
					</view>
					<view id="girl" @click="girl" hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
					</view>
				</view>
				<view class="text-wrapper">
					<text class="title">服装：</text>
				</view>
				<view class="cloth">
					<view @click="selectCloth(index)" v-for="(item,index) in cloth" :key="index"
						hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
						<image :src="item.src"></image>
					</view>
				</view>
				<view class="text-wrapper">
					<text class="title">职业：</text>
				</view>
				<view class="job-select">
					<view class="job" @click="selectJob(0)">
						<text>产品</text>
					</view>
					<view class="job" @click="selectJob(1)">
						<text>设计</text>
					</view>
					<view class="job" @click="selectJob(2)">
						<text>程序</text>
					</view>
				</view>
<!-- 				<view class="hair">
					<view @click="selectHair(index)" v-for="(item,index) in hair" :src="item.src" :key="index"
						hover-class="hoverButton" hover-stay-time="100" hover-start-time="0">
						<image :src="item.src"></image>
						</view>
				</view> -->
			</view>
			<view class="image">
				<!-- <image class="person" :src="activeImage"></image> -->
<!-- 				<image :src="head_1[0].src" style="width: 100%;height: 100%;" v-if="isBoy && isIdxZeroHead" class="image1"></image>
				<image :src="body_1[0].src" style="width: 140%;height: 100%;" v-if="isBoy && isIdxZeroBody" class="image2"></image>
				<image :src="head_1[1].src" style="width: 100%;height: 100%;" v-if="isBoy && !isIdxZeroHead" class="image3"></image>
				<image :src="body_1[1].src" style="width: 240%;height: 100%;" v-if="isBoy && !isIdxZeroBody" class="image4"></image>
				<image :src="head_2[0].src" style="width: 140%;height: 100%;" v-if="!isBoy && isIdxZeroHead" class="image5"></image>
				<image :src="body_2[0].src" style="width: 180%;height: 100%;" v-if="!isBoy && isIdxZeroBody" class="image6"></image>
				<image :src="head_2[1].src" style="width: 140%;height: 100%;" v-if="!isBoy && !isIdxZeroHead" class="image7"></image>
				<image :src="body_2[1].src" style="width: 180%;height: 100%;" v-if="!isBoy && !isIdxZeroBody" class="image8"></image> -->
				<image src="../../static/welcome_pic/boy/b1d.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'd' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/boy/b1p.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'p' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/boy/b1t.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 't' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/boy/b2d.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'd' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/boy/b2p.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'p' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/boy/b2t.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 't' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/boy/b3d.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'd' && nowCloth == 0"></image>
				<image src="../../static/welcome_pic/boy/b3p.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 'p' && nowCloth == 0"></image>
				<image src="../../static/welcome_pic/boy/b3t.png" style="width: 100%; height: 100%;" mode="" v-if="isBoy && nowJob == 't' && nowCloth == 0"></image>
				<image src="../../static/welcome_pic/girl/g1d.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'd' && nowCloth == 3"></image>
				<image src="../../static/welcome_pic/girl/g1p.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'p' && nowCloth == 3"></image>
				<image src="../../static/welcome_pic/girl/g1t.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 't' && nowCloth == 3"></image>
				<image src="../../static/welcome_pic/girl/g2d.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'd' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/girl/g2p.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'p' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/girl/g2t.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 't' && nowCloth == 2"></image>
				<image src="../../static/welcome_pic/girl/g3d.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'd' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/girl/g3p.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'p' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/girl/g3t.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 't' && nowCloth == 1"></image>
				<image src="../../static/welcome_pic/girl/g4d.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'd' && nowCloth == 0"></image>
				<image src="../../static/welcome_pic/girl/g4p.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 'p' && nowCloth == 0"></image>
				<image src="../../static/welcome_pic/girl/g4t.png" style="width: 100%; height: 100%;" mode="" v-if="!isBoy && nowJob == 't' && nowCloth == 0"></image>
			</view>
		</view>
		<view class="lowerSpace">
			<view class="enter" @click="gotoImage_1">这就是我</view>
		</view>
	</view>
</template>

<script>
import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				activeImage: "../../static/image/test.png",
				cloth: [],
				hair: [],
				head: [],
				body: [],
				cloth_1: [{
					src: "../../static/cloth/c2.png"
				},{
					src: "../../static/cloth/c4.png"
				},{
					src: "../../static/cloth/c3.png"
				}],
				cloth_2: [{
					src: "../../static/cloth/c5.png"
				}, {
					src: "../../static/cloth/c7.png"
				}, {
					src: "../../static/cloth/c6.png"
				}, {
					src: "../../static/cloth/c8.png"
				}],
				hair_1: [{
					src: "../../static/face/h1.png"
				},{
					src: "../../static/face/h3.png"
				}],
				hair_2: [{
					src: "../../static/face/h4.png"
				}, {
					src: "../../static/face/h7.png"
				}],
				head_1: [{
					src: "../../static/head/boy/IMG_24961.png"
				}, {
					src: "../../static/head/boy/IMG_24931.png"
				}],
				head_2: [{
					src: "../../static/head/girl/IMG_56631.png"
				}, {
					src: "../../static/head/girl/IMG_56641.png"
				}],
				body_1: [{
					src: "../../static/body/boy/IMG_24941.png"
				}, {
					src: "../../static/body/boy/IMG_24951.png"
				}],
				body_2: [{
					src: "../../static/body/girl/IMG_56671.png"
				}, {
					src: "../../static/body/girl/IMG_56701.png"
				}],
				isBoy: 1,
				isIdxZeroHead: 1,
				isIdxZeroBody: 1,
				nowJob: 'p',
				nowCloth: 2,
			}
		},
		methods: {
			gotoImage_1() {
				Cookies.set('nextTrue', 1);
				Cookies.set('isBoy', this.isBoy ? '1' : '0');
				console.log(this.isIdxZeroHead);
				Cookies.set('isZeroHead', this.isIdxZeroHead ? '1' : '0');
				uni.navigateTo({
					url:"/pages/scene2_1/scene2_1",
				})
			},
			boy() {
				this.activeImage = "../../static/image/test.png"
				this.cloth = this.cloth_1
				this.hair = this.hair_1
				this.head = this.head_1
				this.body = this.body_1
				if (!this.isBoy) {
					this.isBoy = 1;
					let boy = document.querySelector('#boy');
					boy.style.background = 'url(../../static/image/boy.png)';
					boy.style.backgroundSize = '100% 100%';
					let girl = document.querySelector('#girl');
					girl.style.background = 'url(../../static/image/girl.png)';
					girl.style.backgroundSize = '100% 100%';
				}
			},
			girl() {
				this.activeImage = "../../static/image/test2.png"
				this.cloth = this.cloth_2
				this.hair = this.hair_2
				this.head = this.head_2
				this.body = this.body_2
				if (this.isBoy) {
					this.isBoy = 0;
					let boy = document.querySelector('#boy');
					boy.style.background = 'url(../../static/image/boy2.png)';
					boy.style.backgroundSize = '100% 100%';
					let girl = document.querySelector('#girl');
					girl.style.background = 'url(../../static/image/girl2.png)';
					girl.style.backgroundSize = '100% 100%';
					let image_head, image_body;
					this.$nextTick(() => {
						if (this.isIdxZeroHead) {
							image_head = document.querySelector('.image5');
						} else {
							image_head = document.querySelector('.image7');
						}
						if (this.isIdxZeroBody) {
							image_body = document.querySelector('.image6');
						} else {
							image_body = document.querySelector('.image8');
						}
						image_head.style.left = '-20%';
						image_body.style.left = '-39%';
					})
				}
			},
			selectCloth(e) {
				console.log(e);
				//this.isIdxZeroBody = !e;
				this.nowCloth = e;
			},
			selectHair(e) {
				console.log(e);
				this.isIdxZeroHead = !e;
				console.log(this.isIdxZeroHead);
			},
			selectJob(num) {
				if (num ==0) this.nowJob = 'p';
				else if (num == 1) this.nowJob = 'd';
				else if (num == 2) this.nowJob = 't';
			}
		},
		mounted() {
			this.cloth = this.cloth_1
			this.hair = this.hair_1
			let img = document.querySelector('.image');
			let totWid = img.clientWidth;
			img.style.height = totWid * 2.567 + 'px';
		},
		watch: {
			isIdxZeroBody:{
				handler(newval) {
					if (newval && this.isBoy) {
						this.$nextTick(() => {
							let img = document.querySelector('.image2');
							img.style.left = '-20%';
						})
					} else if (newval && !this.isBoy) {
						this.$nextTick(() => {
							let img = document.querySelector('.image6');
							img.style.left = '-39%';
						})
					} else if (!newval && !this.isBoy) {
						this.$nextTick(() => {
							let img = document.querySelector('.image8');
							img.style.left = '-39%';
						})
					}
				},
				immediate: true,
			},
			isBoy: {
				handler(newval) {
					if (newval && this.isIdxZeroBody) {
						this.$nextTick(() => {
							let img = document.querySelector('.image2');
							img.style.left = '-20%';
						})
					}
					if (newval && this.nowCloth == 3) this.nowCloth = 2; 
				}
			},
			isIdxZeroHead: {
				handler(newval) {
					if (newval && !this.isBoy) {
						this.$nextTick(() => {
							let img = document.querySelector('.image5');
							img.style.left = '-20%';
						})
					} else if (!newval && !this.isBoy) {
						this.$nextTick(() => {
							let img = document.querySelector('.image7');
							img.style.left = '-20%';
						})
					}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.unipage-body, html, body {
		background-color: #c8b586;
	}
	.page {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(0deg, rgba(35, 26, 137, 0.2), rgba(35, 26, 137, 0.2)), url("../../static/image/mirror_back.png");
		background-size: 100% 100%;
	}

	.upperSpace {
		width: 100%;
		height: 60%;
		display: flex;
		justify-content: space-around;
	}

	.selections {
		height: 100%;
		width: 35%;
	}

	.selections text {
		line-height: 0px;
	}
	.text-wrapper {
		margin-top: 98rpx;
	}
	.title {
		font-weight: 700;
		font-size: 40rpx;
		color: #FDF5D9;
	}
	.gender {
		height: 10%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.cloth {
		height: 20%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.hair {
		height: 20%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
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
		width: 45%;
		position: relative;
		top: 12.5%;
		right: 12.5%;
		overflow: hidden;
		.image1,.image3,.image5,.image7 {
			position: absolute;
		}
		.image2,.image4,.image6,.image8 {
			position: absolute;
			left: -70%;
		}
	}

	.person {
		width: 100%;
		height: 100%;
	}

	.enter {
		width: 260rpx;
		background: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		font-weight: 900;
		font-size: 45rpx;
		line-height: 100rpx;
		text-align: center;
		margin-top: 40%;
		margin-left: 77%;
		transform: translate(-100%, 0);
		color: #FDF5D9;
	}

	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
	@media screen and (min-width: 1000px) {
		.image {
			width: 42% !important;
		}
	}
	.job-select {
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
	}
	.job {
		width: 80%;
		color: #fdf5d9;
		margin: 8rpx 0rpx;
		background-color: #ad6942;
		text-align: center;
		border-radius: 20rpx;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		font-size: 36rpx;
		z-index: 100;
	}
	.job:hover {
		transform: scale(1.1);
	}
</style>