<template>
	<div class="search-input">
		<span class="search-icon">
			<Icon type="sousuo"></Icon>
		</span>
		<input
			type="text"
			v-model="inputData"
			class="input"
			placeholder="音乐/视频/电台/用户"
			@blur="onHandleBlur"
			@focus="onHandleFocus"
		/>
		<!-- 搜索结果 -->
		<div class="hidden-form" v-show="isShow">
			<p class="hidden-title">
				<router-link to="/" class="hidden-title-link"
					>搜"{{ inputData }}"相关用户&gt;</router-link
				>
			</p>
			<div class="hidden-list">
				<template v-for="(value, index) in searchData.order">
					<div class="hidden-list-item" :key="index">
						<h3 class="hidden-list-item-title">
							<Icon :type="arrayMap[value].icon"></Icon>
							<span class="hidden-list-item-title-txt">{{
								arrayMap[value].name
							}}</span>
						</h3>
						<ul class="hidden-list-item-container" :class="{'gray-bg':(index % 2) !== 0}">
							<li
								v-for="item in searchData[value]"
								:key="item.id"
							>
								<router-link to="/" class="detail-link">{{
									item.name
								}}</router-link>
							</li>
						</ul>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { searchSuggest } from "@/api/search";
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	data() {
		return {
			inputData: "", //输入框数据
			isShow:false,//是否展示
			arrayMap: {
				albums: {
					name: "专辑",
					icon: "zhuanji",
				},
				songs: {
					name: "单曲",
					icon: "danqu",
				},
				artists: {
					name: "歌手",
					icon: "geshou",
				},
				playlists: {
					name: "歌单",
					icon: "gedan",
				},
			},
			searchData: {
			},
		};
	},
	methods:{
		onHandleBlur(){
			this.isShow = false;
		},
		onHandleFocus(){
			if(this.inputData){
				this.isShow = true;
			}else{
				this.isShow = false;
			}
		}
	},
	watch:{
		inputData:async function(val,oldVal) {
			this.isShow = true;
			if(val ===''){
				return;
			}
			const result = await searchSuggest(val);
			this.searchData = result;
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.search-input {
	position: relative;
	background-color: #fff;
	border-radius: 32px;
	width: 158px;
	height: 32px;
	.input {
		width: 75%;
		margin: 0;
		padding: 0;
		background: transparent;
		line-height: 32px;
		padding-left: 30px;
		border: none;
		font-size: 12px;
	}
	.search-icon {
		position: absolute;
		top: 6px;
		left: 10px;
		color: #333;
	}
	.hidden-form {
		.self-clear();
		position: absolute;
		color: #333;
		font-size: 12px;
		z-index: 120;
		left: 0;
		box-sizing: border-box;
		border: 1px solid #bebebe;
		border-radius: 4px;
		background: #fff;
		box-shadow: 0 4px 7px #555;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
		top: 59px;
		width: 240px;
		.hidden-title {
			height: 42px;
			height: 17px;
			padding: 11px 10px;
			border-bottom: 1px solid #e2e2e2;
			cursor: pointer;
			.hidden-title-link {
				&:hover {
					background: #bebebe;
				}
			}
		}
		.hidden-list {
			.hidden-list-item-title {
				float: left;
				width: 52px;
				margin-right: -100px;
				padding: 10px 0 0 10px;
				padding-top: 9px;
				border-right: 1px solid #e2e2e2;
				line-height: 19px;
				font-weight: normal;
				font-size: 12px;
				.hidden-list-item-title-txt {
					float: left;
					margin-left: 3px;
				}
				.icon-container {
					float: left;
				}
			}
			.hidden-list-item-container {
				.self-clear();
				margin-left: 62px;
				margin-top: -1px;
				padding: 6px 0 5px;
				border-top: 1px solid #e2e2e2;
				border-left: 1px solid #e2e2e2;
				li {
					width: 100%;
					float: left;
					.detail-link {
						display: block;
						width: 100%;
						text-indent: 12px;
						line-height: 24px;
					}
					&:hover {
						background: rgba(43, 41, 41, 0.116);
					}
				}
				&.gray-bg{
					background-color: #f9f8f8;
				}
			}
		}
	}
}
</style>