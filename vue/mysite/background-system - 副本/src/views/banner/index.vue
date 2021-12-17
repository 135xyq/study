<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="data" stripe style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述" align="center">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
      <el-table-column label="中图预览" align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 100px"
            :src="scope.row.midImg2"
            fit="fill"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="大图预览" align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 100px"
            :src="scope.row.bigImg2"
            fit="fill"
          ></el-image>
        </template>
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
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出框,编辑首页标语 -->
    <el-dialog title="请编辑信息" :visible.sync="dialogFormVisible" top="8vh">
      <el-form :model="form">
        <!-- 标题 -->
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <!-- 描述 -->
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>

        <!-- 图片显示和上传 -->
        <el-row>
          <el-col :span="12">
            <el-form-item label="首页中图">
              <!-- 中图 -->
              <Upload v-model="form.midImg"></Upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="首页大图">
              <!-- 大图 -->
              <Upload v-model="form.bigImg"></Upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editBannerConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBanner, setBanner } from "@/api/banner.js";
import { serverUrl } from "@/urlConfig.js";
import Upload from "@/components/Upload.vue"; //上传图片的组件
export default {
  data() {
    return {
      data: [], //存储数据
      dialogFormVisible: false, //编辑对话框是否显示
      form: {
        id: "",
        midImg: "",
        bigImg: "",
        title: "",
        description: "",
      },
    };
  },
  components: {
    Upload,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getBanner().then((res) => {
        this.data = res.data;
        // 处理图片的地址
        for (let item of this.data) {
          item.midImg2 = serverUrl+item.midImg;
          item.bigImg2 = serverUrl + item.bigImg;
        }
      });
    },
    // 编辑按钮点击事件
    editBannerHandle(bannerInfo) {
      // 将数据回填
      this.form = { ...bannerInfo };
      // 打开dialog,弹出框
      this.dialogFormVisible = true;
    },
    // 提交编辑
    editBannerConfirm() {
      // 拿到表单数据发送到服务器
      let arr = [...this.data];
      for (let i = 0; i < arr.length; i++) {
        if ((arr[i].id === this.form.id)) {
          arr[i] = this.form;
        }
      }
      setBanner(arr).then((res) => {
        this.dialogFormVisible = false; //关闭对话框
        this.$message({
          message: "修改成功！",
          type:'success'
        });
        this.fetchData();//重新获取数据
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
