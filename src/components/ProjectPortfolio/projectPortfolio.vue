<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const categories = [
  {
    name: "結構工程",
    EnName: "Building Stucture Engineering",
    en: "BuildingStuctureEngineering",
  },
  {
    name: "水土保持工程",
    EnName: "Water&Soil Palaning",
    en: "WaterSoilPalaning",
  },
  {
    name: "水利工程",
    EnName: "Hydraulic Engineering",
    en: "HydraulicEngineering",
  },
  {
    name: "橋梁工程",
    EnName: "Bridge Engineering Consultant",
    en: "BridgeEngineeringConsultant",
  },
  {
    name: "專案管理",
    EnName: "Project&Construction Management",
    en: "ProjectConstructionManagement",
  },
  {
    name: "地景工程",
    EnName: "LandScape Engineering",
    en: "LandScapeEngineering",
  },
  {
    name: "社宅x耐震監督",
    EnName: "Stucture Accrediation Building",
    en: "StuctureAccrediationBuilding",
  },
];

const projects = [
  {
    img: "https://fastly.picsum.photos/id/0/600/600.jpg?hmac=mf_gGheS6UFfHNQMNJQ3U9leplbe-E15BPZEFA2F6iE",
    title: "鶯歌核心區人行環境工程",
    desc: "新北市鶯歌區鶯歌老街",
    date: "109年-112年",
    category: "結構工程",
  },
  {
    img: "https://fastly.picsum.photos/id/570/600/600.jpg?hmac=n0I3nHroHX3een5mn5QbAB_DvEcGQrHrjEgdMqYfmGw",
    title: "桃園市提升道路品質前瞻計畫2.0「舊司法園區」",
    desc: "桃園市桃園區",
    date: "110年-112年",
    category: "水土保持工程",
  },
  {
    img: "https://fastly.picsum.photos/id/946/600/600.jpg?hmac=0RH9ovnE6cr8I6Mlz9UPB-X3JrjZXK0lBxVwSNx_ol8",
    title: "桃園市中壢區中央大學環校道路AC路面改善工程",
    desc: "桃園市中壢區中央大學",
    date: "110年-112年",
    category: "水利工程",
  },
  // ...可自行擴充更多假資料
];

const selectedCategory = ref(categories[0].name);
const selectedEnCategory = ref(categories[0].EnName);
const filteredProjects = computed(() =>
  projects.filter((p) => p.category === selectedCategory.value)
);
function changeCategory(cat: { name: string; EnName: string }) {
  selectedCategory.value = cat.name;
  selectedEnCategory.value = cat.EnName;
}

const route = useRoute();
onMounted(() => {
  const catQuery = route.query.cat as string | undefined;
  if (catQuery) {
    const found = categories.find(
      (c) => c.name === catQuery || c.en === catQuery
    );
    if (found) {
      selectedCategory.value = found.name;
      selectedEnCategory.value = found.EnName;
    }
  }
});
</script>
<template>
  <div
    class="py-16 px-4 sm:px-6 lg:px-8 mt-[102px] min-h-[calc(100vh)] max-w-7xl mx-auto"
  >
    <div class="flex flex-col justify-center items-center text-left mb-8">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
        {{ selectedCategory }}
      </h2>
      <div class="w-2 h-2 my-3 bg-blue-500 rounded-full"></div>
      <span class="text-sm lg:text-xl text-gray-600">
        {{ selectedEnCategory }}
      </span>
    </div>
    <div class="flex flex-row gap-8">
      <!-- 左側側邊欄 -->
      <aside class="w-56 flex-shrink-0">
        <div class="bg-white rounded-xl shadow p-4">
          <div class="font-bold text-lg mb-4 text-gray-700">工程實績分類</div>
          <ul>
            <li
              v-for="cat in categories"
              :key="cat.name"
              @click="changeCategory(cat)"
              :class="[
                selectedCategory === cat.name
                  ? 'bg-blue-100 text-blue-700 font-bold'
                  : 'text-gray-700 hover:bg-gray-100',
                'cursor-pointer rounded px-3 py-2 mb-1 transition',
              ]"
            >
              {{ cat.name }}
            </li>
          </ul>
        </div>
      </aside>
      <!-- 右側專案列表 -->
      <main class="flex-1">
        <div class="mx-auto pb-4">
          <div
            v-for="(item, idx) in filteredProjects"
            :key="idx"
            class="flex flex-row items-center gap-6 mb-10 bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all"
          >
            <img
              :src="item.img"
              class="w-48 h-32 object-cover rounded-lg flex-shrink-0"
              :alt="item.title"
            />
            <div class="flex flex-col justify-center">
              <div class="text-gray-400 text-xs mb-1">{{ item.date }}</div>
              <div class="font-bold text-lg mb-1">{{ item.title }}</div>
              <div class="text-gray-500 text-sm">{{ item.desc }}</div>
            </div>
          </div>
          <div
            v-if="filteredProjects.length === 0"
            class="text-gray-400 text-center py-12"
          >
            暫無資料
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
