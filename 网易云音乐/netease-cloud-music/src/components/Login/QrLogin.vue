<template>
	<div class="qr-login-container">
		<div class="content">
			<div class="left-img">
				<img src="../../assets/qrlogin.png" alt="" />
			</div>
			<div class="qr-content">
				<h3>扫码登录</h3>
				<img class="qr" :src="qrUrl" alt="" />
				<p class="change-other">
					使用&nbsp;<router-link to="/download"
						>网易云音乐APP</router-link
					>&nbsp;登录
				</p>
			</div>
		</div>
		<div class="change" @click="onHandleChange">选择其他登录模式</div>
	</div>
</template>

<script>
export default {
    props:{
        qrUrl:{
            type:String,
            required:true
        }
    },
    methods:{
        onHandleChange(){
            this.$emit('changeMethods');
        }
    }
};
</script>

<style scoped lang="less">
.qr-login-container {
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 528px;
	height: 326px;
	background-color: #fff;
	.content {
		display: flex;
		justify-content: center;
		// align-items: center;
		height: 220px;
		.left-img {
			img {
				width: 125px;
				height: 220px;
			}
		}
		.qr-content {
			margin-left: 25px;
			width: 200px;
			text-align: center;
			h3 {
				font-size: 18px;
				font-weight: 500;
			}
			.qr {
				position: relative;
				width: 130px;
				height: 130px;
				padding: 4px;
				margin: 13px auto;
			}
			.change-other {
				font-size: 12px;
				top: 181px;
				width: 200px;
				right: -15px;
				left: auto;
				line-height: 17px;
				color: rgba(0, 0, 0, 0.4);
				a {
					color: #0c73c2;
				}
			}
		}
	}
	.change {
		width: 118px;
		height: 28px;
		margin: 20px auto 0;
		padding-right: 0;
		font-size: 12px;
		border: 1px solid #979797;
		border-radius: 15px;
		line-height: 28px;
		text-align: center;
		color: rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
}
</style>