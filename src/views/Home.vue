<script setup lang="ts">
import ContactUs from "../components/Home/contactUs.vue";
import Carousel from "../components/Home/carousel.vue";
import Perfomance from "../components/Home/perfomance.vue";
import Service from "../components/Home/service.vue";
</script>

<template>
  <div class="home">
    <h2>Welcome to Yang Yi</h2>
    <Carousel />
    <Perfomance />
    <Service />
    <ContactUs />
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
</style>
