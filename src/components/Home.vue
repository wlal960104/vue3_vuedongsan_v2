<template>
  <div class="container">
    <!-- 부동산 리스트 -->
    <List :prodList="prodList"/>
  </div>
</template>

<script>
import List from "@/components/List.vue";

export default {
  name: 'Home',
  components: {
    List
  },
  props : {
    prodList : Array
  }
}
</script>

<style>

</style>