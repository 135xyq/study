<template>
	<div class="type-head-container">
		<div class="content">
			<span class="round"></span>
			<router-link :to="{name:path}" class="title" v-if="routerPath">{{ title }}</router-link>
			<span :to="{name:path}" class="title" v-if="!routerPath">{{ title }}</span>
            <div class="more-container" v-if="showMore">
                <router-link :to="{name:path}" class="more">更多</router-link>
                <Icon type="youjiantou"></Icon>
            </div>
		</div>
	</div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
    components:{
        Icon,
    },
	props: {
		title: {
			type: String,
			required: true,
		},
        showMore:{
            type:Boolean,
            default:true,
        },
        path:{
            type:String,
            default:'Playlist'
        },
        routerPath:{
            type:String,
            default:''
        }
	},
};
</script>

<style lang="less" scoped>
@import '~@/style/self.less';
.type-head-container {
	width: 100%;
	.content {
		width: 100%;
		height: 33px;
		line-height: 33px;
        box-sizing: border-box;
		padding: 0px 10px 0px 15px;
		border-bottom: 2px solid rgb(193, 13, 12);
        .self-clear();
		.round {
			display: inline-block;
			width: 6px;
			height: 6px;
			border: 4px solid #c92d2d;
			border-radius: 50%;
			margin-right: 10px;
		}
		.title {
			font-size: 20px;
			font-weight: normal;
			line-height: 28px;
		}
        .more-container{
            float: right;
            font-size: 12px;
            .self-clear();
            .more{
                margin-right: 5px;
                color: rgb(102, 102, 102);
                &:hover{
                    text-decoration: underline;
                }
            }
            .icon-container{
                float: right;
                font-weight: 1000;
                color: #c92d2d;
            }
        }
	}
}
</style>