<template>
	<view class="wrapper">
		<!--第一部分-->
		<div class="one item">
			<div class="person_box"></div>
		</div>
		<!--第二部分-->
		<div class="two item">
			<button class="btn_box" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0" @click="changeSet()">咦！怎么回事</button>
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
      grid-template-rows: repeat(2, 70% 30%);
	  height: 100%;
	  background: url('~@/static/SceneNine/pettynancy_Scene_design_medieval_interior_fantasy-colored_trees_6631ca1d-8892-4f9b-b9b5-53458ab9f0fa 2.png') no-repeat center center;
      background-size: 100% 100%;
      width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      position: relative;
      z-index: 0;
	}
    .one {
      /*background: #f5ffff;*/
	  display: flex;
	  align-items: flex-end;
	  justify-content: center;
    }
    
    .two {
      /* background: #fffff5; */
	  display: flex;
	  align-items: center;
	  justify-content: center;
    }
	.item {
	  text-align: center;
	  font-size: 200%;
	}
	/*第一部分*/
	.person_box {
		width: 611px;
		height: 511px;
		background: url('~@/static/SceneNine/微信图片_20230603225708 1.png') no-repeat center center;
	}
	/*第二部分*/
	.btn_box {
		width: 303px;
		height: 113px;
		background: url('~@/static/SceneNine/怎么回事键.png') no-repeat center center;
		border-radius: 15px;
		color: #fff;
		// font-family: 'Inter';
		font-style: italic;
		font-weight: 700;
		font-size: 25px;
		line-height: 113px;
	}
	.hoverButton {
		opacity: 0.9;
		transform: scale(0.95, 0.95);
	}
</style>
