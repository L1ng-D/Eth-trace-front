<template>
  <div>
    <Top />
  </div>
  <div style="width:100%;display: flex;flex-wrap: wrap">
    <Aside />
    <div class="box" style="width: 80%">

      <div class="table">
        <el-table :data="plantInfo"  stripe style="width: auto;text-align: center">
          <el-table-column prop="id" label="农产品编号" align="center" header-align="left" width="100px"/>
          <el-table-column prop="name"  label="农产品名称" />
          <el-table-column prop="time"  label="种植时间" />
          <el-table-column prop="address" label="种植地点"/>
          <el-table-column prop="person"  label="种植人员"/>
            <el-table-column  fixed="right" label="操作" width="300px">
            <template #default="{ row }">
              <div class="action">
                <div class="btn"  @click="handleNew(row)">新增</div>
                <div class="btn"  @click="handleDetail(row)">详情</div>
                <div class="btn"  @click="handleEdit(row)">编辑</div>
                <div class="btn"  @click="handleDel(row)">删除</div>
              </div>
            </template>
            </el-table-column>
        </el-table>
      </div>

      <el-pagination
          :currentPage="currentPage4"
          :page-size="pageSize4"
          :page-sizes="[5, 10, 15, 20]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="padding-left: 25%;padding-top: 22px"
      />

      <!-- 新建/编辑弹框 -->
      <Dialog
          v-if="dialogShow"
          v-model:dialogShow="dialogShow"
          :rowInfo="rowInfo"
          :title="title"
          :arrayNum="plantInfo.length"
          @addRow="addRow"
          @editRow="editRow"
      />
      <!-- 详情弹窗 -->
      <Detail v-if="detailShow" :rowInfo="rowInfo" @closeDetail="closeDetail" />
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Top from '@/components/Top.vue'
import Dialog from './dialog.vue'
import Detail from "./detail.vue"
import { reactive, toRefs } from "vue";
import {ElMessageBox} from "element-plus";
export default {
  name: 'Planting1',
  components: { Aside, Top ,Detail ,Dialog},
  setup() {
    const data = reactive({
      dialogShow: false, // 新增/编辑弹框
      detailShow: false, // 详情弹窗
      rowInfo: {}, // 新增/编辑的数据
      title: "", // 是新建还是修改
      total:0,
      plantInfo: [
        {
          id: 1,
          name: "西瓜",
          time: "2022-12-12",
          address: "杭州",
          person: "李",
        },
        {
          id: 2,
          name: "土豆",
          time: "2022-12-13",
          address: "上海",
          person: "刘",
        }
      ],
    });
    const method = reactive({
      handleNew() {
        data.title = "新增";
        data.rowInfo = {};
        data.dialogShow = true;
      },
      handleDetail(val) {
        data.detailShow = true;
        data.rowInfo = val;
      },
      handleEdit(val) {
        data.title = "修改";
        data.dialogShow = true;
        data.rowInfo = val;
      },
      handleDel(val) {
        ElMessageBox.confirm("你确定删除这个农产品的信息吗?", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
            .then(() => {
              method.handleSure(val);
            })
            .catch(() => {
              // catch error
            });
      },
      handleSure(val) {
        this.dialogVisible = false;
        const index = data.plantInfo.findIndex((item) => item.id === val.id);
        data.plantInfo.splice(index, 1);
      },
      // 添加行
      addRow(val) {
        data.plantInfo.push(val);
      },
      // 编辑行
      editRow(val) {
        let index = data.plantInfo.findIndex(
            (item, index) => item.id === val.id
        );
        data.plantInfo.splice(index, 1, val);
      },
      // 关闭详情弹窗
      closeDetail() {
        data.detailShow = false;
      },
    });
    return { ...toRefs(data), ...method };
  },
}
</script>
<style lang="scss" scoped>
.box {
  padding-top: 40px;
  padding-left: 40px;
  width: 800px;
}
.table{
  padding-top: 20px;
  text-align: center;
}
.action {
  width: 300px;
  height: 50px;
  justify-content: center;
}
.btn {
  width: 55px;
  border: 2px solid #52a640;
  text-align: center;
  line-height: 30px;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  margin-left:10px;

}
.btn:hover {
  filter: brightness(10);
  color: black;
}

</style>
