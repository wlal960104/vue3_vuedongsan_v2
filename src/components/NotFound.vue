<template>
  <div>
    <div class="container position-absolute top-50 start-50 translate-middle">
      <h3> ❌ 페이지를 찾을 수 없습니다 ❌ </h3>
      <button type="button" class="btn btn-outline-dark m-4">Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created() {
    // NotFound 페이지는 할인배너 노출X
    this.$emit('closeDiscountBanner')
  }
}
</script>

<style>

</style>