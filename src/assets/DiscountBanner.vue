<template>
  <div class="container">
    <div class="discount">
      <div class="alert alert-primary alert-dismissible" role="alert">
        🔔 지금 결제하면 <span class="fw-bold">{{ percentage }}%</span> 할인
        <button aria-label="Close" class="btn-close" data-bs-dismiss="alert" type="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscountBanner',
  data() {
    return {
      percentage: 10 // 할인률
    }
  },
  methods : {

  },
  mounted() {
    // 10초에 1% 감소, 0되면 stop
    const decPercentage = setInterval(() => {
      this.percentage--;
      if (this.percentage === 0) {
        clearInterval(decPercentage);
      }
    }, 1000);
  }
}
</script>

<style>
.discount {
  margin-top: 20px;
}
</style>