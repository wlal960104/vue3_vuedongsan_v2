<template>

  <div class="container">
    <div class="card">
      <div class="card-header fs-3">
        {{ prodList[$route.params.id].title }}
      </div>
      <div class="card-body">
        <img :src="prodList[$route.params.id].image" alt="생략" class="prod-image">
        <p class="fs-5">{{ prodList[$route.params.id].content }}</p>
      </div>
    </div>

    <!--<button type="button" class="btn btn-outline-dark cal-price"></button>-->
    <div class="mb-3 mt-5 row">
      <h4 class="d-flex justify-content-start mb-3">🔎가격 예상하기</h4>
      <input class="form-control w-50 col-auto" placeholder="1" type="text">
      <div class="col-auto justify-content-end fs-4">100000원</div>
    </div>

  </div>


</template>

<script>
export default {
  name: 'Detail',
  props: {
    prodList: Array
  },
  created() {

  }

}
</script>

<style>
.prod-image {
  width: 100%;
  margin-bottom: 30px;
}

</style>