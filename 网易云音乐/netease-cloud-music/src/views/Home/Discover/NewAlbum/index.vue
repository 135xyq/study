<template>
	<div class="new-album-container">
        <div class="content">
            <SlideShowPlus :data="data"></SlideShowPlus>
        </div>
    </div>
</template>

<script>
import SlideShowPlus from '@/components/SlideShowPlus';
export default {
    components:{
        SlideShowPlus
    },
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style>
</style>