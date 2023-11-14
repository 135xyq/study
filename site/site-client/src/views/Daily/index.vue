<template>
	<div class="history-record-container">
		<div class="empty" v-if="items.length ===0">
			<Empty  text="快去发布第一条记录吧"></Empty>
		</div>
		<div class="main" :style="{ height: mainLength + 'px' }"></div>
		<div class="content">
			<template v-for="(item, index) in items">
				<div
					class="item"
					:class="{
						left: index % 2 === 0,
						right: index % 2 === 1,
					}"
					:style="{ top: -(index + 1) * 200 + 'px' }"
					:key="index"
				>
					<div v-text="item.content" class="text"></div>
					<span class="publish-date">{{ formateDate(item.createdAt) }} </span>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import { getDaily } from "@/api/daily";
import formateDate from "@/utils/formateDate"
import Empty from "@/components/Empty"
export default {
	data() {
		return {
			items: [],
			show: false,
			inner: "",
		};
	},
	components:{
		Empty,
	},
	computed: {
		mainLength() {
			return (this.items.length - 1) * 200 + 600;
		},
	},
	created() {
		getDaily().then((resp) => {
			this.items = resp;
			// 按照时间排序
			this.items.sort((a, b) => {
				return (
					new Date(a.createdAt).valueOf() -
					new Date(b.createdAt).valueOf()
				);
			});
		});
	},
	methods: {
		formateDate,
	},
};
</script>

<style lang="less" scoped>
.history-record-container {
	position: relative;
	height: 100%;
	overflow: auto;
	.main {
		position: relative;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		width: 50px;
		background: linear-gradient(to bottom, #183130, #234223, #296f59);
	}
	.content{
		position: relative;
		.item{
			// height: 80px;
			width: 300px;
			line-height: 30px;
			border: 1px solid #000;
			position: absolute;
			color: #fff;
			background: linear-gradient(to right,#506362, #234223, #296f59);
		}
		.left{
			left: calc(50% - 325px);
		}
		.right{
			left: calc(50% + 24px);
		}
		.publish-date{
			color: #333;;
			position: absolute;
			top: -30px;
		}
		.text{
			text-align: center;
		}
	}
	.empty{
		position: absolute;
		left: 50%;
		top: 50%;
	}
}
</style>>
