<template>
	<div class="song-table-container">
		<div class="title">
			<h3 class="title-text">歌曲列表</h3>
			<span class="song-count">{{ 100 }}首歌</span>
			<p class="play">
				播放:
				<span class="play-count">{{ data.playCount }}</span>
				次
			</p>
		</div>
		<div class="table-container">
			<table class="table">
				<thead>
					<tr class="table-title">
						<th class="first-space"></th>
						<th class="table-title-text">标题</th>
						<th class="table-time">时长</th>
						<th class="table-singer">歌手</th>
					</tr>
				</thead>
                <tbody class="table-list-container">
                    <tr class="table-item" v-for="(item,index) in data.songs" :key="item.id">
                        <td class="table-index">{{index+1}}</td>
                        <td class="table-body-title">{{item.name}}</td>
                        <!-- <td class="table-body-time">{{item.}}</td> -->
                        <td class="table-body-singer">{{item.ar[0].name}}</td>
                    </tr>
                </tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
    props:['data'],
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.song-table-container {
	width: 670px;
	.title {
		height: 33px;
		border-bottom: 2px solid #c20c0c;
		.self-clear();
		.title-text {
			float: left;
			font-size: 20px;
			line-height: 28px;
			font-weight: normal;
		}
		.song-count {
			margin: 10px 20px;
			color: #666;
			font-size: 10px;
			float: left;
		}
		.play {
			float: right;
			font-size: 12px;
			line-height: 33px;
			.play-count {
				color: #c20c0c;
				font-weight: bold;
			}
		}
	}
	.table {
		width: 100%;
		border: 1px solid #d9d9d9;
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
		thead {
            font-size: 12px;
            color: #333;
			.table-title {
				height: 38px;
				background-color: #f7f7f7;
                th{
                    border-right: 1px solid #d9d9d9;
                    text-align: left;
                    padding-left: 20px;
                    box-sizing: border-box;
                    color: #666;
                }
                .first-space{
                    width: 77px;
                }
                .table-title-text{
                    width: 327px;
                }
                .table-time{
                    width:91px;
                }
                .table-singer{
                    width: 175px;
                }
			}
		}
	}
}
</style>