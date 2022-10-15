<template>
  <div>
    <Top />
  </div>
  <div style="width:100%;display: flex;flex-wrap: wrap">
    <Aside />
    <div class="box">
      <div class="action">
        <div class="btn"  @click="handleNew">新增</div>
      </div>
      <div class="table">
        <el-table :data="plantInfo"  stripe style="width: 100%;text-align: center">
          <el-table-column prop="id" label="农产品编号"/>
          <el-table-column prop="name" label="农产品名称" />
          <el-table-column prop="time" label="种植时间" />
          <el-table-column prop="address" label="种植地点"/>
          <el-table-column prop="person" label="种植人员"/>
            <el-table-column fixed="right" label="操作" style="text-align: center;width: auto">
            <template #default="{ row }">
              <div type="text" @click="handleDetail(row)">查看</div>
              <div type="text"  @click="handleEdit(row)">编辑</div>
              <div type="text"  @click="handleDel(row)">删除</div>
            </template>
            </el-table-column>
        </el-table>
      </div>

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
  width: auto;
  height: auto;
  justify-content: center;

}
.btn {
  width: 60px;
  text-transform: uppercase;
  border: 2px solid #6fc462;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
.btn:hover {
  filter: brightness(3.1);
}
.table /deep/ .el-table th {
  background-color: transparent!important;
}

.table /deep/ .el-table tr {
  background-color: transparent!important;
}
.table /deep/  .el-table--enable-row-transition .el-table__body td, .el-table .cell{
  background-color: transparent;
}
.el-table::before {//去除底部白线
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
</style>
