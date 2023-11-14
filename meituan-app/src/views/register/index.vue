<template>
	<div class="register-container">
		<div class="form-container">
			<div class="title">欢迎注册</div>
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
				<el-form-item label="请再次输入密码" prop="rePassword">
					<el-input
						v-model="userForm.rePassword"
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
						>立即注册</el-button
					>
				</el-form-item>
				<router-link :to="{ name: 'login' }" class="login-link">已有账号?</router-link>
			</el-form>
		</div>
	</div>
</template>
<script>
import {register} from '@/api/user.js';
import "@/styles/global.less";
export default {
	data() {
		return {
			userForm: {
				userName: "",
				password: "",
				rePassword: "",
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
				rePassword: [
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
			register(this.userForm).then((resp) => {
                if(resp.status === 'fail') {
                    this.$message({
                        type:'error',
                        message:resp.msg
                    })
                }else if(resp.status === 'success'){
                    this.$message({
                        type:'success',
                        message:`${resp.msg} 两秒后自动跳转到登录页面！`
                    })
                    setTimeout(()=>{
                        this.$router.push({name:'login'});
                    },2000)
                }
            })
		},
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/self.less";

.register-container {
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
        .login-link{
            position:absolute;
            bottom:-5px;
            right: 0px;
            text-decoration: underline;
        }
	}
}
</style>
