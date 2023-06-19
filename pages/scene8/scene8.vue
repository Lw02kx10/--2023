<template>
	<view class="root">
		<image src="../../static/image/reel_column.png" mode="" style="width: 120%; height: 120%; position: absolute; bottom: -10%; right: -11%; zIndex: -1;"></image>
		<view class="info-bar">
			<view class="basic-info">
				<view class="info-text">
					<text>基本信息</text>
				</view>
				<view class="head-box">
					<image src="../../static/face/f1.png" mode="" style="width: 100%; height: 100%; borderRadius: 40rpx;"></image>
				</view>
			</view>
			<view class="skill-info-one">
				<view class="skill-one-text">
					<text>技能信息1</text>
				</view>
			</view>
			<view class="skill-info-two">
				<view class="skill-two-text">
					<text>技能信息2</text>
				</view>
			</view>
			<view class="talent-info">
				<view class="talent-text">
					<text>天赋信息</text>
				</view>
			</view>
			<view class="enchant-info">
				<view class="enchant-text">
					<text>附魔信息</text>
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="save-png" @click="savePic()">
				<text>保存至本地</text>
			</view>
			<view class="ready-btn" @click="leaveCity()">
				<text>我准备好了!</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import html2canvas from 'html2canvas';
const leaveCity = () => {

}
const savePic = () => {
	let page= document.querySelector('.root');
	html2canvas(page, {
		width: page.clientWidth,
		height: page.clientHeight,
		scrollY: 0,
		scrollX: 0,
		useCORS: true
	}).then(canvas => {
		let base64 = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.href = base64;
		a.setAttribute('download', 'pigeons-download');
		a.click();
	});
}
onMounted(() => {
	let basicInfoDiv : HTMLElement = document.querySelector('.head-box');
	console.log(basicInfoDiv.clientHeight);
	let heiNum = basicInfoDiv.clientHeight;
	basicInfoDiv.style.width = heiNum + 'px';
})
</script>

<style lang="less" scoped>
unipage-body, html, body {
	background-color: rgb(81, 70, 57);
}
.root {
	height: 100%;
	display: flex;
	flex-direction: column;
	.info-bar {
		margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		height: 80%;
		justify-content: space-between;
		.basic-info {
			background-color: #5b5853;
			height: 15%;
			width: 600rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			border-radius: 40rpx;
			.info-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 38rpx;
				font-weight: 700;
				margin-left: 40rpx;
			}
			.head-box {
				width: 140rpx;
				height: 100%;
				position: relative;
				//margin-right: 20rpx;
				//background-color: #fdf5d9;
			}
		}
		.skill-info-one {
			display: flex;
			background-color: #5b5853;
			height: 15%;
			width: 600rpx;
			margin: 0 auto;
			border-radius: 40rpx;
			//margin-left: 40rpx;
			.skill-one-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 38rpx;
				font-weight: 700;
				margin-left: 40rpx;
			}
		}
		.skill-info-two {
			display: flex;
			background-color: #5b5853;
			height: 15%;
			width: 600rpx;
			margin: 0 auto;
			border-radius: 40rpx;
			.skill-two-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 38rpx;
				font-weight: 700;
				margin-left: 40rpx;
			}
		}
		.talent-info {
			display: flex;
			background-color: #5b5853;
			height: 15%;
			width: 600rpx;
			margin: 0 auto;
			border-radius: 40rpx;
			.talent-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 38rpx;
				font-weight: 700;
				margin-left: 40rpx;
			}
		}
		.enchant-info {
			display: flex;
			background-color: #5b5853;
			height: 15%;
			width: 600rpx;
			margin: 0 auto;
			border-radius: 40rpx;
			.enchant-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 38rpx;
				font-weight: 700;
				margin-left: 40rpx;
			}
		}
	}
	.bottom-bar {
		display: flex;
		width: 600rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		margin-bottom: 30rpx;
		justify-content: space-around;
		.save-png {
			height: 100rpx;
			width: 214rpx;
			background-color: #87725a;
			border-radius: 25rpx;
			align-self: center;
			margin-bottom: 40rpx;
			color: rgb(253, 245, 217);
			font-weight: bold;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			background-image: url("../../static/image/index_2.png");
			background-size: contain;
		}
		.ready-btn {
			height: 100rpx;
			width: 214rpx;
			background-color: #87725a;
			border-radius: 25rpx;
			align-self: center;
			margin-bottom: 40rpx;
			color: rgb(253, 245, 217);
			font-weight: bold;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			background-image: url("../../static/image/index_2.png");
			background-size: contain;
		}
	}
}
@media screen and (min-width: 700px){
	.info-bar {
		margin-top: 160rpx !important;
	}
	.basic-info {
		height: 17% !important;
	}
	.skill-info-one {
		height: 17% !important;
	}
	.skill-info-two {
		height: 17% !important;
	}
	.talent-info {
		height: 17% !important;
	}
	.enchant-info {
		height: 17% !important;
	}
}
@media screen and (min-width: 1000px){
	.info-bar {
		margin-top: 390rpx !important;
		height: 70% !important;
	}
	.basic-info {
		height: 15% !important;
		width: 1550rpx !important;
		border-radius: 80rpx !important;
		.info-text {
			font-size: 80rpx !important;
		}
	}
	.skill-info-one {
		height: 15% !important;
		width: 1550rpx !important;
		border-radius: 80rpx !important;
		.skill-one-text {
			font-size: 80rpx !important;
		}
	}
	.skill-info-two {
		height: 15% !important;
		width: 1550rpx !important;
		border-radius: 80rpx !important;
		.skill-two-text {
			font-size: 80rpx !important;
		}
	}
	.talent-info {
		height: 15% !important;
		width: 1550rpx !important;
		border-radius: 80rpx !important;
		.talent-text {
			font-size: 80rpx !important;
		}
	}
	.enchant-info {
		height: 15% !important;
		width: 1550rpx !important;
		border-radius: 80rpx !important;
		.enchant-text {
			font-size: 80rpx !important;
		}
	}
	.bottom-bar {
		width: 1550rpx !important;
		margin-top: 80rpx !important;
		.save-png {
			width: 513.6rpx !important;
			height: 240rpx !important;
			font-size: 80rpx !important;
			line-height: 240rpx !important;
		}
		.ready-btn {
			width: 513.6rpx !important;
			height: 240rpx !important;
			font-size: 80rpx !important;
			line-height: 240rpx !important;
		}
	}
}
</style>
