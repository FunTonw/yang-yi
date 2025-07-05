<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

const menus = ref([
  {
    name: "關於洋億",
    link: "#",
    subItems: [
      { name: "公司簡介", link: "/company" },
      { name: "遠景與使命 ", link: "/vision" },
      { name: "團隊介紹", link: "/teammate" },
    ],
  },
  {
    name: "服務項目",
    link: "/service",
  },
  {
    name: "工程實績",
    link: "/projectPortfolio",
    subItems: [
      {
        name: "結構工程",
        link: "/projectPortfolio?cat=BuildingStuctureEngineering",
      },
      { name: "水土保持工程", link: "/projectPortfolio?cat=WaterSoilPalaning" },
      { name: "水利工程", link: "/projectPortfolio?cat=HydraulicEngineering" },
      {
        name: "橋梁工程",
        link: "/projectPortfolio?cat=BridgeEngineeringConsultant",
      },
      {
        name: "專案管理",
        link: "/projectPortfolio?cat=ProjectConstructionManagement",
      },
      { name: "地景工程", link: "/projectPortfolio?cat=LandScapeEngineering" },
      {
        name: "社宅x耐震監督",
        link: "/projectPortfolio?cat=StuctureAccrediationBuilding",
      },
    ],
  },
  {
    name: "最新消息",
    link: "/news",
    subItems: [
      { name: "重要公告", link: "/news?cat=ImportantNotice" },
      { name: "公司活動", link: "/news?cat=CompanyEvent" },
      { name: "工程查核", link: "/news?cat=ProjectAudit" },
      { name: "工程督導", link: "/news?cat=ProjectSupervision" },
    ],
  },
  {
    name: "聯絡我們",
    link: "#",
    subItems: [
      { name: "人才招募", link: "/joinus" },
      { name: "聯絡資訊", link: "/contact" },
    ],
  },
]);

// Navbar 效果
const showNavbar = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > 50) {
    // 下滑，隱藏
    showNavbar.value = false;
  } else {
    // 上滑，顯示
    showNavbar.value = true;
  }
  lastScrollY = currentY;
};

// 下拉選單控制
const activeMenu = ref<string | null>(null);
let closeTimeout: number | null = null;

const openSubmenu = (menuName: string) => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  activeMenu.value = menuName;
};

const closeSubmenu = () => {
  closeTimeout = window.setTimeout(() => {
    activeMenu.value = null;
  }, 200);
};

// 移動端選單控制
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// 移動端子選單控制
const activeMobileSubmenu = ref<string | null>(null);
const toggleMobileSubmenu = (menuName: string) => {
  activeMobileSubmenu.value =
    activeMobileSubmenu.value === menuName ? null : menuName;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  document.body.style.overflow = "";
});
</script>

<template>
  <nav
    class="flex items-center justify-between px-4 md:px-[3rem] h-[70px] md:h-[102px] bg-white fixed top-0 left-0 w-full z-50 transition-transform duration-500"
    :class="showNavbar ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="flex flex-col items-start">
      <span class="text-xs text-orange-500 tracking-widest font-bold ml-1"
        >LOGO</span
      >
    </div>

    <button
      @click="toggleMobileMenu"
      class="md:hidden p-2"
      aria-label="Toggle menu"
    >
      <div class="w-6 h-5 relative flex flex-col justify-between">
        <span
          class="w-full h-0.5 bg-gray-800 transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
        ></span>
        <span
          class="w-full h-0.5 bg-gray-800 transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        ></span>
        <span
          class="w-full h-0.5 bg-gray-800 transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
        ></span>
      </div>
    </button>

    <ul class="hidden md:flex items-center gap-7 font-bold">
      <li v-for="menu in menus" :key="menu.name" class="relative group">
        <router-link
          :to="menu.link"
          class="text-navbarText hover:text-orange-500 transition flex items-center gap-1 tracking-[2px]"
          @mouseenter="openSubmenu(menu.name)"
          @mouseleave="closeSubmenu"
        >
          {{ menu.name }}
        </router-link>
        <ul
          v-if="activeMenu === menu.name && menu.subItems"
          class="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
          @mouseenter="openSubmenu(menu.name)"
          @mouseleave="closeSubmenu"
        >
          <li v-for="subItem in menu.subItems" :key="subItem.name">
            <router-link
              :to="subItem.link"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
            >
              {{ subItem.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>

    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-opacity-50 z-40 md:hidden"
      @click="toggleMobileMenu"
    ></div>
    <div
      class="fixed top-[70px] md:top-[102px] right-0 w-[280px] h-[calc(100vh-70px)] md:h-[calc(100vh-102px)] bg-white transform transition-transform duration-300 ease-in-out z-50 md:hidden"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <ul class="p-4 space-y-2">
        <li v-for="menu in menus" :key="menu.name">
          <div class="flex items-center justify-between">
            <router-link
              :to="menu.link"
              class="text-gray-800 font-bold hover:text-orange-500 transition"
            >
              {{ menu.name }}
            </router-link>
            <button
              v-if="menu.subItems"
              @click="toggleMobileSubmenu(menu.name)"
              class="p-2"
            >
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeMobileSubmenu === menu.name }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <ul
            v-if="menu.subItems && activeMobileSubmenu === menu.name"
            class="pl-4 mt-2 space-y-2"
          >
            <li v-for="subItem in menu.subItems" :key="subItem.name">
              <router-link
                :to="subItem.link"
                class="block py-2 text-sm text-gray-600 hover:text-orange-500 transition"
              >
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
