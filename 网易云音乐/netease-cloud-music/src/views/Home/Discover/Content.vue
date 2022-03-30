<template>
	<div class="content-container">
		<div class="banner-container">
			<SlideShow :bannerInfo="bannerInfo"></SlideShow>
		</div>
        <div class="card" style="margin:100px">
            <PlayListCard @onHandlePlay="t" img="http://p1.music.126.net/lwHyvbi5zY_rK80RPV1NNQ==/109951167213141194.jpg"
        listened='1234'></PlayListCard>
        </div>
	</div>
</template>

<script>
import SlideShow from "@/components/SlideShow";
import PlayListCard from "@/components/PlayListCard";
import { getBanner } from "@/api/discover";
export default {
	components: {
		SlideShow,
        PlayListCard
	},
	data() {
		return {
			bannerInfo: [], //头部轮播图
			fixed: "", //下载图片
		};
	},
	created() {
		getBanner().then((res) => {
			this.bannerInfo = res;
			this.bannerInfo = this.bannerInfo.map((item) => {
				return {
					img: item.imageUrl, //图片地址
					bgColor: item.titleColor, //颜色
					path: item.url, //链接地址
				};
			});
		});
	},
    methods:{
        t(e){
            console.log(e)
        }
    }
};
</script>

<style lang="less" scoped>
.content-container {
	.banner-container {
		height: 285px;
	}
}
</style>