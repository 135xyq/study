<template>
	<div class="song-container">
		<TopLink></TopLink>
	</div>
</template>

<script>
import TopLink from "@/components/TopLink";
import { getSongUrl } from "@/api/song";
export default {
	components: {
		TopLink,
	},
	data() {
		return {
            songUrl:[],//获取歌曲播放连接
            id:this.$route.query.id,//歌曲id
        };
	},
    methods:{
        async __initSongUrl(){
            const res = await getSongUrl(this.id);
            this.songUrl = res;
        }
    },
    created(){
        this.__initSongUrl();
    }
};
</script>

<style>
</style>