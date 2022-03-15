<template>
	<div class="login-container">
		<div class="form-container">
			<p>
				<label
					>账号:
					<input type="text" v-model="loginId" />
				</label>
			</p>
			<p>
				<label
					>密码:
					<input type="password" v-model="loginPwd" />
				</label>
			</p>
			<button @click="onHandleLogin">登录</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginId: "",
			loginPwd: "",
		};
	},
	methods: {
		async onHandleLogin() {
            if(!this.loginId || !this.loginPwd){
                alert('请填写完整信息！');
                return;
            }
			const res = await this.$store.dispatch("userLogin/login", {
				loginId: this.loginId,
				loginPwd: this.loginPwd,
			});
            if(res) {
                setTimeout(()=>{
                    this.$router.push({name:'Home'})
                },1000)
            }else{
                alert('账号密码错误！')
            }
		},
	},
};
</script>

<style scoped >
</style>
