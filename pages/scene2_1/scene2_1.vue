<template>
	<view :class="['page', !showNext ? 'animate__animated animate__fadeIn' : '']">
		<view class="text">
			<view class="first-line">
				<text>{{showNext ? "以下是您的基本信息" : "您好，交付任务请右转，治疗上二楼！"}}</text>
			</view>
			<view class="second-line">
				<text>{{showNext ? "请确认！(ง ˙o˙)ว\n" : "新面孔？d(ŐдŐ๑)\n"}}</text>
				<text>{{showNext ? "欢迎您成为我们协会的新冒险者" : "是来加入我们协会的新冒险者吗，失礼失礼"}}</text>
			</view>
			<view class="third-line">
				<text>{{showNext ? "对了，还有一件事 (ง •̀_•́)ง\n" : "加入协会的话 (〃ﾉωﾉ)\n"}}</text>
				<text>{{showNext ? "请继续选择您的格斗技巧和天赋吧！" : "需要填写一份基础信息的表单，有劳了"}}</text>
			</view>
		</view>
		<view class="content">
			<view id="name">
				<view class="title">姓名:&nbsp;</view>
				<input type="text" class="textInput" maxlength="5" v-model="name" :disabled="showNext">
			</view>
			<view id="attribute">
				<view class="title">属性:&nbsp;</view>
				<input type="text" class="textInput" maxlength="5" v-model="attribute" :disabled="showNext">
			</view>
			<view id="career">
				<view class="title">职业:&nbsp;</view>
				<input type="text" class="textInput" maxlength="6" v-model="career" :disabled="showNext">
			</view>
			<view id="school">
				<view class="top-wrapper">
					<view class="title">所属学院:&nbsp;</view>
					<select class="textInput" :disabled="showNext" v-model="school" onmousedown="if(this.options.length>4){this.size=5}" onchange="this.size=1" onblur="this.size=1" >
						<option value="自动化学院">自动化学院</option>
						<option value="智算学部">智算学部</option>
						<option value="经管学部">经管学部</option>
						<option value="教育学院">教育学院</option>
						<option value="数学学院">数学学院</option>
						<option value="理学院">理学院</option>
						<option value="材料学院">材料学院</option>
						<option value="机械学院">机械学院</option>
						<option value="未来技术学院">未来技术学院</option>
						<option value="精仪学院">精仪学院</option>
						<option value="微电子学院">微电子学院</option>
						<option value="环境学院">环境学院</option>
						<option value="建工学院">建工学院</option>
						<option value="海洋学院">海洋学院</option>
						<option value="建筑学院">建筑学院</option>
						<option value="化工学院">化工学院</option>
						<option value="生命科学学院">生命科学学院</option>
						<option value="医学部">医学部</option>
						<option value="地科院">地科院</option>
						<option value="法学院">法学院</option>
						<option value="马克思主义院">马克思主义院</option>
						<option value="药学院">药学院</option>
						<option value="外国语学院">外国语学院</option>
						<option value="人文艺术学院">人文艺术学院</option>
						<option value="新媒体学院">新媒体学院</option>
					</select>
				</view>
			</view>
			<view class="image" @click="goToMirror" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0"></view>
			<view class="arrow-wrapper" v-if="!showNext">
				<view class="arrow">
					<view class="arrow-top"></view>
					<view class="arrow-bottom"></view>
				</view>
				<view class="info-text">
					<text>点图像切换服装\n٩(๑´3｀๑)۶</text>
				</view>
			</view>
			<view class="next" v-if="showNext" @click="gotoImage_3" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">{{ isAnimationDone ? "下一页" : "跳过动画" }}</view>
		</view>
		<view class="mask" v-if="showDialog"></view>
		<view class="dialog-wrapper" v-if="showDialog">
			<view class="dialog">
				<text>把所有表项都写完再走啊！Ծ‸Ծ</text>
			</view>
			<view class="bottom-wrapper">
				<view class="left-rev" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0" @click="closeDialog()">
					<text>同意 (o´ω`o)و</text>
				</view>
				<view class="right-rev" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0" @click="closeDialog()">
					<text>勉强同意 (╯▽╰)</text>
				</view>
			</view>
		</view>
	</view>
<!-- 	<view style="height: 100%; width:100%; position: fixed; z-index: 100;">
		<image src="../../static/image/mirror_back.png" style="width: 100%; height: 100%;"></image>
	</view> -->
</template>

<script>
import Cookies from 'js-cookie';
	export default {
		data() {
			return {
				showNext: 0,
				name: "",
				attribute: "",
				career: "",
				school: "",
				showDialog: false,
				isAnimationDone: false,
			}
		},
		methods: {
			goToMirror() {
				if (this.name === "" || this.attribute === "" || this.career === "" || this.school === "") {
					this.showDialog = true;
					return;
				}
				Cookies.set('name', this.name);
				Cookies.set('attribute', this.attribute);
				Cookies.set('career', this.career);
				Cookies.set('school', this.school);
				uni.navigateTo({
					url: "/pages/scene2_2/scene2_2"
				})
			},
			gotoImage_3() {
				if (!this.isAnimationDone) {
					let first = document.querySelector('.first-line');
					let second =document.querySelector('.second-line');
					let third = document.querySelector('.third-line');
					first.style.transition = 'none';
					second.style.transition = 'none';
					third.style.transition = 'none';
					first.style.opacity = 1;
					second.style.opacity = 1;
					third.style.opacity = 1;
					this.isAnimationDone = true;
					return;
				}
				uni.navigateTo({
					url: "/pages/SceneThree/SceneThree"
				})
			},
			closeDialog() {
				let dialogWrapper = document.querySelector('.dialog-wrapper');
				dialogWrapper.style.opacity = 0;
				let mask = document.querySelector('.mask');
				mask.style.opacity = 0;
				setTimeout(() => {
					this.showDialog = false;
				}, 800);
			}
		},
		mounted() {
			let ima = document.querySelector('.image');
			let totHei = ima.clientHeight;
			console.log(totHei);
			ima.style.width = totHei * 0.877 + 'px';
			let num = Cookies.get('nextTrue');
			let arrow = document.querySelector('.arrow-wrapper');
			let root = document.querySelector('.page');
			let totWid = root.clientWidth;
			let diff = totWid * 0.2 - totHei * 0.877;
			let rect = ima.getBoundingClientRect();
			arrow.style.right = (totWid - rect.right - diff/2) + 'px';
			this.showNext = Number(num);
			//console.log(Cookies.get('name'));
			let title = document.querySelectorAll('.title');
			let titleHeight = title[1].clientHeight;
			console.log(title.length);
			for (let i=0;i<title.length;i++) {
				console.log(title[i]);
				title[i].style.lineHeight = titleHeight + 'px';
			}
			if (Cookies.get('name')) {
				this.name = Cookies.get('name');
				this.attribute = Cookies.get('attribute');
				this.career = Cookies.get('career');
				this.school = Cookies.get('school');
			}
			let first = document.querySelector('.first-line');
			let second =document.querySelector('.second-line');
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
				this.isAnimationDone = true;
			}, 3800);
		},
		watch: {
			showDialog: {
				handler(newval) {
					if (newval) {
						/*垂直居中文字*/
						this.$nextTick(() => {
							let dialogWrapper = document.querySelector('.dialog-wrapper');
							let diaHei = dialogWrapper.clientHeight;
							let dialogTop = document.querySelector('.dialog');
							let dialogBotL = document.querySelector('.left-rev');
							let dialogBotR = document.querySelector('.right-rev'); 
							dialogTop.style.lineHeight = diaHei * 0.65 + 'px';
							dialogBotL.style.lineHeight = diaHei * 0.35 + 'px';
							dialogBotR.style.lineHeight = diaHei * 0.35 + 'px';
							dialogWrapper.style.opacity = 1;
							let mask = document.querySelector('.mask');
							mask.style.opacity = 1;
						})
					}
				}
			}
		},
		onShow() {
			console.log('show');
			if (typeof(Cookies.get('isBoy')) != undefined)  {
				let isBoy = Number(Cookies.get('isBoy'));
				let isZeroHead = Number(Cookies.get('isZeroHead'));
				console.log(isZeroHead);
				if (isBoy) {
					this.$nextTick(() => {
						let image = document.querySelector('.image');
						image.style.backgroundImage = 'url("../../static/face/' + (isZeroHead ? 'f1.png")' :'f7.png")');
					})
				} else {
					this.$nextTick(() => {
						let image = document.querySelector('.image');
						image.style.backgroundImage = 'url("../../static/face/' + (isZeroHead ? 'f3.png")' :'f5.png")');
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.page {
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(0deg, rgba(154, 182, 198, 0.3), rgba(154, 182, 198, 0.3)), url("../../static/image/image_1.jpg");
		background-size: 100% 100%;
	}
	.text {
		width: 85%;
		height: 270rpx;
		top: 6%;
		position: relative;
		background: #87725A;
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgb(75, 72, 70);
		text-align: center;
		color: #fdf5d9;
		font-size: 30rpx;
		line-height: 49rpx;
		.first-line {
			margin-top: 10rpx;
		}
		.third-line {
			padding-bottom: 30rpx;
		}
		.first-line, .second-line, .third-line {
			opacity: 0;
			transition: 1.7s all;
		}
	}
	.content {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		position: relative;
		top: 6.5%;
		background: url("../../static/image/volume.png");
		background-size: 100% 100%;
		.arrow-wrapper {
			position: absolute;
			width: 20%;
			height: 25%;
			right: 10%;
			bottom: -17%;
			//background-color: black;
			display: flex;
			flex-direction: column;
			align-items: center;
			.arrow {
				display: flex;
				flex-direction: column;
				.arrow-top, .arrow-bottom {
					width: 50rpx;
					height: 50rpx;
					border-top: 10rpx solid #dfcb99;
					border-right: 10rpx solid #dfcb99;
					background-color: transparent;
					transform: rotate(-45deg);
					animation: arrow-scale 1.5s linear infinite alternate-reverse;
				}
			}
			.info-text {
				width: 200%;
				color: white;
				text-align: center;
				font-size: 32rpx;
				color: #fdf5d9;
				line-height: 46rpx;
			}
		}
	}
	#name {
		display: flex;
		left: 16%;
		top: 25%;
		position: absolute;
		font-weight: 700;
		font-size: 36rpx;
		color: #514639;
		white-space: nowrap;
	}
	#attribute {
		display: flex;
		left: 55%;
		top: 25%;
		position: absolute;
		font-weight: bold;
		font-size: 36rpx;
		color: #514639;
		white-space: nowrap;
	}
	#career {
		display: flex;
		left: 16%;
		top: 45%;
		position: absolute;
		font-weight: bold;
		font-size: 36rpx;
		color: #514639;
		white-space: nowrap;
	}
	#school {
		display: flex;
		flex-direction: column;
		left: 16%;
		top: 65%;
		position: absolute;
		font-weight: 700;
		font-size: 36rpx;
		color: #514639;
		white-space: nowrap;
		.top-wrapper {
			display: flex;
			flex-direction: row;
		}
		.school-info {
			font-weight: 400;
			font-size: 26rpx;
		}
	}
	.textInput{
		display: inline-block;
		width: 70%;
		font-weight: 700;
		font-size: 36rpx;
		color: #514639;
		border: none;
		background-color: #dfcb99;
		outline: none;
		option {
			font-weight: 700;
		}
	}
	select:disabled {
		opacity: 1 !important;
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
		position: absolute;
		right: 6%;
		bottom: 9%;
		background: url("../../static/image/index_2.png");
		background-size: 100% 100%;
		font-style: italic;
		font-weight: 700;
		font-size: 36rpx;
		line-height: 70rpx;
		text-align: center;
		color: #FDF5D9;
	}
	.tail {
		width: 100%;
		height: 20%;
		position: relative;
		top: 20%;
		font-size: 50rpx;
		color: #fdf5d9;
		margin-left: 40rpx;
	}
	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 0.8s;
		opacity: 0;
	}
	.dialog-wrapper {
		width: 80%;
		height: 15%;
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 20rpx;
		background-color: #dfca98; 
		box-shadow: 1px 1px 10px rgb(75, 72, 70);
		display: flex;
		flex-direction: column;
		opacity: 0;
		transition: all 0.8s;
		.dialog {
			width: 100%;
			height: 65%;
			text-align: center;
			color: #514639;
			font-size: 36rpx;
			//background-color: black;
		}
		.bottom-wrapper {
			display: flex;
			width: 100%;
			height: 35%;
			.left-rev {
				width: 50%;
				height: 100%;
				background-color: #78533b;
				text-align: center;
				color: #fdf5d9;
				font-size: 36rpx;
			}
			.right-rev {
				width: 50%;
				height: 100%;
				background-color: #87725a;
				text-align: center;
				color: #fdf5d9;
				font-size: 36rpx;
			}
		}
	}
	@keyframes arrow-scale {
		0% {
			transform: rotate(-45deg) scale(0.8);
		}
		100% {
			transform: rotate(-45deg) scale(1.2);
		}
	}
</style>