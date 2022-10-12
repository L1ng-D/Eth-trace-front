<template>
  <div>
    <Top />
  </div>

  <div style="width:100%;display: flex;flex-wrap: wrap">
    <Aside />

    <div style="padding-top: 15px;">


      <div style=" padding-left: 10%; padding-bottom: 30px">

        <el-button size="large" round type="danger" @click="deleteSelected()"
        >删除选中</el-button
        >
        <el-input style="width: 30%;height: 40px;margin-left:30%" placeholder="请输入订单号" ></el-input>
        <el-button type="primary" round style="margin-left: 20px" size="large">查询</el-button>

      </div>

      <el-table
          :data="tableData"
          style=" font-size: medium;left: 100px"
          border
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />

        <el-table-column label="状态" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.status }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="产品名称" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="区域名称" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.area }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="种植时间" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 15px">{{ scope.row.plantTime }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="产品编号" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.projectId }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="上传时间" width="150">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.uploadTime }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button
                size="medium"
                @click="editMessage(scope.row, scope.$index)"
            >编辑</el-button
            >

            <el-popconfirm
                title="确认删除吗？"
                @confirm="deleteRecord(scope.$index)"
            >
              <template #reference>
                <el-button size="medium"  type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
          :currentPage="currentPage4"
          :page-size="pageSize4"
          :page-sizes="[5, 10, 15, 20]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="padding-left: 40%;padding-top: 22px"
      />

      <el-dialog
          v-model=centerDialogVisible
          title="编辑信息"
          width="30%"
          center
      >
        <el-form :model="form" label-width="120px">


          <el-form-item label="状态">
            <el-input v-model="form.status" />
          </el-form-item>

          <el-form-item label="产品名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="区域名称">
            <el-input v-model="form.area" />
          </el-form-item>

          <el-form-item label="种植时间">
            <el-input v-model="form.plantTime" />
          </el-form-item>

          <el-form-item label="产品编号">
            <el-input v-model="form.projectId" readonly />
          </el-form-item>

          <el-form-item label="上传时间">
            <el-input v-model="form.time" />
          </el-form-item>
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button
                @click="centerDialogVisible = false"
                style="letter-spacing: 5px"
            >取消</el-button
            >
            <el-button
                type="primary"
                @click="centerDialogVisible = false"
                style="letter-spacing: 5px"
            >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Top from '@/components/Top.vue'
import loginView from '@/views/LoginView'
import { ElMessage } from 'element-plus'
export default {
  name: 'InfoView',
  components: { Aside, Top },
  mounted() {},
  data() {
    return {
      multipleSelection: [],
      centerDialogVisible: false,
      form: {},
      total:0,
      pageSize4:5,
      currentPage4:1,
      tableData: [
        {
          name: '牛奶',
          status: '上线',
          area: '北京',
          plantTime: '2015-5-9',
          uploadTime: '2016-4-3',
          projectId: 'x123',
        },
        {
          name: '苹果干',
          status: '上线',
          area: '杭州',
          plantTime: '2013-1-15',
          uploadTime: '2016-4-3',
          projectId: 'x124',
        },
        {
          name: '牛肉干',
          area: '内蒙古',
          status: '上线',
          plantTime: '2016-7-2',
          uploadTime: '2016-4-3',
          projectId: 'x123',
        },
        {
          name: '葡萄',
          plantTime: '2016-5-4',
          area: '乌鲁木齐',
          status: '上线',
          uploadTime: '2016-4-3',
          projectId: 'x123',
        },
      ],
    }
  },
  methods: {
    deleteRecord(index) {
      this.tableData.splice(index, 1)
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
    },
    handleSizeChange(){

    },

    deleteSelected() {


    },
    handleCurrentChange(){

    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    editMessage(row, index) {
      this.centerDialogVisible = true
      this.form.id = row.id
      this.form.area = row.area
      this.form.status = row.status
      this.form.name = row.name
      this.form.plantTime = row.uploadTime
      this.form.projectId = row.projectId
      this.form.time = row.time
    },
  },
}
</script>
