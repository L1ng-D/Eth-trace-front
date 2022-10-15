<template>
  <div>
    <Top/>
  </div>
  <div>
    <Aside />
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Top from '@/components/Top.vue'
export default {
  name: "Detection",
  components: { Aside, Top },
}
</script>

<style scoped>

</style>