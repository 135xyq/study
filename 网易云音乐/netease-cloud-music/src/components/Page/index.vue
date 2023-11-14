<template>
	<div class="page-container">
		<ul class="pages">
			<li class="previous" :class="{'none':currentPage === 1}" @click="previous">&lt;上一页</li>
			<li
				v-for="(item, index) in showArray"
				:key="index"
				v-text="item == -99 ? '...' : item"
				@click="item == -99 ? '' : onChangePage(item)"
				:class="{'more':item==-99,'page':item!=-99,'selected':item===currentPage}"
			></li>
			<li class="next" :class="{'none':currentPage === pages }" @click="next">下一页&gt;</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		total: {
			type: Number,
			required: true,
		},
		limit: {
			type: Number,
			default: 35,
		},
		showCount: {
			type: Number,
			default: 8,
		},
	},
	data() {
		return {
			currentPage: 1, //当前的页码数
		};
	},
	methods: {
		onChangePage(page) {
			this.currentPage = page;
            this.$emit('pageChange',this.currentPage)
		},
        previous(){
            if(this.currentPage > 1){
                this.onChangePage(this.currentPage -1);
            }else{
                return;
            }
        },
        next(){
            if(this.currentPage === this.pages-1){
                return;
            }
            this.onChangePage(this.currentPage+1);
        }
	},
	computed: {
		// 开始的部分
		start() {
			const temp = this.currentPage - Math.floor(this.showCount / 2);
			if (temp < 1) {
				return 1;
			}
			return temp;
		},
		// 结束的部分
		end() {
			const temp = this.start + this.showCount;
			if (temp > this.pages) {
				return this.pages;
			}
			return temp;
		},
		// 分页总数
		pages() {
			return Math.ceil(this.total / this.limit);
		},
		// 展示的数组
		showArray() {
			const arr = [];
			if (this.start > 2) {
				arr.push(1);
				arr.push(-99);
			}
			for (let i = this.start; i <= this.end; i++) {
				arr.push(i);
			}
			if (this.end < this.pages) {
				arr.push(-99);
				arr.push(this.pages);
			}
			return arr;
		},
	},
};
</script>

<style lang="less" scoped>
.page-container {
	width: 100%;
	.pages {
		margin: 20px 0;
		text-align: center;
		font-size: 12px;
		color: #333;
		li {
			height: 22px;
			padding: 0 8px;
			background-color: #fff;
			line-height: 22px;
			display: inline-block;
			cursor: pointer;
		}
		.more {
			cursor: not-allowed;
		}
		.page {
			margin: 0 3px;
			border: 1px solid #ccc;
			border-radius: 2px;
			vertical-align: middle;
			&:hover {
				border: 1px solid rgb(96, 78, 78, 95%);
			}
            &.selected{
                background-color: #C20C0C;
                color:#fff;
            }
		}
		.previous,
		.next {
			width: 47px;
			padding-left: 10px;
			border-radius: 3px;
			background-color: #f2f2f2;
			border: 1px solid #ccc;
			margin: 0 10px;
            &.none{
                background: #e6e0e026;
                cursor: default;
            }
		}
	}
}
</style>