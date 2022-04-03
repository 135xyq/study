<template>
	<view class="content">
		<view class="add">
			<text>用户名</text>
			<input type="text" v-model="userName" />
			<text>年龄</text>
			<input type="text" v-model="age" />
			<button type="default" @click="_addUser">新增一个用户</button>
		</view>
		<view class="get">
			<button type="default" @click="getData">获取数据</button>
		</view>
		<view class="show">
			<view class="list" v-for="item in data" :key="item.id">
				<text>{{item.userName}}</text>
				<button type="default" @click="_delete(item._id)">删除</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			this._initData();
		},
		data() {
			return {
				title: 'Hello',
				userName:'',
				age:'',
				data:null,
			}
		},
		methods: {
			getData(){
				uniCloud.callFunction({
					name:'db_select',
					success(res) {
						console.log(res)
					}
				})
			},
			async _addUser(){
				const res = await uniCloud.callFunction({
					name:'db_add',
					data:{
						userName:this.userName,
						age:this.age
					}
				});
				console.log(res)
				
			},
			async _initData(){
				console.log(1)
				const res = await uniCloud.callFunction({
					name:'db_select'
				})
				this.data = res.result.msg.data;
				
			},
			async _delete(id){
				const res = await uniCloud.callFunction({
					name:"db_delete",
					data:{
						id:id,
					}
				});
				console.log(res)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
