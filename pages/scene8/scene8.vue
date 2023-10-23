<template>
	<view class="root animate__animated animate__fadeIn">
		<image src="../../static/image/reel_column.png" mode="" style="width: 120%; height: 120%; position: absolute; bottom: -10%; right: -11%; zIndex: -1;" id="backImg"></image>
		<view class="info-bar">
			<view class="basic-info">
				<view class="info-text">
					<view class="first-line">
						<view class="name">
							<text>姓名:&nbsp;{{ name }}</text>
						</view>
						<view class="career">
							<text>职业:&nbsp;{{ career }}</text>
						</view>
					</view>
					<view class="second-line">
						<view class="attribute">
							<text>属性:&nbsp;{{ attribute }}</text>
						</view>
						<view class="school">
							<text>院校:&nbsp;{{ school }}</text>
						</view>
					</view>
				</view>
				<view class="head-box">
					<image :src="imgSrc" mode="" style="width: 100%; height: 100%; borderRadius: 40rpx;"></image>
				</view>
			</view>
			<view class="skill-info-one">
				<view class="skill-one-text">
					<text>战斗技巧</text>
				</view>
				<view class="fight-skill">
					<view class="first-line">
						<view class="fight-one">
							①&nbsp;{{ fightHTML[0] }}
						</view>
						<view class="fight-two">
							②&nbsp;{{ fightHTML[1] }}
						</view>
					</view>
					<view class="second-line">
						<view class="fight-three">
							③&nbsp;{{ fightHTML[2] }}
						</view>
						<view class="fight-four">
							④&nbsp;{{ fightHTML[3] }}
						</view>
					</view>
				</view>
			</view>
			<view class="skill-info-two">
				<view class="skill-two-text">
					<text>生活技巧</text>
				</view>
				<view class="life-skill">
					<view class="first-line">
						<view class="life-one">
							①&nbsp;{{ lifeHTML[0] }}
						</view>
						<view class="life-two">
							②&nbsp;{{ lifeHTML[1] }}
						</view>
					</view>
					<view class="second-line">
						<view class="life-three">
							③&nbsp;{{ lifeHTML[2] }}
						</view>
						<view class="life-four">
							④&nbsp;{{ lifeHTML[3] }}
						</view>
					</view>
				</view>
			</view>
			<view class="talent-info">
				<view class="talent-text">
					<text>天赋特质</text>
				</view>
				<view class="talent">
					<text>{{ talent }}</text>
				</view>
				<view class="talent-img">
					<!-- <image src="../../static/face/f1.png" mode="" style="width: 100%; height: 100%; borderRadius: 40rpx;"></image> -->
				</view>
			</view>
			<view class="enchant-info">
				<view class="enchant-text">
					<text>附魔属性</text>
				</view>
				<view class="enchant">
					<text>{{ enchant }}</text>
				</view>
				<view class="enchant-img">
					
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="save-png" @click="savePic()" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
				<text>保存至本地</text>
			</view>
			<view class="ready-btn" @click="leaveCity()" hover-class="hoverButton" hover-stay-time="100"
				hover-start-time="0">
				<text>我准备好了!</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { onMounted,ref,reactive, nextTick } from "vue";
