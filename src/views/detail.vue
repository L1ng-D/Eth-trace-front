<template>
  <el-dialog :model-value="true" title="详情" @close="handleClose">
    <p>
      <label for="id">农产品编号：</label>
      <span id="id"> {{ plantInfo.id }} </span>
    </p>
    <p>
      <label for="name">农产品姓名称：</label>
      <span id="name"> {{ plantInfo.name }} </span>
    </p>
    <p>
      <label for="time">种植时间：</label>
      <span id="time"> {{ plantInfo.time }} </span>
    </p>
    <p>
      <label for="address">种植地点：</label>
      <span id="address"> {{ plantInfo.address }} </span>
    </p>
    <p>
      <label for="person">种植人员：</label>
      <span id="person"> {{ plantInfo.person }} </span>
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
