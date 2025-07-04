<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const categories = [
  { name: "重要公告", en: "ImportantNotice" },
  { name: "公司活動", en: "CompanyEvent" },
  { name: "工程查核", en: "ProjectAudit" },
  { name: "工程督導", en: "ProjectSupervision" },
];

const newsList = [
  {
    title: "2024年度重要公告發布",
    date: "2024-06-01",
    desc: "本公司2024年度重要公告已於今日正式發布，請全體同仁留意相關內容。",
    category: "重要公告",
  },
  {
    title: "員工旅遊活動圓滿結束",
    date: "2024-05-20",
    desc: "感謝所有參與員工旅遊的同仁，活動照片已上傳至內部網站。",
    category: "公司活動",
  },
  {
    title: "新工程查核制度上路",
    date: "2024-05-10",
    desc: "自本月起，工程查核將採用新制度，詳情請參閱內部公告。",
    category: "工程查核",
  },
  {
    title: "督導團隊巡查成果報告",
    date: "2024-04-28",
    desc: "本月督導團隊已完成多項工程巡查，相關成果已彙整成報告。",
    category: "工程督導",
  },
  {
    title: "年度消防演練公告",
    date: "2024-04-15",
    desc: "年度消防演練將於下週舉行，請各部門配合參與。",
    category: "重要公告",
  },
];

const selectedCategory = ref(categories[0].name);
const filteredNews = computed(() =>
  newsList.filter((n) => n.category === selectedCategory.value)
);

const route = useRoute();
onMounted(() => {
  const catQuery = route.query.cat as string | undefined;
  if (catQuery) {
    const found = categories.find((c) => c.en === catQuery);
    if (found) {
      selectedCategory.value = found.name;
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
      <span class="text-sm lg:text-xl text-gray-600"> News </span>
    </div>
    <div class="flex flex-row gap-8">
      <!-- 左側分類navbar -->
      <aside class="w-56 flex-shrink-0">
        <div class="bg-white rounded-xl shadow p-4">
          <div class="font-bold text-lg mb-4 text-gray-700">最新消息分類</div>
          <ul>
            <li
              v-for="cat in categories"
              :key="cat.name"
              @click="selectedCategory = cat.name"
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
      <!-- 右側新聞列表 -->
      <main class="flex-1">
        <div class="max-w-3xl mx-auto pb-4">
          <div
            v-if="filteredNews.length === 0"
            class="text-gray-400 text-center py-12"
          >
            暫無消息
          </div>
          <div v-else>
            <div
              v-for="(item, idx) in filteredNews"
              :key="idx"
              class="flex flex-row items-center py-6 border-b border-dashed border-gray-300 cursor-pointer group"
            >
              <div class="text-gray-400 text-sm w-32 flex-shrink-0">
                {{ item.date }}
              </div>
              <div
                class="text-gray-800 text-base font-medium relative overflow-hidden"
              >
                <span
                  class="inline-block font-bold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:w-0 group-hover:after:w-full after:transition-all after:duration-300"
                >
                  {{ item.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
