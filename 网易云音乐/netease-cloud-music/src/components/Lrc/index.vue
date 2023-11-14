<template>
	<div class="lrc-container" ref="container">
		<p class="lrc-item" v-for="(item, index) in data" :refs = "'lrc' + index" :key="index" :class="{'selected':currentIndex === index}">
			{{ item.content }}
		</p>
	</div>
</template>

<script>
export default {
    props:['currentTime'],//currentTime当前播放的时间点
	data() {
		return {
			data: [], //歌词
		};
	},
	created() {
		this.data = this.$store.state.songs.songLrc;
	},
    computed:{
        currentIndex(){
            for(let i = 0 ;i < this.data.length-1;i++) {
                if(this.data[i].time <= this.currentTime && this.data[i+1].time > this.currentTime){
                    return i;
                }
            }
        }
    },
    watch:{
        "currentIndex":function(val){
            // console.log(this.$refs.container)
            this.$refs.container.scrollTo(0,val*32 - 130);
        },
		"$store.state.songs.songLrc": function (val) {
			this.data = val;
		},
    }
};
</script>

<style lang="less" scoped>
.lrc-container {
	width: 100%;
	height: 100%;
	margin: 21px 0 20px 0;
	overflow: auto;
	.lrc-item {
		color: #989898;
		word-wrap: break-word;
		text-align: center;
		line-height: 32px;
		height: auto !important;
		height: 32px;
		min-height: 32px;
		transition: color 0.7s linear;
        &.selected{
            font-size: 14px;
            color: #fff;
        }
	}
}
</style>