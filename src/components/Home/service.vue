<script setup lang="ts">
const markets = [
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "結構工程",
    Entitle: "Building Stucture Engineering",
  },
  {
    img: "https://fastly.picsum.photos/id/946/600/600.jpg?hmac=0RH9ovnE6cr8I6Mlz9UPB-X3JrjZXK0lBxVwSNx_ol8",
    title: "水土保持工程",
    Entitle: "Water&Soil Palaning",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "水利工程",
    Entitle: "Hydraulic Engineering",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "橋梁工程",
    Entitle: "Bridge Engineering Consultant",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "專案管理",
    Entitle: "Project&Construction Management",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "地景工程",
    Entitle: "LandScape Engineering",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "社宅x耐震監督",
    Entitle: "Stucture Accrediation Building",
  },
];
</script>

<template>
  <div class="mx-auto py-8">
    <div class="mb-12">
      <div class="flex items-center text-left mb-8">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mr-4"
        >
          服務項目
        </h2>
        <div class="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
        <span class="text-md lg:text-xl text-gray-600"> Our Services </span>
      </div>

      <!-- 公司理念文字 -->
      <div
        class="sm:max-w-[60%] max-w-[100%] text-start sm:text-3xl text-lg text-gray-600 mb-8 leading-[2rem] sm:leading-[2.6rem]"
      >
        以品質及信譽為本，秉持專業熱忱，<br />運用有效且快速的決策，圓滿達成業主託付。
      </div>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12 lg:gap-20"
    >
      <div
        v-for="(market, idx) in markets"
        :key="idx"
        class="flex flex-col items-center cursor-pointer group"
      >
        <img
          :src="market.img"
          :alt="market.title"
          class="w-full aspect-[4/3] object-cover rounded-xl transition-all duration-300 hover:rounded-3xl shadow"
        />
        <div
          class="mt-3 sm:text-xl text-md text-black group-hover:text-gray-600 font-bold transition-all duration-300"
        >
          {{ market.title }}
        </div>
        <div class="sm:text-md text-sm text-gray-600">
          {{ market.Entitle }}
        </div>
      </div>

      <!-- 查看更多卡片 -->
      <div class="flex flex-col items-center justify-center">
        <div
          class="flex flex-col items-center justify-center cursor-pointer group"
        >
          <span
            class="material-icons text-gray-600 group-hover:text-gray-700 !text-5xl mb-2 group-hover:scale-110 transition-all duration-300"
          >
            arrow_circle_right
          </span>
          <div class="text-md font-semibold text-gray-1000 font-bold">
            更多服務
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
