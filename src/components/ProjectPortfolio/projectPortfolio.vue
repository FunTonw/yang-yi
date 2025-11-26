<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { categories } from "../../assets/json/category.json";
import { projects } from "../../assets/json/project.json";

const selectedcategories = ref(categories[0].title);
const selectedEncategories = ref(categories[0].Entitle);
const currentPage = ref(1);
const itemsPerPage = 5;
const filteredProjects = computed(() =>
  projects.filter((p) => p.categories === selectedcategories.value)
);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProjects.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.ceil(filteredProjects.value.length / itemsPerPage)
);

const pageNumbers = computed(() =>
  totalPages.value > 0
    ? Array.from({ length: totalPages.value }, (_, idx) => idx + 1)
    : []
);

watch(selectedcategories, () => {
  currentPage.value = 1;
});

watch(totalPages, (value) => {
  if (value > 0 && currentPage.value > value) {
    currentPage.value = value;
  }
});

function goToPage(page: number) {
  currentPage.value = page;
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
}
function changecategories(cat: { title: string; Entitle: string }) {
  selectedcategories.value = cat.title;
  selectedEncategories.value = cat.Entitle;
}

const route = useRoute();
onMounted(() => {
  const catQuery = route.query.cat as string | undefined;
  if (catQuery) {
    const found = categories.find(
      (c) => c.title === catQuery || c.en === catQuery
    );
    if (found) {
      selectedcategories.value = found.title;
      selectedEncategories.value = found.Entitle;
    }
  }
});
</script>
<template>
  <div
    class="py-16 px-4 sm:px-6 lg:px-8 mt-[102px] min-h-[calc(100vh)] max-w-7xl mx-auto"
  >
    <div
      class="flex flex-col justify-center items-center text-left mb-8 space-y-4"
    >
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
        {{ selectedcategories }}
      </h2>
      <div class="w-2 h-2 my-3 bg-blue-500 rounded-full"></div>
      <span class="text-sm lg:text-xl text-gray-600">
        {{ selectedEncategories }}
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
              :key="cat.title"
              @click="changecategories(cat)"
              :class="[
                selectedcategories === cat.title
                  ? 'bg-blue-100 text-blue-700 font-bold'
                  : 'text-gray-700 hover:bg-gray-100',
                'cursor-pointer rounded px-3 py-2 mb-1 transition',
              ]"
            >
              {{ cat.title }}
            </li>
          </ul>
        </div>
      </aside>
      <!-- 右側專案列表 -->
      <main class="flex-1">
        <div class="mx-auto pb-4">
          <div
            v-for="(item, idx) in paginatedProjects"
            :key="`${item.title}-${idx}`"
            class="flex flex-row items-center gap-6 mb-10 bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all"
          >
            <img
              v-if="item.img.length > 0"
              :src="item.img[0]"
              class="w-48 h-32 object-cover rounded-lg flex-shrink-0"
              :alt="item.title"
            />
            <div
              v-else
              class="w-48 h-32 object-cover rounded-lg flex-shrink-0"
            ></div>
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
          <nav
            v-if="totalPages > 1"
            class="flex flex-wrap justify-center items-center gap-2 mt-6 text-[12px]"
            aria-label="工程實績分頁"
          >
            <button
              type="button"
              class="flex items-center justify-center cursor-pointer w-[20px] h-[20px] rounded-full font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="currentPage === 1"
              @click="prevPage"
            >
              <span class="material-icons !text-[16px] leading-none"
                >keyboard_arrow_left</span
              >
            </button>
            <button
              v-for="page in pageNumbers"
              :key="page"
              type="button"
              class="cursor-pointer w-[20px] h-[20px] rounded-full font-medium transition"
              :class="{
                'bg-orange-500 text-white border-transparent':
                  currentPage === page,
                'text-gray-600 border-gray-300 hover:bg-gray-100':
                  currentPage !== page,
              }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <button
              type="button"
              class="flex items-center justify-center cursor-pointer w-[20px] h-[20px] text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="currentPage === totalPages"
              @click="nextPage"
            >
              <span class="material-icons !text-[16px] leading-none"
                >keyboard_arrow_right</span
              >
            </button>
          </nav>
        </div>
      </main>
    </div>
  </div>
</template>
