<template>
	<div class="slide-show-plus-container">
		<ul class="list-container list-1" ref="album-list1">
			<li
				class="list-item"
				v-for="item in data.slice(5, 10)"
				:key="item.id"
			>
				<AlbumListCard
					:width="118"
					:height="110"
					:imgUrl="item.picUrl"
					:title="item.name"
					:subTitle="item.artist.name"
					:id="item.id"
					:artistId="item.artist.id"
					@onPlayAlbum="t"
				></AlbumListCard>
			</li>
		</ul>
		<ul class="list-container list-2" ref="album-list2">
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
					:subTitle="item.artist.name"
					:id="item.id"
					:artistId="item.artist.id"
					@onPlayAlbum="t"
				></AlbumListCard>
			</li>
		</ul>
		<ul class="list-container list-3" ref="album-list3">
			<li
				class="list-item"
				v-for="item in data.slice(5, 10)"
				:key="item.id"
			>
				<AlbumListCard
					:width="118"
					:height="110"
					:imgUrl="item.picUrl"
					:title="item.name"
					:subTitle="item.artist.name"
					:id="item.id"
					:artistId="item.artist.id"
					@onPlayAlbum="t"
				></AlbumListCard>
			</li>
		</ul>
		<ul class="list-container list-4" ref="album-list4">
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
					:subTitle="item.artist.name"
					:id="item.id"
					:artistId="item.artist.id"
					@onPlayAlbum="t"
				></AlbumListCard>
			</li>
		</ul>
        <div class="buttons">
            <div class="left" @click="previous">
                <Icon type="zuo"></Icon>
            </div>
            <div class="right" @click="next">
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
	data(){
		return{
			nowShow:2,//当前展示第几个容器
		}
	},
	methods: {
		t(a) {
			console.log(a);
		},
		// 上一张轮播图
		previous(){
			// console.log(this.$refs['album-list'+this.nowShow])
			this.$refs['album-list'+ this.nowShow].style.left = '700px';
			if(this.nowShow === 1){
				this.nowShow = 4;
			}else {
				this.nowShow--;
			}
			this.$refs['album-list'+ this.nowShow].style.left = '10px'
		},
		//下一张轮播图
		next(){
			this.$refs['album-list'+ this.nowShow].style.left = '-700px';
			if(this.nowShow === 4){
				this.nowShow = 1;
			}else{
				this.nowShow++;
			}
			this.$refs['album-list'+ this.nowShow].style.left = '10px'
		}
	},
};
</script>

<style lang="less" scoped>
.slide-show-plus-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	.list-container {
		position: absolute;
		top: 0;
		left: 15px;
		width: 645px;
		margin: 28px 0 0 0;
		transition: 1s all;
		.list-item {
			float: left;
			display: inline;
			width: 118px;
			height: 150px;
			margin-left: 11px;
			background-position: -260px 100px;
		}
	}
	.list-1{
		position: absolute;
		top: 0;
		left: -700px;
	}
	.list-3{
		position: absolute;
		top: 0;
		left: 700px;
	}
	.list-4{
		position: absolute;
		top: 0;
		left: 1400px;
	}
    .buttons{
        position: relative;
        .left,.right{
            font-size: 16px;
            color: #333;
            font-weight: 1000;
            position: absolute;
            top: 70px;
			cursor: pointer;
        }
        .left{
            left: 5px;
        }
        .right{
            right: 10px;
        }
    }
}
</style>