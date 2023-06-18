<template>
	<view class="wrapper">
		<!--第一部分-->
		<div class="one item">
			<div class="text_box"></div>
		</div>
		<!--第二部分-->
		<div class="two item">
			<!--技能框-->
			<div class="skill_box">
				<div class="skill_wrapper">
					<div class="skill_item no_one"></div>
					<div class="skill_item no_two"></div>
					<div class="skill_item no_three"></div>
					<div class="skill_item no_four"></div>
				</div>
			</div>
		</div>
		<!--第三部分-->
		<div class="three item">
			<div class="buttom_wrapper">
				<button class="page_btn">下一页</button>
				<div class="select_box">
					<div class="select_item num_1"></div>
					<div class="select_item num_2"></div>
					<div class="select_item num_3"></div>
				</div>
				<button class="change_btn">换一组</button>
			</div>
		</div>
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
	.no_one {
		/* background: url('/static/scene3_fight/Rectangle 8.png') no-repeat center center; */
		background: $fight1 no-repeat center center;
	}
	.no_two {
		// background: url('/static/scene3_fight/Rectangle 9.png') no-repeat center center;
		background: $fight2 no-repeat center center;
	}
	.no_three {
		// background: url('/static/scene3_fight/Rectangle 10.png') no-repeat center center;
		background: $fight3 no-repeat center center;
	}
	.no_four {
		// background: url('/static/scene3_fight/Rectangle 11.png') no-repeat center center;
		background: $fight4 no-repeat center center;
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
		background: $fight5 no-repeat center center;
	}
	.num_2 {
		background: $fight6 no-repeat center center;
	}
	.num_3 {
		background: $fight7 no-repeat center center;
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
</style>
