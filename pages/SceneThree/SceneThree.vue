<template>
	<view class="wrapper animate__animated animate__fadeIn">
		<!--第一部分-->
		<div class="one item">
			<div class="text_box">
				<div class="first-line">
					<text>请在以下随机选择4个战斗技巧吧！</text>
				</div>
				<div class="second-line">
					<text>我们将在最后为您揭晓它们的具体内容</text>
				</div>
				<div class="third-line">
					<text>选择自己喜欢的小巫师图片 ٩(๑´3｀๑)۶</text>
				</div>
			</div>
		</div>
		<!--第二部分-->
		<div class="two item">
			<!--技能框-->
			<div class="skill_box">
				<div class="skill_wrapper">
					<div class="skill_item" :class="getPic0, anim[0]" @click="del(0)"></div>
					<div class="skill_item" :class="getPic1, anim[1]" @click="del(1)"></div>
					<div class="skill_item" :class="getPic2, anim[2]" @click="del(2)"></div>
					<div class="skill_item" :class="getPic3, anim[3]" @click="del(3)"></div>
				</div>
			</div>
		</div>
		<!--第三部分-->
		<div class="three item">
			<div class="buttom_wrapper">
				<button class="page_btn" @click="NextPage()" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">{{ isAnimationDone ? "下一页" : "跳过动画" }}</button>
				<div class="select_box">
					<div class="select_item" :class="getP0, ani[0]" @click="select(0)" @longpress= "showText(0)"></div>
					<div class="select_item" :class="getP1, ani[1]" @click="select(1)" @longpress= "showText(1)"></div>
					<div class="select_item" :class="getP2, ani[2]" @click="select(2)" @longpress= "showText(2)"></div>
				</div>
				<button class="change_btn" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0" @click="changeSet()">换一组</button>
			</div>
		</div>
		<view class="mask" v-if="showDialog"></view>
		<view class="dialog-wrapper" v-if="showDialog">
			<view class="dialog">
				<text>选四个技巧再走啊！Ծ‸Ծ</text>
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
</template>

