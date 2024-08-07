<template>
  <main>
    <div class="album pt-2 pb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div v-for="(data,i) in prodList" :key="i" class="col">
            <div @click="goDetail(i)" class="card shadow-sm pe-auto">
              <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" focusable="false"
                   height="225"
                   preserveAspectRatio="xMidYMid slice" role="img" width="100%"
                   xmlns="http://www.w3.org/2000/svg"><title>{{ data.title }}</title>
                <rect fill="#A9A9A9" height="100%" width="100%"/>
                <image :href="data.image" height="100%"/>
                <!--<text dy=".3em" fill="#eceeef" x="50%" y="50%">Thumbnail</text>-->
              </svg>
              <div class="card-body">
                <p class="card-text">{{ data.title }}</p>
                <p>{{data.content}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button @click.stop="report(data)" class="btn btn-danger btn-sm">신고</button>
                  </div>
                  <small class="report-num">신고수 : {{ data.report }}</small>
                  <small class="text-body-secondary ms-auto">{{ data.price }}원</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>

</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      isReport : false
    }
  },
  props: {
    prodList: Array
  },
  methods : {
    // [신고] 버튼 클릭
    report (data) {
      console.log('신고 버튼 클릭');
      if (this.isReport === false) {
        data.report++
        this.isReport = true;
      } else {
        data.report--
        this.isReport = false;
      }
    },
    goDetail(id) {
      console.log('goDetail ::: ', id)

    }
  }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}

.report-num {
  margin-left: 10px;
}
</style>