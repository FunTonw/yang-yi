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
            v-for="(card, idx) in categories"
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
import { categories } from "../../assets/json/category.json";
const router = useRouter();

function goToPortfolio(card: {
  img: string;
  title: string;
  Entitle: string;
  desc: string;
}) {
  // 對應分類英文查詢值
  const categoryMap: Record<string, string> = {
    結構工程: "BuildingStuctureEngineering",
    水土保持工程: "WaterSoilPalaning",
    橋梁工程: "BridgeEngineeringConsultant",
    專案管理: "ProjectConstructionManagement",
    地景工程: "LandScapeEngineering",
    社宅x耐震監督: "StuctureAccrediationBuilding",
    防水工程: "WaterProofingEngineering",
    "土木水利工程(開口合約)": "HydraulicEngineering",
    道路工程: "HighwayConstruction",
  };
  const cat = categoryMap[card.title] || "";
  router.push({ path: "/projectPortfolio", query: { cat } });
}
</script>