<script>
	export default {
		data() {
			return {
				curStatus: 1,
				control1: [
					[1,0,0,0,0],
				    [1,0,0,0,0],
					[1,0,0,0,0],
					[1,0,0,0,0]],
				control2: [
					[1,0,0,0],
					[0,1,0,0],
				    [0,0,1,0]],
				numbers:[0,1,2,3],
				curStatus: 0,
				text: ['1','2','3','4'],
				detail: '待放文案',
				ani: ['','',''],
				anim: ['','','',''],
				showDialog: false,
				isAnimationDone: false,
				//canBeSelect: [1,1,1,1],
			}
		},
		computed: {
			getPic0 () {
				return {
					defaultColor: this.control1[0][0],
					no_one: this.control1[0][1],
					no_two: this.control1[0][2],
					no_three: this.control1[0][3],
					no_four: this.control1[0][4]
				}
			},
			getPic1 () {
				return {
					defaultColor: this.control1[1][0],
					no_one: this.control1[1][1],
					no_two: this.control1[1][2],
					no_three: this.control1[1][3],
					no_four: this.control1[1][4]
				}
			},
			getPic2 () {
				return {
					defaultColor: this.control1[2][0],
					no_one: this.control1[2][1],
					no_two: this.control1[2][2],
					no_three: this.control1[2][3],
					no_four: this.control1[2][4]
				}
			},
			getPic3 () {
				return {
					defaultColor: this.control1[3][0],
					no_one: this.control1[3][1],
					no_two: this.control1[3][2],
					no_three: this.control1[3][3],
					no_four: this.control1[3][4]
				}
			},
			getP0 () {
				return {
					num_1: this.control2[0][0],
					num_2: this.control2[0][1],
					num_3: this.control2[0][2],
					num_4: this.control2[0][3]
				}
			},
			getP1 () {
				return {
					num_1: this.control2[1][0],
					num_2: this.control2[1][1],
					num_3: this.control2[1][2],
					num_4: this.control2[1][3]
				}
			},
			getP2 () {
				return {
					num_1: this.control2[2][0],
					num_2: this.control2[2][1],
					num_3: this.control2[2][2],
					num_4: this.control2[2][3]
				}
			},
		},
		methods: {
			NextPage () {
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
				if (this.curStatus != 4) { //为4的时候说明选满了
					this.showDialog = true;
					return;
				}
				uni.navigateTo({
					url: "/pages/SceneThree_2/SceneThree_2"
				})
			},
			//换一组
			changeSet () {
				//随机生成3个数
				const randomNumbers = [];
				while (randomNumbers.length < 3) {
				    const randomIndex = Math.floor(Math.random() * this.numbers.length);
				    const randomNumber = this.numbers[randomIndex];
				    // 避免生成重复的数字
				    if (!randomNumbers.includes(randomNumber)) {
				      randomNumbers.push(randomNumber);
				    }
				}
				//将这三个图片位置置1
				for(let i = 0; i < 3; i++) {
					for(let j = 0; j < 4; j++) {
						this.control2[i][j] = 0
					}
					this.control2[i][randomNumbers[i]] = 1 
				}       
			},
			//判断是哪一个图片
			judge (arr) {
				let ans = 0
				for(let i = 0; i < arr.length; i++) {
					if(arr[i]) ans = i
				}
				return ans
			},
			//选择图片
			select(idx) {
				if(this.curStatus < 4) {
					let ID = this.judge(this.control2[idx]) //类似独热码，选出是1的那个索引
					ID++ //加一表示第几个被选，从1开始
					this.control1[this.curStatus][0] = 0 //索引0处表示是否该位置空闲
					this.control1[this.curStatus][ID] = 1
					this.curStatus++
					//点击动画
					this.ani[idx] = 'animate__animated animate__pulse';
					      setTimeout(() => {
					        this.ani[idx] = ''
					      }, 1000); // 1秒后移除动画类名
				}
			},
			//取消选择
			del (idx) {
				if(this.curStatus > 0) {
					let ID = this.judge(this.control1[idx])
					this.control1[idx][ID] = 0
					this.control1[idx][0] = 1
					if (idx != this.curStatus - 1) {
						let tmp = idx;
						while (tmp != this.curStatus - 1) {
							tmp++;
							let ID = this.judge(this.control1[tmp]);
							this.control1[tmp][ID] = 0;
							this.control1[tmp][0] = 1;
							this.control1[idx][ID] = 1;
							this.control1[idx][0] = 0;
							idx++;
						}
					}
					this.curStatus--
					//点击动画
					this.anim[idx] = 'animate__animated animate__headShake';
					      setTimeout(() => {
					        this.anim[idx] = ''
					      }, 1000); // 1秒后移除动画类名
				}
			},
			//显示文案
			showText (idx) {
				let ID = this.judge(this.control2[idx])
				this.detail = this.text[ID]
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
		}
	}
</script>

<style lang="scss" scoped>
	.unipage-body, html, body {
		background-color: #c8b586;
	}
	/*第一层*/
    .wrapper {
		overflow: hidden;
		position: static;
		display: grid;
		grid-template-columns: 100%;
		/*grid-gap: 20px;*/
		grid-template-rows: repeat(3, 26% 37% 37%);
		background: url('~@/static/SceneThree/IMG_4224 2.png') no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		min-height: 100%;
		background-repeat: no-repeat;
		position: relative;
		z-index: 0;
	}
	.one {
	  /*background: #e9ffff;*/
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.two { 
	  /*background: #ffffcd;*/
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.three {
	  /*background: #ebfff0;*/
	  display: flex;
	  align-items: flex-start;
	  justify-content: center;
	}
	.item {
	  text-align: center;
	  font-size: 200%;
	}
	/*第一部分*/
	.text_box {
		width: 80%;
		height: 200rpx;
		top: 6%;
		position: relative;
		background: #87725A;
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgb(75, 72, 70);
		line-height: 200rpx;
		text-align: center;
		color: #fdf5d9;
		font-size: 31rpx;
		line-height: 49rpx;
		.first-line {
			margin-top: 20rpx;
		}
		.first-line, .second-line, .third-line {
			opacity: 0;
			transition: 1.7s all;
		}
	}
	/*第二部分*/
	.skill_box {
		width: 95%;
		height: 118%;
		display: flex;
		align-items: center;
		justify-content: center;
		/* 背景部分 */
		background: url('~@/static/SceneThree/IMG_3818 1.png') no-repeat center center;
		background-size: 100% 100%;
	}
	.skill_wrapper {
		display: grid;
		grid-gap: 20rpx;
		grid-template-columns:repeat(2, 252rpx);
		grid-template-rows: repeat(2,174rpx);
	}
	.skill_item {
		background: #fff;
		border: 3px solid #91682E;
		border-radius: 200px;
		background-size: cover;
		min-height: 100%;
		position: relative;
		left: 40rpx;
	}
	.defaultColor {
		background: #fff;
	}
	.no_one {
		background: url('/static/scene3_fight/Rectangle 8.png') no-repeat center center;
		//background: $fight1 no-repeat center center;
		background-size: cover;
	}
	.no_two {
		background: url('/static/scene3_fight/Rectangle 9.png') no-repeat center center;
		//background: $fight2 no-repeat center center;
		background-size: cover;
	}
	.no_three {
		background: url('/static/scene3_fight/Rectangle 10.png') no-repeat center center;
		//background: $fight3 no-repeat center center;
		background-size: cover;
	}
	.no_four {
		background: url('/static/scene3_fight/Rectangle 11.png') no-repeat center center;
		//background: $fight4 no-repeat center center;
		background-size: cover;
	}
	/*第三部分*/
	.page_btn {
		width: 216rpx;
		height: 92rpx;
		background: url('~@/static/image/index_2.png') no-repeat center center;
		background-size: 80% 80%;
		color: #FFFFFF;
		line-height: 92rpx;
		// font-family: 'Inter';
		font-style: italic;
		font-weight: 900;
		font-size: 40rpx;
		margin-top: 20rpx;
		grid-area: page_btn;
	}
	.select_box{
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		grid-area: select_box;
		background-size: cover;
	}
	.num_1 {
		background: $fight5 no-repeat center center;
		background-size: 100% 100%;
	}
	.num_2 {
		background: $fight6 no-repeat center center;
		background-size: 100% 100%;
	}
	.num_3 {
		background: $fight7 no-repeat center center;
		background-size: 100% 100%;
	}
	.num_4 {
		background: $fight8 no-repeat center center;
		background-size: 100% 100%;
	}
	.change_btn {
		width: 216rpx;
		height: 92rpx;
		background: url('~@/static/image/index_2.png') no-repeat center center;
		background-size: 80% 80%;
		color: #FFFFFF;
		line-height: 92rpx;
		/* font-family: 'Inter'; */
		font-style: italic;
		font-weight: 900;
		font-size: 40rpx;
		grid-area: change_btn;
	}
	.buttom_wrapper {
		width: 764rpx;
		height: 90%;
		display: grid;
		grid-gap: 5%;
		grid-template-columns: repeat(3, 30%);
		grid-template-areas:
		    ". .  page_btn"
			"select_box select_box select_box"
		    "select_box select_box select_box"
			"select_box select_box select_box"
			"select_box select_box select_box"
			"select_box select_box select_box"
			"change_btn . .";
	}
	.select_item {
		width: 200rpx;
		height: 200rpx;
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
	@media screen and (min-width: 600px) {
		.skill_box {
			margin-top: 40rpx !important;
		}
		.skill_wrapper {
			grid-template-columns: repeat(2, 240rpx) !important;
			grid-template-rows: repeat(2, 160rpx) !important;
		}
		.buttom_wrapper {
			grid-row-gap: 0% !important;
		}
	}
	@media screen and (min-width: 1000px) {
		.skill_wrapper {
			grid-template-columns: repeat(2, 225rpx) !important;
			grid-template-rows: repeat(2, 145rpx) !important;
		}
		.select_item {
			width: 160rpx !important;
			height: 160rpx !important;
		}
	}
</style>
