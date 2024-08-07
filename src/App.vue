<template>
 <!-- nav -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuedongsan</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <!--<li class="nav-item">-->
          <!--  <a class="nav-link" href="#">Products</a>-->
          <!--</li>-->
          <li class="nav-item">
            <a class="nav-link" href="#">Join</a>
          </li>
          <!--<li class="nav-item">-->
          <!--  <a class="nav-link disabled" aria-disabled="true">Disabled</a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </nav>

  <!-- 할인 배너 -->
  <DiscountBanner/>

  <!-- 부동산 리스트 -->
  <List :prodList="prodList"/>


</template>

<script>
import List from "@/components/List.vue";
import prodList from "@/assets/prodList"
import DiscountBanner from "@/assets/DiscountBanner.vue";

export default {
  name : 'App',
  data() {
    return {
      prodList: prodList
    }
  },

  components: {
    DiscountBanner,
    List
  },
  props : {

  }
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
