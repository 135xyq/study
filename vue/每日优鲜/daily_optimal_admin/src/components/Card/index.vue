<template>
	<div class="card-contianer">
		<el-row :gutter="12">
			<el-col
				:span="6"
				class="card-item-self"
				v-for="item in cardInfo"
				:key="item.title"
			>
				<el-card
					shadow="hover"
					:body-style="{
						padding: '0px',
						height: '120px',
						textAlign: 'center', 
						cursor: 'pointer',
						backgroundColor: '#434A50',
						color: '#fff',
					}"
				>
					<div class="title">{{ item.title }}</div>
					<div class="content">{{ item.content }}</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props: {
		cardInfo: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="less" scoped>
.card-contianer {
	margin-left: 50px;
}
.card-item-self {
	margin: 20px 27px;
}
.title {
	border-bottom: 1px solid;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
}

.content {
	line-height: 70px;
}
</style>
