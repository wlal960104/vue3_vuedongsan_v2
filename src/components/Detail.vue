<template>
  <div class="container pb-5">
    <div class="card">
      <div class="card-header fs-3">
        {{ prodList[$route.params.id].title }}
      </div>
      <div class="card-body">
        <img :src="prodList[$route.params.id].image" alt="생략" class="prod-image">
        <p class="fs-5">{{ prodList[$route.params.id].content }}</p>
        <p class="fs-5">가격 : {{ prodList[$route.params.id].price }} 원</p>
      </div>
    </div>

    <!--<button type="button" class="btn btn-outline-dark cal-price"></button>-->
    <div class="mb-3 mt-5 row">
      <h4 class="d-flex justify-content-start mb-3">🔎가격 예상하기</h4>
      <div class="w-50 col-auto">
      <input v-model="month" class="form-control" placeholder="개월 수를 입력해주세요." type="text">
      <div class="form-text d-flex justify-content-start p-1">{{ month }} 개월 선택했습니다.</div>
      </div>
      <div class="col-auto justify-content-end fs-4">{{ prodList[$route.params.id].price * month}}원</div>
    </div>

</div>



</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      month : ''
    }
  },
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