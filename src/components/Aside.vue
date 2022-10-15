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
        <el-icon><House /></el-icon>
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

    <el-sub-menu index="4" collapse-transition = true>
      <template #title>
        <el-icon><Watermelon /></el-icon>
        <span style="letter-spacing: 5px">种植管理</span>
      </template>
      <el-menu-item index="4-1"  @click="this.$router.push('/Planting1')">种植信息</el-menu-item>
      <el-menu-item index="4-2"  @click="this.$router.push('/Planting2')">生长信息</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="5"  @click="this.$router.push('/Produce')">
      <el-icon><ChromeFilled /></el-icon>
      <span style="letter-spacing: 5px">生产管理</span>
    </el-menu-item>

    <el-menu-item index="6"  @click="this.$router.push('/Detection')">
     <el-icon><CircleCheck /></el-icon>
      <span style="letter-spacing: 5px">检测管理</span>
    </el-menu-item>

    <el-menu-item index="7"  @click="this.$router.push('/Logistics')">
      <el-icon><Position /></el-icon>
      <span style="letter-spacing: 5px">物流管理</span>
    </el-menu-item>

    <el-menu-item index="8" @click="this.$router.push('/screen')">
      <el-icon><DataAnalysis /></el-icon>
      <span style="letter-spacing: 5px">大屏数据统计</span>
    </el-menu-item>

    <el-menu-item index="9">
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