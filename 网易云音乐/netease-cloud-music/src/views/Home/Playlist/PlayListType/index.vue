<template>
	<div class="play-list-type-container">
		<div class="play-list-type-content">
			<h3 class="all-type" @click="onHandleChangeType('全部')">
				<router-link to="/discover/playlist" class="all-type-link"
					>全部风格</router-link
				>
			</h3>
			<div class="types">
				<dl
					class="type-list"
					v-for="(item, index) in categories"
					:key="item"
				>
					<dt class="type-title">{{ item }}</dt>
					<dd class="type-list-item">
						<router-link
							class="type-list-item-link"
							v-for="(type, index1) in data[index]"
							:key="index1"
							:to="'/discover/playlist?cat=' + type.name"
                            :class="{'selected':selectedType === type.name}"
							><span class="link-text" @click="onHandleChangeType(type.name)">{{
								type.name
							}}</span>
                            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span></router-link
						>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import { getPlayListType } from "@/api/playList";
export default {
	data() {
		return {
			data: [], //数据
			categories: {}, //分类
		};
	},
    props:{
        selectedType:String,//当前选中的种类
    },
	created() {
		this._initData();
	},
	methods: {
		async _initData() {
			const res = await getPlayListType();
			res.sub.forEach((item) => {
				if (!this.data[item.category]) {
					this.data[item.category] = new Array();
				}
				this.data[item.category].push(item);
			});
			this.categories = res.categories;
		},
        onHandleChangeType(data){
            this.$emit('onHandleChangeType',data);//改变分类
        }
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.play-list-type-container {
	.play-list-type-content {
		width: 700px;
		padding: 0 10px;
		background: #fff;
		border: 2px solid #e6e6e6;
		box-shadow: 1px 1px rgba(0, 0, 0, 0.321);
		border-radius: 10px;
		font-size: 12px;
		.all-type {
			margin-top: 20px;
			height: 37px;
			padding-left: 26px;
			border-bottom: 1px solid #e6e6e6;
			font-weight: normal;
			.all-type-link {
				width: 75px;
				height: 26px;
				background: #ebe8e8;
				padding: 4px 10px;
				border-radius: 4px;
			}
		}
		.types {
			border-top: 2px solid #e6e6e6;
			padding-bottom: 20px;
			.type-list {
				.self-clear();
			}
			.type-title {
				float: left;
				display: inline;
				width: 70px;
				margin: 0 -100px 0 26px;
				padding-top: 15px;

				font-weight: bold;
			}
			.type-list-item {
				margin-left: 96px;
				border-left: 1px solid #e6e6e6;
				padding: 16px 15px 0 15px;
				.self-clear();
			}
			.type-list-item-link {
				line-height: 24px;
				float: left;
				text-decoration: none;
                &.selected{
                    .link-text{
                        background-color: #ccc;
                        color: #fff;
                        padding: 2px 5px;
                    }
                }
				.link-text{
					&:hover{
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>