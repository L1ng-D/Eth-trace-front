<template>

  <el-menu
      active-text-color="block"
      background-color="#0f3b1d"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      style="height:calc(100vh - 61px);width: 13%"
  >
    <el-menu-item index="1"  @click="this.$router.push('/home')">
      <template #title>
        <el-icon><House /></el-icon>
        <span  class="span">首页</span>
      </template>
    </el-menu-item>

    <el-sub-menu index="2" collapse-transition = true>
      <template #title>
        <el-icon><location /></el-icon>
        <span class="span">用户管理</span>
      </template>
        <el-menu-item index="1-1" class="span" @click="this.$router.push('/user')">用户信息</el-menu-item>
      <el-menu-item index="1-2"  class="span">产品上线申请</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="3"  @click="this.$router.push('/info')">
      <el-icon><Position /></el-icon>
      <span  class="span">产品信息</span>
    </el-menu-item>

    <el-sub-menu index="4" collapse-transition = true>
      <template #title>
        <el-icon><Watermelon /></el-icon>
        <span  class="span">种植管理</span>
      </template>
      <el-menu-item index="4-1"  class="span" @click="this.$router.push('/Planting1')">种植信息</el-menu-item>
      <el-menu-item index="4-2"  class="span" @click="this.$router.push('/Planting2')">生长信息</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="5"  @click="this.$router.push('/Produce')">
      <el-icon><ChromeFilled /></el-icon>
      <span  class="span">生产管理</span>
    </el-menu-item>

    <el-menu-item index="6"  @click="this.$router.push('/Detection')">
     <el-icon><CircleCheck /></el-icon>
      <span  class="span">检测管理</span>
    </el-menu-item>

    <el-menu-item index="7"  @click="this.$router.push('/Logistics')">
      <el-icon><Position /></el-icon>
      <span  class="span">物流管理</span>
    </el-menu-item>

    <el-menu-item index="8" @click="this.$router.push('/screen')">
      <el-icon><DataAnalysis /></el-icon>
      <span  class="span">大屏数据统计</span>
    </el-menu-item>

    <el-menu-item index="9">
      <el-icon><Setting /></el-icon>
      <span class="span">设置</span>
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
.span{
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 15px;
}
</style>