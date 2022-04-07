<template>
	<!-- 歌单封面 -->
	<div
		class="play-list-container"
		:style="{ width: size + 'px', height: size + 'px' }"
	>
		<div class="card-img-container">
			<router-link :to="'/playlist?id=' + id">
				<img :src="img" :title="tipTitle" class="card-img" />
			</router-link>
		</div>
		<div class="card-foot-button">
			<div class="listen">
				<Icon type="erji"></Icon>
				<span class="listen-number">{{ listenedToString }}</span>
			</div>
			<div class="play" @click="onHandlePlay">
				<div class="play-button" v-if="!isPlay">
					<Icon type="zanting"></Icon>
				</div>
				<div class="play-button" v-if="isPlay">
                    <Icon type="bofang"></Icon>
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
		// 图片
		img: {
			type: String,
			required: true,
		},
		// 听歌的人次
		listened: {
			type: Number,
			required: true,
		},
		// 卡片的尺寸
		size: {
			type: Number,
			default: 140,
		},
		// 鼠标移入提示消息
		tipTitle:{
			type:String,
			required:true,
		},
		// 歌单ID
		id:{
			type:Number,
			required:true
		}
	},
    data(){
        return{
            isPlay:true,//是否播放歌单
        }
    },
    methods:{
        onHandlePlay(){
            this.$emit('onHandlePlay',this.isPlay);
            this.isPlay = !this.isPlay;
        }
    },
	computed:{
		listenedToString(){
			if(this.listened > 100000000) {
				return Math.floor(this.listened / 100000000) + '亿'
			}else if(this.listened > 10000) {
				return Math.floor(this.listened / 10000) + '万'
			}else{
				return this.listened+'';
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.play-list-container {
	position: relative;
	.card-img-container {
		width: 100%;
		height: 100%;
		.card-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.card-foot-button {
		position: absolute;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		height: 27px;
		background: #201b1bc4;
		color: #ccc;
		font-size: 12px;
		.self-clear();
		line-height: 27px;
		padding-left: 5px;
		.listen {
			float: left;
			.icon-container {
				float: left;
				font-size: 16px;
			}
			.listen-number {
				float: left;
				margin-left: 5px;
			}
		}
		.play {
			float: right;
			.play-button {
				width: 15px;
				height: 15px;
				border-radius: 50%;
				border: 2px solid #ccc;
                padding: 1px;
				text-align: center;
				line-height: 15px;
                margin-right: 10px;
                margin-top: 4px;
                cursor: pointer;
                .icon-container{
                    text-align: center;
                    font-size: 12px;
                }
                &:hover{
                    color: #fff;
                }
			}
		}
	}
}
</style>