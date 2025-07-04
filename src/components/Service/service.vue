<template>
  <div class="py-16 px-4 sm:px-6 lg:px-8 mt-[102px] min-h-[calc(100vh)]">
    <div class="mx-auto">
      <div class="flex flex-col justify-center items-center text-left">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          服務項目
        </h2>
        <div class="w-2 h-2 my-3 bg-blue-500 rounded-full"></div>
        <span class="text-md lg:text-xl text-gray-600"> Service </span>
      </div>
      <div class="min-h-screen flex items-center justify-center py-12 px-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          <div
            v-for="(card, idx) in cards"
            :key="idx"
            class="relative rounded-lg overflow-hidden shadow-lg group h-[300px] flex flex-col justify-end cursor-pointer"
            @click="goToPortfolio(card)"
          >
            <img
              :src="card.img"
              class="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500"
              :alt="card.title"
            />
            <div
              class="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/15 transition-all duration-500"
            ></div>
            <div class="relative z-20 flex flex-col h-full justify-between p-8">
              <div>
                <div class="text-white font-bold text-2xl">
                  {{ card.title }}
                </div>
                <div class="text-gray-200 text-xs mb-6 font-bold">
                  {{ card.Entitle }}
                </div>
              </div>
              <div class="flex items-end justify-between w-full">
                <div
                  class="text-white text-base font-medium leading-relaxed max-w-[80%]"
                >
                  {{ card.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function goToPortfolio(card: any) {
  // 對應分類英文查詢值
  const categoryMap: Record<string, string> = {
    結構工程: "BuildingStuctureEngineering",
    水土保持工程: "WaterSoilPalaning",
    水利工程: "HydraulicEngineering",
    橋梁工程: "BridgeEngineeringConsultant",
    專案管理: "ProjectConstructionManagement",
    地景工程: "LandScapeEngineering",
    社宅x耐震監督: "StuctureAccrediationBuilding",
  };
  const cat = categoryMap[card.title] || "";
  router.push({ path: "/projectPortfolio", query: { cat } });
}

const cards = [
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "結構工程",
    Entitle: "Building Stucture Engineering",
    desc: "提供建築結構設計、分析與安全評估，確保建築物穩固與耐用。",
  },
  {
    img: "https://fastly.picsum.photos/id/946/600/600.jpg?hmac=0RH9ovnE6cr8I6Mlz9UPB-X3JrjZXK0lBxVwSNx_ol8",
    title: "水土保持工程",
    Entitle: "Water&Soil Palaning",
    desc: "專注於防止水土流失，維護土地資源與生態環境。",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "水利工程",
    Entitle: "Hydraulic Engineering",
    desc: "規劃與設計各類水資源利用及防洪排水設施，提升水環境品質。",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "橋梁工程",
    Entitle: "Bridge Engineering Consultant",
    desc: "橋梁結構設計、檢測與維護，保障交通運輸安全。",
  },
  {
    img: "https://fastly.picsum.photos/id/946/600/600.jpg?hmac=0RH9ovnE6cr8I6Mlz9UPB-X3JrjZXK0lBxVwSNx_ol8",
    title: "專案管理",
    Entitle: "Project&Construction Management",
    desc: "整合規劃、設計、施工與監督，確保工程如期如質完成。",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "地景工程",
    Entitle: "LandScape Engineering",
    desc: "結合生態與美學，打造永續且具特色的景觀空間。",
  },
  {
    img: "https://fastly.picsum.photos/id/188/600/600.jpg?hmac=Itg2p6UT_1xDyBj3Bq0mU55qVLU1Mx2LnPVhkwxurAs",
    title: "社宅x耐震監督",
    Entitle: "Stucture Accrediation Building",
    desc: "專業社會住宅規劃與耐震安全監督，守護居住品質。",
  },
];
</script>
