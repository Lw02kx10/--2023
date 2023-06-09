<template>
	<view class="page animate__animated animate__fadeIn">
		<view class="text">文案</view>
		<view class="content">
			<view class="detail">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goToMirror() {
				uni.navigateTo({
					url: "/pages/image_2/image_2"
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
		background-color: #C8B586;
	}

	.text {
		width: 75%;
		height: 15%;
		position: absolute;
		top: 15%;
		background-color: #87725A;
	}

	.content {
		width: 80%;
		height: 30%;
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 30%;
		background-color: #5B5853;
	}

	.detail {
		height: 50%;
		color: white;
		display: flex;
		flex-wrap: wrap;
	}

</style>