<template>
  <el-dialog :model-value="true" :title="title" @close="handleClose">
    <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
    >
      <el-form-item label="作物编号：" prop="id" class="item">
        <el-input v-model="formData.id"/>
      </el-form-item>
      <el-form-item label="作物名称：" prop="name">
        <el-input v-model="formData.name"/>
      </el-form-item>
      <el-form-item label="开始培育时间：" prop="time">
        <el-input v-model="formData.time"/>
      </el-form-item>
      <el-form-item label="培育地点：" prop="address">
        <el-input v-model="formData.address"/>
      </el-form-item>
      <el-form-item label="培育数量：" prop="num">
        <el-input v-model="formData.num"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">确定</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { reactive, toRefs, onMounted} from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogShow: {
      type: Boolean,
      default: false,
    },
    rowInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    arrayNum: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const data = reactive({
      dialogFlag: false,
      formData: {},
    });
    const method = reactive({
      // 关闭弹窗
      handleClose() {
        emit("update:dialogShow", false);
      },
      // 重置
      resetForm() {
        data.formData = Object.assign({}, props.rowInfo);
      },
      // 提交表单内容
      submitForm() {
        method.handleClose();
        if (props.rowInfo.name) {
          // 修改
          emit("editRow", data.formData);
        } else {
          // 新增
          data.formData["id"] = props.arrayNum + 1;
          emit("addRow", data.formData);
        }
      },
    });
    onMounted(() => {
      data.formData = Object.assign({}, props.rowInfo);
      data.dialogFlag = props.rowInfo;
    });
    return { ...toRefs(data), ...method };
  },
};
</script>

<style>
.item{
  color: wheat;
}

</style>
