<template>

  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      style="height:calc(100vh - 61px);width: 13%"
  >
    <el-menu-item index="1"  @click="this.$router.push('/home')">
      <template #title>
        <el-icon><Document /></el-icon>
        <span style="letter-spacing: 5px;">首页</span>
      </template>
    </el-menu-item>

    <el-sub-menu index="2" collapse-transition = true>
      <template #title>
        <el-icon><location /></el-icon>
        <span style="letter-spacing: 5px">用户管理</span>
      </template>
        <el-menu-item index="1-1" @click="this.$router.push('/user')">用户信息</el-menu-item>
      <el-menu-item index="1-2">产品上线申请</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="3"  @click="this.$router.push('/info')">
      <el-icon><Position /></el-icon>
      <span style="letter-spacing: 5px">全部信息</span>
    </el-menu-item>

    <el-menu-item index="4" @click="this.$router.push('/screen')">
      <el-icon><DataAnalysis /></el-icon>
      <span style="letter-spacing: 5px">数据统计</span>
    </el-menu-item>

    <el-menu-item index="5">
      <el-icon><Setting /></el-icon>
      <span style="letter-spacing: 5px">设置</span>
    </el-menu-item>

  </el-menu>

</template>

<script>
export default {
  name: "Aside",
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>