import html2canvas from 'html2canvas';
import Cookies from "js-cookie";
const name = ref<string>("");
const attribute = ref<string>("");
const career = ref<string>("");
const school = ref<string>("");
const fightList = reactive<string[]>(["速通90+", "ddl战神", "众人皆摆我独学", "三项全能", "通宵夜游神", "熬夜上分人", "低空游走者", "大学习保持者", "模型召唤师", "cv型选手"]);
const fightHTML = reactive<string[]>([]);
const lifeList = reactive<string[]>(["单抽欧皇", "行为艺术大师", "不经意的通宵", "我不是食神", "特种旅行", "夜行动物", "实验室的洁净鼠鼠"]);
const lifeHTML = reactive<string[]>([]);
const talentList = reactive<string[]>(["豁达开朗\n(ง ˙ω˙)ว ", "儒雅随和\n(o^∀^o)", "佛系随性\n(。-ω-)zzz", "咕勇者\n٩(๑´0`๑)۶ ", "龙场悟道\n(๑•̀ㅂ•́)و✧", "清澈的愚蠢\n٩(๑´3｀๑)۶", "社恐但社牛\n(o・・o)/", "礼貌地发癫\nd(ŐдŐ๑)"]);
const talent = ref<string>("");
const enchantList = reactive<string[]>(["魔法的奇妙\n带你走向自由的旷野", "箭矢的方向\n指引你的理想信念", "利剑的力量\n斩断道路上的荆棘", "法杖的光芒\n照亮前方的未知"]);
const enchant = ref<string>("");
let talentImgString : string[] = ["54", "55", "56", "57"];
let enchantImgString : string[] = ["magic", "arrow", "sword", "torch"];
const imgSrc = ref<string>("../../static/face/f1.png");
const leaveCity = () => {
	uni.navigateTo({
		url: '/pages/SceneNine/SceneNine',
	})
}
const savePic = () => {
	let page = document.querySelector('.root');
	let ready = document.querySelector('.ready-btn');
	ready.style.transform = 'scale(0.95, 0.95)';
	ready.style.opacity = '0.9';
	let infoBox = document.querySelector('.info-bar');
	infoBox.style.opacity = '0.9';
	let backImg = document.querySelector('#backImg');
	backImg.style.opacity = '0.9';
	html2canvas(page, {
		width: page.clientWidth,
		height: page.clientHeight,
		scrollY: 0,
		scrollX: 0,
		scale: window.devicePixelRatio,
		backgroundColor: '#514639',
	}).then(canvas => {
		let base64 = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.href = base64;
		a.setAttribute('download', 'pigeons-download');
		a.click();
	});
	ready.style.transform = 'scale(1, 1)';
	ready.style.opacity = '1';
	infoBox.style.opacity = '1';
	backImg.style.opacity = '1';
}
onMounted(() => {
	name.value = Cookies.get("name");
	attribute.value = Cookies.get("attribute");
	career.value = Cookies.get("career");
	school.value = Cookies.get("school");
	let basicInfoDiv : HTMLElement = document.querySelector('.head-box');
	console.log(basicInfoDiv.clientHeight);
	let heiNum = basicInfoDiv.clientHeight;
	basicInfoDiv.style.width = heiNum + 'px';
	if (typeof(Cookies.get('isBoy')) != undefined)  {
		let isBoy = Number(Cookies.get('isBoy'));
		let isZeroHead = Number(Cookies.get('isZeroHead'));
		console.log(isZeroHead);
		if (isBoy) {
			imgSrc.value = "../../static/face/" + (isZeroHead ? "f1.png" : "f7.png");
			//image.style.backgroundImage = 'url("../../static/face/' + (isZeroHead ? 'f1.png")' :'f7.png")');
		} else {
			imgSrc.value = "../../static/face/" + (isZeroHead ? "f3.png" : "f5.png");
			//image.style.backgroundImage = 'url("../../static/face/' + (isZeroHead ? 'f3.png")' :'f5.png")');
		}
	}
	/*获取天赋特质*/
	let tmpIdx:number = Number(Cookies.get("talentNumber"));
	talent.value = talentList[tmpIdx];
	/*获取附魔属性*/
	let weaIdx:number = Number(Cookies.get("weaponIdx"));
	enchant.value = enchantList[weaIdx];
	let talentImg : HTMLElement = document.querySelector('.talent-img');
	let talIdx:number = Number(Cookies.get("talentImgIdx"));
	talentImg.style.backgroundImage = 'url("../../static/SceneFive/selected/Rectangle ' + talentImgString[talIdx] + '.png")';
	talentImg.style.width = heiNum + 'px';
	let enchantImg : HTMLElement = document.querySelector('.enchant-img');
	enchantImg.style.backgroundImage = 'url("../../static/image/' + enchantImgString[weaIdx] + '.png")';
	enchantImg.style.width = heiNum + 'px';
	/*获取战斗技巧*/
	let tmpFight:string[] = Cookies.get("fightString").split("");
	for(let i=0;i<4;i++) {
		fightHTML.push(fightList[Number(tmpFight[i])]);
	}
	/*获取生活技巧*/
	let tmpLife:string[] = Cookies.get("lifeString").split("");
	for(let i=0;i<4;i++) {
		lifeHTML.push(lifeList[Number(tmpLife[i])]);
	}
})
</script>

<style lang="less" scoped>
unipage-body, html, body {
	background-color: rgb(81, 70, 57);
	overflow: hidden;
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
			//justify-content: space-between;
			border-radius: 40rpx;
			.info-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 26rpx;
				font-weight: bold;
				margin-left: 20rpx;
				margin-right: 10rpx;
				line-height: 48rpx;
				flex-grow: 1;
				.first-line {
					display: flex;
					justify-content: space-around;
				}
				.second-line {
					display: flex;
					justify-content: space-around;
				}
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
			display: flex;
			.skill-one-text {
				align-self: center;
				color: rgb(213, 205, 183);
				font-size: 34rpx;
				font-weight: 700;
				margin-left: 30rpx;
			}
			.fight-skill {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				color: rgb(213, 205, 183);
				font-size: 25rpx;
				line-height: 48rpx;
				font-weight: bold;
				.first-line {
					display: flex;
					justify-content: space-around;
				}
				.second-line {
					display: flex;
					justify-content: space-around;
				}
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
				font-size: 34rpx;
				font-weight: 700;
				margin-left: 30rpx;
				white-space: nowrap !important;
			}
			.life-skill {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				color: rgb(213, 205, 183);
				font-size: 25rpx;
				line-height: 48rpx;
				font-weight: bold;
				.first-line {
					display: flex;
					justify-content: space-around;
					white-space: nowrap
				}
				.second-line {
					display: flex;
					justify-content: space-around;
					white-space: nowrap
				}
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
				font-size: 34rpx;
				font-weight: 700;
				margin-left: 30rpx;
			}
			.talent {
				flex-grow: 1;
				align-self: center;
				text-align: center;
				font-size: 30rpx;
				font-weight: bold;
				line-height: 48rpx;
				color: rgb(213, 205, 183);
			}
			.talent-img {
				width: 140rpx;
				height: 100%;
				background-image: url("../../static/SceneFive/selected/Rectangle 56.png");
				background-size: 100% 100%;
				position: relative;
				border-radius: 40rpx;
				//margin-right: 20rpx;
				//background-color: #fdf5d9;
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
				font-size: 34rpx;
				font-weight: 700;
				margin-left: 30rpx;
			}
			.enchant {
				flex-grow: 1;
				align-self: center;
				text-align: center;
				font-size: 30rpx;
				font-weight: bold;
				line-height: 48rpx;
				color: rgb(213, 205, 183);
			}
			.enchant-img {
				width: 140rpx;
				height: 100%;
				background-image: url("../../static/image/arrow.png");
				background-size: 100% 100%;
				position: relative;
				border-radius: 40rpx;
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
.hoverButton {
	opacity: 0.9;
	transform: scale(0.95, 0.95);
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
/* @media screen and (min-width: 1000px){
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
} */
</style>
