<template>
  <!-- nav -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" href="#" to="/">Vuedongsan</router-link>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link aria-current="page" class="nav-link active" to="/">Home</router-link>
          </li>
          <!--<li class="nav-item">-->
          <!--  <a class="nav-link" href="#">Products</a>-->
          <!--</li>-->
          <li class="nav-item">
            <router-link class="nav-link" to="/join">Join</router-link>
          </li>
          <!--<li class="nav-item">-->
          <!--  <a class="nav-link disabled" aria-disabled="true">Disabled</a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </nav>

  <!-- 할인 배너 -->
  <DiscountBanner v-if="isDiscount === true"/>

  <!-- 라우터 -->
  <router-view :prodList="prodList" @closeDiscountBanner="isDiscount = false"
               @openDiscountBanner="isDiscount = true"></router-view>


</template>

<script>
// import List from "@/components/List.vue";
import prodList from "@/assets/prodList"
import DiscountBanner from "@/assets/DiscountBanner.vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'App',
  data() {
    return {
      prodList: prodList,
      isDiscount: true, // 할인 배너 노출 유무
    }
  },
  components: {
    DiscountBanner,
    // List
  },
  props: {},
  created() {
    console.log('App // created ::: ');
    console.log('this > ', this);
    // home 화면 진입 시 항상 할인배너 노출
    this.isDiscount = true;
  },
  mounted() {
    console.log('APP // mounted ::: ');


  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 10px;
}
</style>
