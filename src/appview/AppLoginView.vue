<template>
  <div class="header">
    <div style="margin: 0 auto;width: 60vw;position: relative">
      <span style="font-size: 5vw;margin-left: 15vw;position: absolute;top: 15px;
      letter-spacing: 10px;font-family:SimSun-ExtB;">农产品溯源</span>
    </div>
  </div>
  <div class="body">
    <van-cell-group inset style="margin-top: 30px">
      <van-field v-model="username" type="number" label="用户名" @click-input="show=true" />
      <van-field v-model="password" type="password" label="密码" @focus="show=true"  />
    </van-cell-group>
    <van-number-keyboard
        :show="show"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        v-model="username"
    />

  </div>

  <div></div>



</template>

<script>
export default {
  name: "AppLoginView",
  data(){
    return{
      username:'',
      password:'',
      show:false,
    }

  },methods:{
    onInput(){
    this.username = this.input
      console.log(this.username)
    },onDelete(){
    this.username = this.input
    }

  }

}
</script>

<style scoped>
.header{
  width: 100vw;
  border: 1px solid red;
  height: 50px
}
.body{
  width: 100vw;
  border: 1px solid blue;
  height: 500px;
}
</style>