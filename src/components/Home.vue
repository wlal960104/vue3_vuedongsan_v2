<template>
  <div class="container">
    <!-- 정렬 버튼(가격순 정렬, 되돌리기) -->
    <button @click="priceSort" type="button" class="btn btn-secondary m-2">가격순 정렬</button>
    <button @click="sortBack" type="button" class="btn btn-dark">
      <svg class="bi bi-arrow-counterclockwise" fill="currentColor" height="16" viewBox="0 0 16 16"
         width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" fill-rule="evenodd"/>
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
    </svg>
    </button>

    <!-- 부동산 리스트 -->
    <List :prodList="list"/>
  </div>
</template>

<script>
import List from "@/components/List.vue";

export default {
  name: 'Home',
  data () {
    return {
      listOrigin : [...this.prodList],
      list : [...this.prodList]
    }
  },
  components: {
    List
  },
  props : {
    prodList : Array
  },
  methods : {
    // 가격 낮은 순 -> 높은 순으로 정렬
    priceSort () {
      this.list.sort(function(a,b) {
        return a.price - b.price;
      })
    },
    // 리스트 원본 순으로 재정렬
    sortBack () {
      this.list = [...this.listOrigin]
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>