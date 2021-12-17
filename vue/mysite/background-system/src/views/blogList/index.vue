<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="data" stripe style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="文章名称" width="150" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            title="博客预览图"
            width="230"
            trigger="hover"
          >
            <el-image
              style="width: 200px"
              :src="scope.row.thumb"
              fit="contain"
              :preview-src-list="srcList"
            ></el-image>
            <a
              href="#"
              target="_blank"
              @click.prevent="goToTitleHandle(scope.row)"
              slot="reference"
              >{{ scope.row.title }}</a
            >
          </el-popover></template
        >
      </el-table-column>

      <el-table-column prop="title" label="文章描述" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>

      <el-table-column prop="title" label="浏览数" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.scanNumber }}</template>
      </el-table-column>

      <el-table-column prop="title" label="评论量" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.commentNumber }}</template>
      </el-table-column>

      <el-table-column prop="title" label="所属分类" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.category.name }}</template>
      </el-table-column>

      <el-table-column prop="title" label="创建日期" width="230" align="center">
        <template slot-scope="scope">{{ scope.row.createDate }}</template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
              @click="editBannerHandle(scope.row)"
            ></el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="删除 "
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="deleteBlog(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { findBlog, delOneBlog } from "@/api/blog.js";
import { formatDate } from "@/utils/tools.js"; //事件处理函数
import { serverUrl, frontEndUrl } from "@/urlConfig.js";
export default {
  data() {
    return {
      data: [], //数据详情
      srcList: [], //预览图链接数组
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      findBlog().then(({ data }) => {
        this.data = data.rows;
        for (const item of this.data) {
          item.createDate = formatDate(item.createDate);
          item.thumb = serverUrl + item.thumb;
          this.srcList.push(item.thumb);
        }
      });
    },
    // 跳转到具体的文章
    goToTitleHandle(blogInfo) {
      window.open(`${frontEndUrl}/article/${blogInfo.id}`);
    },

    // 删除文章
    deleteBlog(blogInfo) {
      this.$confirm(
        "删除该文章会将该文章下面的评论一并删除, 是否继续?",
        "是否删除此篇文章",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
          delOneBlog(blogInfo.id).then(() => {
            this.fetchData();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
