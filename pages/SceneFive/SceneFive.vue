<template>
	<view class="wrapper animate__animated animate__fadeIn">
		<div class="text-box">
			<div class="first-line">
				<text>亲爱的小巫师，你终于来到了这里(๑•̀ㅂ•́)و✧</text>
			</div>
			<div class="second-line">
				<text>请从神秘的水晶球里捕捉中意的小精灵</text>
			</div>
			<div class="third-line">
				<text>作为自己的专属天赋标志叭~</text>
			</div>
		</div>
		<!-- 第一部分 -->
		<div class="one item">
			<div class="person_box"></div>
		</div>
		<!-- 第二部分 -->
		<div class="two item">
			<div class="buttom_wrapper">
				<div class="character_box no_one" @click="next(0)"></div>
				<div class="character_box no_two" @click="next(1)"></div>
				<div class="character_box no_three" @click="next(2)"></div>
				<div class="character_box no_four" @click="next(3)"></div>
			</div>
		</div>
	</view>
</template>

<script>
import Cookies from 'js-cookie';
	export default {
		data() {
			return {
				isAnimationDone: false,
			}
		},
		methods: {
			next (idx) {
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
				Cookies.set('talentImgIdx', idx);
				uni.navigateTo({
					url:"/pages/scene6/scene6"
				})
			}
		},
		mounted() {
			let person = document.querySelector('.person_box');
			let totWid = person.clientWidth;
			person.style.height = 1.24 * totWid + 'px';
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
	  display: grid;
	  grid-template-columns: 100%;
	  grid-template-rows: repeat(2, 67% 33%);
	  height: 100%;
	  background: url('~@/static/SceneFive/pettynancy_Scene_design_medieval_interior_fantasy-colored_trees_e9236e29-93af-4a00-87af-a36bb36edeca 1.png') no-repeat center center;
	  background-size: 100% 100%;
	  width: 100%;
	  min-height: 100%;
	  background-repeat: no-repeat;
	  position: relative;
	  z-index: 0;
	}
	.text-box {
		width: 85%;
		top: 6%;
		position: absolute;
		background: #87725A;
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgb(75, 72, 70);
		text-align: center;
		color: #fdf5d9;
		font-size: 30rpx;
		line-height: 49rpx;
		left: 50%;
		transform: translate(-50%, 0);
		.first-line {
			margin-top: 15rpx;
		}
		.third-line {
			margin-bottom: 15rpx;
		}
		.first-line, .second-line, .third-line {
			opacity: 0;
			transition: all 1.7s;
		}
	}
	.one {
	  /* background: #ebffff; */
	  position: relative;
	  display: flex;
	  align-items: flex-end;
	}
	
	.two {
	  /* background: #fff5ff; */
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	
	.item {
	  text-align: center;
	  font-size: 200%;
	}
	/* 第一部分 */
	.person_box {
		position: relative;
		width: 420rpx;
		height: 616rpx;
		background: url('/static/SceneFive/413403192098316606 1.png') no-repeat center center;
		background-size: 100% 100%;
		left: 50%;
		transform: translate(-50%, 0);
		// top: calc((100% - 470px) / 2);
	}
/* 	.change_btn {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		buttom: 0;
		opacity: 0.1;
		// font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		line-height:150px;
	} */

	/* 第二部分 */
	.buttom_wrapper {
		width: 400rpx;
		height: 400rpx;
		display: grid;
		grid-gap: 60rpx;
		grid-template-rows: repeat(2, 170rpx);
		grid-template-columns: repeat(2, 170rpx);
	}
	// .character_box {
		
	// }
	.no_one{
		background: url("../../static/SceneFive/selected/Rectangle 54.png");
		background-size: 100% 100%;
	}
	.no_two {
		background: url("../../static/SceneFive/selected/Rectangle 55.png");
		background-size: 100% 100%;
	}
	.no_three {
		background: url("../../static/SceneFive/selected/Rectangle 56.png");
		background-size: 100% 100%;
	}
	.no_four {
		background: url("../../static/SceneFive/selected/Rectangle 57.png");
		background-size: 100% 100%;
	}
	@media screen and (min-width: 600px) {
		.person_box {
			width: 294rpx !important;
			height: 411.2rpx !important;
		}
	}
</style>
