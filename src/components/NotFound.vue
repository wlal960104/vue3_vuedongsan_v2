<template>
  <div>
    <div class="container position-absolute top-50 start-50 translate-middle">
      <h3> ❌ 페이지를 찾을 수 없습니다 ❌ </h3>
      <button @click="$router.push('/')" type="button" class="btn btn-outline-dark m-4">Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  created() {
    console.log('NotFound // created ::: ')
    // NotFound 페이지는 할인배너 노출X
    this.$emit('closeDiscountBanner')
  },
  // 해당 라우터 떠나기 전 실행
  beforeRouteLeave () {
    // TODO: Home 으로 돌아갈 때 배너 노출되는 로직 개선 필요
    this.$emit('openDiscountBanner');
  }
}
</script>

<style>

</style>