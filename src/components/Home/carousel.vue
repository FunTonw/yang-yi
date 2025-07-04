<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// @ts-ignore
import "swiper/css";

const images = ref([
  "https://fastly.picsum.photos/id/387/1024/800.jpg?hmac=BC9BSApvjbtRfWjv9MFko1PwjA89fIwxMA744Tn4wgA",
  "https://fastly.picsum.photos/id/490/1024/800.jpg?hmac=ZZWzh6vapf-c2f-So9_G2HsXzSLdO7aOfb8injNbExw",
  "https://fastly.picsum.photos/id/445/1024/800.jpg?hmac=_i5EqFZc2txvI1C1MN48zAuPJq9mpVQOH9KFryjRuoY",
]);
</script>

<template>
  <section class="mt-[102px]">
    <h1
      class="sm:text-5xl text-xl font-serif text-gray-600 mb-4 text-start tracking-[3px]"
    >
      帶給您更完整的工程服務，
    </h1>
    <div class="rounded-2xl overflow-hidden">
      <Swiper
        :spaceBetween="0"
        :slides-per-view="1"
        class="w-full h-[calc(80dvh-102px)]"
        loop
        autoplay
      >
        <SwiperSlide v-for="img in images" :key="img" class="overflow-hidden">
          <img
            :src="img"
            class="w-full h-[calc(80dvh-102px)] object-cover kenburns"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@keyframes kenburns-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}
.kenburns {
  animation: kenburns-zoom 8s ease-in-out infinite alternate;
}
</style>
