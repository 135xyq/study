<template>
	<div class="user-container">
		<div class="user" v-if="$store.state.login.isLogin">
			<PersonInfo></PersonInfo>
		</div>
		<div class="hot-singer">
			<div class="head">
				热门歌手
				<router-link to="/discover/artist" class="more"
					>查看全部></router-link
				>
			</div>
			<ul class="list-container">
				<li
					class="list-item"
					v-for="singer in singers"
					:key="singer.id"
				>
					<router-link to="/discover/artist">
						<img :src="singer.picUrl + '?param=60y60'" alt="" />
					</router-link>
					<span class="name">{{ singer.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PersonInfo from "./PersonInfo";

export default {
	components: {
		PersonInfo,
	},
	props: {
		singers: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="less" scoped>
.user-container {
	position: relative;
	float: right;
	width: 250px;
	border-left: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
	box-sizing: border-box;
	.hot-singer {
		padding: 20px;
		.head {
			font-size: 12px;
			padding: 5px;
			border-bottom: 1px solid #ccc;
			.more {
				float: right;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.list-container {
			margin-top: 20px;
			.list-item {
				height: 60px;
				background: #cccccc45;
				margin: 15px;
				cursor: pointer;
				overflow: hidden;
				a {
					float: left;
				}
				.name {
					float: left;
                    margin-left: 10px;
                    margin-top: 10px;
					white-space: wrap;
					word-wrap: normal;
					font-size: 12px;
				}
			}
		}
	}
}
</style>