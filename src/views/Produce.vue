<template>
  <div>
    <Top/>
  </div>
  <div>
    <Aside />
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Top from "@/components/Top";

export default {
  name: "Produce",
  components: { Aside, Top },
}
</script>

<style scoped>

</style>