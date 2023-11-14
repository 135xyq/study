<template>
	<div class="login-container">
		<div class="form-container">
			<div class="title">欢迎登录</div>
			<el-form
				:model="userForm"
				:rules="rules"
				ref="userForm"
				label-width="150px"
				class="demo-ruleForm"
			>
				<el-form-item label="用户名" prop="userName">
					<el-input
						v-model="userForm.userName"
						clearable
						class="my-login-input"
					></el-input>
				</el-form-item>
				<el-form-item label="请输入密码" prop="password">
					<el-input
						v-model="userForm.password"
						show-password
						clearable
						class="my-login-input"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="onSubmit"
						style="width: 350px; border-radius: 20px"
						>立即登录</el-button
					>
				</el-form-item>
				<router-link :to="{ name: 'register' }" class="register-link">创建账号?</router-link>
			</el-form>
		</div>
	</div>
</template>
<script>
import {login} from '@/api/user.js';
import "@/styles/global.less";
export default {
	data() {
		return {
			userForm: {
				userName: "",
				password: "",
			},
			rules: {
				userName: [
					{
						required: true,
						message: "请输入用户名",
						trigger: "blur",
					},
					{
						min: 4,
						max: 16,
						message: "长度在 4 到 16 个字符",
						trigger: "blur",
					},
				],
				password: [
					{
						required: true,
						message: "请输入密码",
						trigger: "blur",
					},
					{
						min: 6,
						max: 16,
						message: "长度在 6 到 16 个字符",
						trigger: "blur",
					},
				],
			},
		};
	},
	methods: {
		onSubmit() {
			login(this.userForm).then((resp) => {
                if(resp.status === 'fail') {
                    this.$message({
                        type:'error',
                        message:resp.msg
                    })
                }else if(resp.status === 'success'){
					localStorage.setItem('$mei_tuan_app_user_name',resp.data); //存储到本地
					this.$store.dispatch('setUserName',resp.data); // 提交到仓库
					// console.log(resp.data)
                    this.$message({
                        type:'success',
                        message:`${resp.msg} 两秒后自动跳转到首页！`
                    })
                    setTimeout(()=>{
                        this.$router.push({name:'home'});
                    },2000)
                }
            })
		},
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/self.less";

.login-container {
	.self-full();
	background-image: url("~@/assets/bg.jpg");
	background-size: cover;
	.form-container {
		.self-center();
		width: 500px;

		.title {
			color: #fff;
			font-size: 30px;
			text-align: center;
			margin-bottom: 40px;
		}
        .register-link{
            position:absolute;
            bottom:-5px;
            right: 0px;
            text-decoration: underline;
        }
	}
}
</style>
