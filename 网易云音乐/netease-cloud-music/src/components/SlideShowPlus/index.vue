<template>
	<div class="slide-show-plus-container">
		<ul class="list-container">
			<li
				class="list-item"
				v-for="item in data.slice(0, 5)"
				:key="item.id"
			>
				<AlbumListCard
					:width="118"
					:height="110"
					:imgUrl="item.picUrl"
					:title="item.name"
					:subTitle="item.company"
					@onPlayAlbum="t"
				></AlbumListCard>
			</li>
		</ul>
        <div class="buttons">
            <div class="left">
                <Icon type="zuo"></Icon>
            </div>
            <div class="right">
                <Icon type="you"></Icon>
            </div>
        </div>
	</div>
</template>

<script>
import AlbumListCard from "@/components/AlbumListCard";
import Icon from "@/components/Icon";
export default {
	components: {
		AlbumListCard,
        Icon
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	methods: {
		t(a) {
			console.log(a);
		},
	},
};
</script>

<style lang="less" scoped>
.slide-show-plus-container {
	position: relative;
	.list-container {
		position: absolute;
		top: 0;
		width: 645px;
		margin: 28px 0 0 0;
		.list-item {
			float: left;
			display: inline;
			width: 118px;
			height: 150px;
			margin-left: 11px;
			background-position: -260px 100px;
		}
	}
    .buttons{
        position: relative;
        .left,.right{
            font-size: 16px;
            color: #333;
            font-weight: 1000;
            position: absolute;
            top: 70px;
        }
        .left{
            left: -10px;
        }
        .right{
            right: 10px;
        }
    }
}
</style>