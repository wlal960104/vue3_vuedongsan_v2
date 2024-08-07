<template>
  <!-- nav -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuedongsan</a>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="#">Home</a>
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

  <!-- 라우터 -->
  <router-view :prodList="prodList"></router-view>

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
      prodList: prodList
    }
  },

  components: {
    DiscountBanner,
    // List
  },
  props: {},
  mounted() {

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
