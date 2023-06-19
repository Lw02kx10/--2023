<template>
	<view class="wrapper animate__animated animate__fadeIn">
		<!--第一部分-->
		<div class="one item">
			<div class="text_box">{{ detail }}</div>
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
				hover-start-time="0">下一页</button>
				<div class="select_box">
					<div class="select_item" :class="getP0, ani[0]" @click="select(0)" @longpress= "showText(0)"></div>
					<div class="select_item" :class="getP1, ani[1]" @click="select(1)" @longpress= "showText(1)"></div>
					<div class="select_item" :class="getP2, ani[2]" @click="select(2)" @longpress= "showText(2)"></div>
				</div>
				<button class="change_btn" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0" @click="changeSet()">换一组</button>
			</div>
		</div>
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
				detail: '',
				ani: ['','',''],
				anim: ['','','',''],
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
					uni.navigateTo({
						url: "/pages/SceneFive/SceneFive"
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
					let ID = this.judge(this.control2[idx])
					ID++
					this.control1[this.curStatus][0] = 0
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
				if(this.curStatus > 0 && idx == this.curStatus - 1) {
					let ID = this.judge(this.control1[idx])
					this.control1[idx][ID] = 0
					this.control1[idx][0] = 1
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
			}
		}
	}
</script>

<style lang="scss">
	/*第一层*/
    .wrapper {
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
		width: 317px;
		height: 132px;
		border-radius: 20px;
		background: #87725A;
	}
	/*第二部分*/
	.skill_box {
		width: 382px;
		height: 254px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* 背景部分 */
		background: url('~@/static/SceneThree/IMG_3818 1.png') no-repeat center center;
		background-size: cover;
		min-height: 100%;
	}
	.skill_wrapper {
		display: grid;
		grid-gap: 20px;
		grid-template-columns:repeat(2, 126px);
		grid-template-rows: repeat(2,87px);
	}
	.skill_item {
		background: #fff;
		border: 3px solid #91682E;
		border-radius: 200px;
		background-size: cover;
		min-height: 100%;
		position: relative;
	}
	.defaultColor {
		background: #fff;
	}
	.no_one {
		/* background: url('/static/scene3_fight/Rectangle 8.png') no-repeat center center; */
		background: $life1 no-repeat center center;
	}
	.no_two {
		// background: url('/static/scene3_fight/Rectangle 9.png') no-repeat center center;
		background: $life2 no-repeat center center;
	}
	.no_three {
		// background: url('/static/scene3_fight/Rectangle 10.png') no-repeat center center;
		background: $life3 no-repeat center center;
	}
	.no_four {
		// background: url('/static/scene3_fight/Rectangle 11.png') no-repeat center center;
		background: $life4 no-repeat center center;
	}
	/*第三部分*/
	.page_btn {
		width: 108px;
		height: 46px;
		background: url('~@/static/scene3_fight/下一页框.png') no-repeat center center;
		border-radius: 15px;
		color: #FFFFFF;
		line-height: 46px;
		// font-family: 'Inter';
		font-style: italic;
		font-weight: 900;
		font-size: 20px;
		grid-area: page_btn;
	}
	.select_box{
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		grid-area: select_box;
		background-size: cover;
		min-height: 100%;
	}
	.num_1 {
		background: $life5 no-repeat center center;
	}
	.num_2 {
		background: $life6 no-repeat center center;
	}
	.num_3 {
		background: $life7 no-repeat center center;
	}
	.num_4 {
		background: $life8 no-repeat center center;
	}
	.change_btn {
		width: 144px;
		height: 65px;
		background: url('~@/static/scene3_fight/Rectangle 59.png') no-repeat center center;
		border-radius: 25px;
		color: #FFFFFF;
		line-height: 65px;
		/* font-family: 'Inter'; */
		font-style: italic;
		font-weight: 900;
		font-size: 30px;
		grid-area: change_btn;
	}
	.buttom_wrapper {
		width: 382px;
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
		width: 100px;
		height: 100px;
	}
	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
</style>
