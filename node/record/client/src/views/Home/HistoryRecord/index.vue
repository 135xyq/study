<template>
	<div class="history-record-container">
		<div class="main" :style="{ height: mainLength + 'px' }"></div>
		<div class="content">
			<template v-for="(item, index) in items">
				<div
					class="item"
					:class="{
						left: index % 2 === 0,
						right: index % 2 === 1,
					}"
					:style="{ top: (index + 1) * 300 + 'px' }"
					:key="index"
					@click="onHandleShow(index)"
					slot="reference"
				>
        <div v-html="item.content" class="over-hidden"></div>
        <span class="publish-date">{{item.publishDate.slice(0,19)}} </span></div>
			</template>
			<el-dialog title="文章详情"  class="dialog-my" width='80%' :visible.sync="show">
				<div v-html="inner"></div>
			</el-dialog>
		</div>
		<img src="../../../assets/root.jpg" alt="" class="root" />
	</div>
</template>

<script>
import { marked } from "marked";
import { getArticles } from "@/api/article";
export default {
	data() {
		return {
			items: [],
			show: false,
			inner: "",
		};
	},
	computed: {
		mainLength() {
			return (this.items.length - 1) * 300 + 600;
		},
    h1Length(){

    }
	},
	created() {
		getArticles().then((resp) => {
			this.items = resp.data;
			this.items.forEach((item) => {
				item.content = marked(item.content);
			});
			// 按照时间排序
			this.items.sort((a, b) => {
				return (
					new Date(b.publishDate.slice(0, 19)).valueOf() -
					new Date(a.publishDate.slice(0, 19)).valueOf()
				);
			});
      console.log(this.items)
		});
	},
	methods: {
		onHandleShow(index) {
			this.inner = this.items[index].content;
			this.show = true;
		},
	},
};
</script>

<style lang="less" scoped>
.root {
	position: relative;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	z-index: -2;
}

.main {
	position: relative;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 1800px;
	background: #163001;
}
.content {
	.item.left {
		cursor: pointer;
		padding: 10px;
		position: absolute;
		top: 380px;
		left: calc(50% - 355px);
		width: 300px;
		height: 200px;
		box-sizing: border-box;
		background: #b5acaca6;
		border-radius: 20px;
		&::after {
			display: block;
			content: "";
			border: 30px solid transparent;
			border-left: 30px solid #163001;
			position: absolute;
			top: 70px;
			left: 300px;
		}
		img {
			width: 100px !important;
		}
	}
	.item.right {
		cursor: pointer;
		padding: 10px;
		position: absolute;
		top: 20px;
		left: calc(50% + 55px);
		width: 300px;
		height: 200px;
		box-sizing: border-box;
		background: #b5acac1c;
		border-radius: 20px;
		&::after {
			display: block;
			content: "";
			border: 30px solid transparent;
			border-right: 30px solid #163001;
			position: absolute;
			top: 70px;
			left: -60px;
		}
		img {
			width: 100px !important;
		}
	}

  .publish-date{
    position: absolute;
    top: -25px;
    left: 20%;
  }

  .over-hidden{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }
}
</style>>
