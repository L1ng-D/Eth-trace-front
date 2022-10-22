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
      <el-form-item label="信息编号：" prop="id">
        <el-input v-model="formData.id"></el-input>
      </el-form-item>
      <el-form-item label="作物编号：" prop="id_">
        <el-input v-model="formData.id_"></el-input>
      </el-form-item>
      <el-form-item label="作物名称：" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="记录时间：" prop="time">
        <el-input v-model="formData.time"></el-input>
      </el-form-item>
      <el-form-item label="天气状况：" prop="weather">
        <el-input v-model="formData.weather"></el-input>
      </el-form-item>
      <el-form-item label="描述：" prop="num">
        <el-input v-model="formData.description"></el-input>
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

<style lang="scss" scoped>
</style>
