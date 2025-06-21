<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

function contactBtn() {
  console.log("ContactBtn");
}
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <Navbar />
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <Footer />
    </footer>

    <button
      @click="contactBtn"
      class="fixed cursor-pointer bottom-6 right-6 z-50 w-[50px] h-[50px] bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
      aria-label="連絡電話"
    >
      <span
        class="material-icons !text-xl group-hover:scale-110 transition-transform duration-300"
      >
        call
      </span>
    </button>
  </div>
</template>

<style scoped></style>
