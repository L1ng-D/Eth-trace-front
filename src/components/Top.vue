<template>
<div style="display: flex;height: 60px;align-items: center;justify-content: center;border-bottom: 1px #0f3b1d solid;font-weight: bold;width:100% ">
  <div style="font-size: 35px;letter-spacing: 50px;color:#2f6e1b;text-align: center;width: 600px;margin-left:400px;">农产品溯源系统</div>
  <button class="btn1"  @click="this.$router.push({ path: '/' })">退出登录</button>
  </div>
</template>


<script>
export default {
  name: "Top"
}
</script>

<style scoped>
.btn1 {
  width: 80px;
  border: 2px solid #6a6c0f;
  text-align: center;
  line-height: 35px;
  border-radius: 8px;
  display: inline-block;
  color:#2f6e1b;
  font-weight: bold;
  font-size:15px;
  margin-left: 300px;
}
.btn1:hover {
  filter: brightness(1.2);
  color:  #6a6c0f;
}
</style>