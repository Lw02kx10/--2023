<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="text">文案</view>
		<view class="content">
			<view class="detail">
				<view>姓名：</view>
				<view>属性：</view>
				<view>职业：</view>
				<view>毕业学院：</view>
			</view>
			<view class="image" @click="goToMirror"></view>
		</view>
		<view class="tail">独白</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToMirror(){
				uni.navigateTo({
					url:"/pages/image_2/image_2"
				})
			}
		}
	}
</script>

<style>
	.page{
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #C8B586;
	}
	.text{
		width: 75%;
		height: 15%;
		position: absolute;
		top: 15%;
		background-color: #87725A;
	}
	.content{
		width: 80%;
		height: 30%;
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 30%;
		background-color: #5B5853;
	}
	.detail{
		height: 50%;
		color: white;
		display: flex;
		flex-wrap: wrap;
	}
	.detail view{
		width: 50%;
		height: 50%;
		text-align: center;
	}
	.image{
		width: 25%;
		height: 40%;
		position: absolute;
		left: 10%;
		bottom: 10%;
		background-color: #FDF5D9;
	}
	.tail{
		width: 100%;
		height: 20%;
		background-color: #FDF5D9;
		position: absolute;
		bottom: 0;
	}
</style>
