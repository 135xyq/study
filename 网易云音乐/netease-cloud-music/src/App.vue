<template>
	<div id="app">
		<Layout></Layout>
		<router-view />
		<Foot></Foot>
		<div class="play">
            <SongPlay></SongPlay>
        </div>
	</div>
</template>

<script>
import Layout from "@/layout";
import Foot from "@/layout/Foot";
import SongPlay from "@/layout/SongPlay";
export default {
	components: {
		Layout,
		Foot,
        SongPlay,
	},
};
</script>

<style lang="less" scoped>
#app {
	width: 100%;
	height: 100%;
}

.play {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 53px;
    background: #222222;
    z-index: 99999;
}
</style>
