<template>
	<div class="top-list-card">
		<div class="img">
			<router-link :to="path" class="link">
				<img :src="imgUrl + '?param=80y80'" alt="" />
			</router-link>
		</div>
		<div class="title">
			<h3 class="title-text">
                <router-link :to="path">{{ title }}</router-link>
            </h3>
			<div class="icons">
				<div class="play">
					<Icon type="bofang"></Icon>
				</div>
				<div class="star">
					<Icon type="shoucang"></Icon>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.top-list-card {
	width: 200px;
	height: 80px;
	.self-clear();
	.img {
		height: 100%;
		float: left;
	}
	.link {
		display: block;
		height: 100%;
	}
	.title {
		margin: 6px 0 0 10px;
		float: left;
		.title-text {
			font-size: 14px;
			color: #333;
            &:hover{
                text-decoration: underline;
            }
		}
		.icons {
			font-size: 20px;
			font-weight: 900;
			color: #ccc;
		}
		.play,
		.star {
			width: 25px;
			height: 25px;
            margin-top: 10px;
            cursor: pointer;
		}
		.play {
			float: left;
			border: 2px solid #ccc;
			border-radius: 50%;
			line-height: 25px;
			text-align: center;
			font-size: 25px;
            margin-right: 10px;
		}
		.star {
			float: left;
			font-size: 25px;
		}
	}
}
</style>