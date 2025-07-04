<script setup lang="ts">
const offices = [
  {
    img: "https://fastly.picsum.photos/id/0/600/600.jpg?hmac=mf_gGheS6UFfHNQMNJQ3U9leplbe-E15BPZEFA2F6iE",
    name: "桃園辦公室",
    address: "330桃園市桃園區永順街115號3樓",
    tel: "03-302-2782",
    fax: "03-302-2125",
  },
  {
    img: "https://fastly.picsum.photos/id/0/600/600.jpg?hmac=mf_gGheS6UFfHNQMNJQ3U9leplbe-E15BPZEFA2F6iE",
    name: "桃園辦公室",
    address: "330桃園市桃園區永順街115號3樓",
    tel: "03-302-2782",
    fax: "03-302-2125",
  },
];
</script>
<template>
  <div
    class="py-16 px-4 sm:px-6 lg:px-8 mt-[102px] min-h-[calc(100vh)] flex items-center"
  >
    <div class="max-w-4xl mx-auto w-full">
      <div class="flex items-center text-left mb-8 justify-start">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mr-4"
        >
          聯絡資訊
        </h2>
        <div class="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
        <span class="text-md lg:text-xl text-gray-600">Contact</span>
      </div>
      <div
        v-for="(office, idx) in offices"
        :key="idx"
        class="grid grid-cols-2 gap-12 mb-16"
      >
        <!-- Left: Image -->
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <!-- Left Column: Image and Title -->
          <div class="w-full flex-shrink-0">
            <img
              :src="office.img"
              alt="辦公室照片"
              class="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <!-- Right: Info -->
        <div class="md:w-2/3">
          <div
            class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-left flex items-center gap-2"
          >
            <span class="material-icons text-blue-500 text-3xl">business</span>
            {{ office.name }}
          </div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">地址</h2>
            <span class="text-lg">{{ office.address }}</span>
          </div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">電話</h2>
            <span class="text-lg">{{ office.tel }}</span>
          </div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">寫真</h2>
            <span class="text-lg">{{ office.fax }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
