<template>
	<view class="wrapper">
		<!-- 第一部分 -->
		<div class="one item">
			<div class="person_box"></div>
			<button class="change_btn">换一组</button>
		</div>
		<!-- 第二部分 -->
		<div class="two item">
			<div class="buttom_wrapper">
				<div class="character_box no_one"></div>
				<div class="character_box no_two"></div>
				<div class="character_box no_three"></div>
				<div class="character_box no_four"></div>
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
		position: absolute;
		width: 359px;
		height: 445px;
		background: url('/static/SceneFive/413403192098316606 1.png') no-repeat center center;
		left: calc((100% - 359px) / 2);
		// top: calc((100% - 470px) / 2);
	}
	.change_btn {
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
	}

	/* 第二部分 */
	.buttom_wrapper {
		width: 244px;
		height: 244px;
		display: grid;
		grid-gap: 30px;
		grid-template-rows: repeat(2, 107px);
		grid-template-columns: repeat(2, 107px);
	}
	// .character_box {
		
	// }
	.no_one{
		background: $character1 no-repeat center center;
	}
	.no_two {
		background: $character2 no-repeat center center;
	}
	.no_three {
		background: $character3 no-repeat center center;
	}
	.no_four {
		background: $character4 no-repeat center center;
	}
</style>
