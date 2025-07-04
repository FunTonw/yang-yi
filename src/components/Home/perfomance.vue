<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const cards = ref([
  {
    img: "https://fastly.picsum.photos/id/0/600/600.jpg?hmac=mf_gGheS6UFfHNQMNJQ3U9leplbe-E15BPZEFA2F6iE",
    title: "鶯歌核心區人行環境工程",
    desc: "新北市鶯歌區鶯歌老街",
    date: "109年-112年",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "桃園市提升道路品質前瞻計畫2.0「舊司法園區」",
    desc: "桃園市桃園區",
    date: "110年-112年",
  },
  {
    img: "https://fastly.picsum.photos/id/946/600/600.jpg?hmac=0RH9ovnE6cr8I6Mlz9UPB-X3JrjZXK0lBxVwSNx_ol8",
    title: "桃園市中壢區中央大學環校道路AC路面改善工程",
    desc: "桃園市中壢區中央大學",
    date: "110年-112年",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "新北市鶯歌區三鶯文創整合計畫「館前路人本友善暨藝術廊道再造工程」",
    desc: "新北市鶯歌區館前路",
    date: "110年-111年",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "桃園市提升道路品質前瞻計畫2.0「舊司法園區」",
    desc: "桃園市桃園區",
    date: "110年-112年",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "鶯歌核心區人行環境工程",
    desc: "新北市鶯歌區鶯歌老街",
    date: "109年-112年",
  },
]);

const perfomanceSwiper = ref<SwiperType | null>(null);

function onSwiper(swiper: SwiperType) {
  perfomanceSwiper.value = swiper;
  console.log(perfomanceSwiper.value);
  if (perfomanceSwiper.value) {
    perfomanceSwiper.value.autoplay.start();
  }
}

onMounted(() => {});
</script>

<template>
  <div class="mt-16 sm:mt-20 lg:mt-24 py-4">
    <div class="mb-12">
      <div class="flex items-center text-left mb-8">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mr-4"
        >
          工程實績
        </h2>
        <div class="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
        <span class="text-md lg:text-xl text-gray-600">Project Portfolio</span>
      </div>
    </div>
    <Swiper
      :slides-per-view="1"
      :space-between="16"
      :loop="true"
      :speed="3000"
      :modules="[Autoplay]"
      :autoplay="{ delay: 1000 }"
      @swiper="onSwiper"
      class="w-full"
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }"
    >
      <SwiperSlide v-for="(card, idx) in cards" :key="idx">
        <div
          class="bg-white rounded-xl transition-all duration-300 p-3 sm:p-4 max-w-sm mx-auto cursor-pointer"
        >
          <img
            :src="card.img"
            class="w-full aspect-[4/3] object-cover rounded-lg sm:rounded-xl transition-all duration-300 hover:rounded-3xl"
            :alt="card.title || 'Performance card image'"
          />
          <div class="mt-3 sm:mt-4 px-1 sm:px-2">
            <div class="text-gray-400 text-xs sm:text-sm mb-4 text-left">
              {{ card.date }}
            </div>
            <div
              v-if="card.title"
              class="font-bold mb-1 text-sm sm:text-base line-clamp-2 text-left"
            >
              {{ card.title }}
            </div>
            <div
              v-if="card.desc"
              class="text-gray-500 text-xs sm:text-sm mb-2 line-clamp-3 text-left"
            >
              {{ card.desc }}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
