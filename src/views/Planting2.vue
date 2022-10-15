<template>
  <div>
    <Top/>
  </div>
  <div style="width:100%;display: flex;flex-wrap: wrap">
    <Aside />
    <div style="margin-top: 500px;margin-left: 500px">
        生长信息
    </div>
  </div>


</template>
<script>
import Aside from "@/components/Aside";
import Top from "@/components/Top";
export default {
  name: "Planting2",
  components: { Aside, Top },
}
</script>

<style scoped>

</style>