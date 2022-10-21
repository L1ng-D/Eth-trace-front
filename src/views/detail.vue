<template>
  <el-dialog :model-value="true" title="详情" @close="handleClose">
    <p>
      <label for="id">产品编号：</label>
      <span id="id"> {{ plantInfo.id }} </span>
    </p>
    <p>
      <label for="name">产品名称：</label>
      <span id="name"> {{ plantInfo.name }} </span>
    </p>
    <p>
      <label for="time">开始培育时间：</label>
      <span id="time"> {{ plantInfo.time }} </span>
    </p>
    <p>
      <label for="address">培育地点：</label>
      <span id="address"> {{ plantInfo.address }} </span>
    </p>
    <p>
      <label for="num">培育数量：</label>
      <span id="num"> {{ plantInfo.num }} </span>
    </p>

  </el-dialog>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    rowInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emit: ["closeDetail"],
  setup(props, { emit }) {
    const data = {
      plantInfo: computed(() => props.rowInfo).value,
    };
    const method = {
      handleClose() {
        emit("closeDetail");
      },
    };
    return { ...toRefs(data), ...method };
  },
};
</script>

<style lang="less" scoped>
</style>
