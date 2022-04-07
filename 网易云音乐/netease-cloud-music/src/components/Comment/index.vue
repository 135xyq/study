<template>
	<div class="comment-container">
		<div class="head">
			<router-link :to="'/user/home?id=' + id">
				<img :src="avatarUrl" alt="" />
			</router-link>
		</div>
		<div class="content">
			<div class="text-container">
				<span class="nick-name">
					<router-link
						:to="'/user/home?id=' + id"
						class="user-link"
						>{{ nickName }}</router-link
					>
				</span>
				<span class="text">: {{ content }}</span>
			</div>
			<div class="time">{{ formateDate(time) }}</div>
			<div class="like">
				<Icon type="dianzhan"></Icon>
				<span class="like-number">&nbsp;({{ like }})&nbsp; </span>
				<span class="return">&nbsp;|&nbsp;回复</span>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import { formateDate } from "@/utils/formateSongTime";
export default {
	// ["avatarUrl","nickName","content","time"]
	components: {
		Icon,
	},
	props: {
		avatarUrl: {
			type: String,
			required: true,
		},
		nickName: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		time: {
			type: Number,
			required: true,
		},
		like: {
			type: Number,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	methods: {
		formateDate,
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.comment-container {
	width: 640px;
	font-size: 12px;
	.head {
		float: left;
		width: 50px;
		height: 50px;
	}
	.content {
		position: relative;
		.self-clear();
		margin-left: 60px;
		.text-container {
			.nick-name {
				a {
					color: #0c73c2;
				}
				margin-right: 10px;
			}
		}
		.time {
			margin-top: 20px;
			float: left;
		}
		.like {
			.self-clear();
			position: absolute;
			bottom: -3px;
			right: 0px;
			.icon-container {
				font-size: 16px;
				float: left;
			}
			.like-number {
				float: left;
			}
			.return {
				float: left;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>