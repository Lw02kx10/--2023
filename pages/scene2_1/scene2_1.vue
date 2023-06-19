<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="text">文案</view>
		<view class="content">
			<view id="name">
				<view class="title">姓名:</view> <textarea class="textInput"></textarea>
			</view>
			<view id="attribute">
				<view class="title">属性:</view> <textarea class="textInput"></textarea>
			</view>
			<view id="career">
				<view class="title">职业:</view> <textarea class="textInput"></textarea>
			</view>
			<view id="school">
				<view class="title">学院:</view> <textarea class="textInput"></textarea>
			</view>
			<view class="image" @click="goToMirror" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0"></view>
			<view class="next" v-if="showNext" @click="gotoImage_3" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">下一页</view>
		</view>
		<view class="tail">独白</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showNext: 0,
				name: "",
				attribute: "",
				career: "",
				school: ""
			}
		},
		methods: {
			goToMirror() {
				uni.navigateTo({
					url: "/pages/scene2_2/scene2_2"
				})
				this.showNext = 1
			},
			gotoImage_3() {
				uni.navigateTo({
					url: "/pages/SceneThree/SceneThree"
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(0deg, rgba(154, 182, 198, 0.3), rgba(154, 182, 198, 0.3)), url("../../static/image/image_1.jpg");
		background-size: 100% 100%;
	}

	.text {
		width: 75%;
		height: 15%;
		top: 6%;
		position: absolute;
		background: #87725A;
		border-radius: 20px;
	}

	.content {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 25%;
		background: url("../../static/image/volume.png");
		background-size: 100% 100%;
	}

	#name {
		display: flex;
		left: 16%;
		top: 25%;
		position: absolute;
		font-family: 'Inter';
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #514639;
	}

	#attribute {
		display: flex;
		left: 55%;
		top: 25%;
		position: absolute;
		font-family: 'Inter';
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #514639;
	}

	#career {
		display: flex;
		left: 16%;
		top: 45%;
		position: absolute;
		font-family: 'Inter';
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #514639;
	}

	#school {
		display: flex;
		left: 16%;
		top: 65%;
		position: absolute;
		font-family: 'Inter';
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #514639;
	}
	.textInput{
		position: absolute;
		left: 100%;
		font-family: 'Inter';
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #514639;
	}

	.image {
		width: 20%;
		height: 25%;
		position: absolute;
		right: 10%;
		bottom: 25%;
		background: url("../../static/face/f1.png");
		background-size: 100% 100%;
	}

	.next {
		width: 24%;
		height: 10%;
		position: absolute;
		right: 7%;
		bottom: 11%;
		background: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		font-family: 'Inter';
		font-style: italic;
		font-weight: 900;
		font-size: 20px;
		line-height: 38px;
		text-align: center;
		color: #FDF5D9;
	}

	.tail {
		width: 100%;
		height: 20%;
		position: absolute;
		bottom: 0;
	}

	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
</style>