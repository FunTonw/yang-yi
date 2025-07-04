<template>
  <div class="py-16 mt-[102px] min-h-[calc(100vh)] flex items-center">
    <div class="mx-auto w-full">
      <div
        class="flex flex-col justify-center items-center text-left mb-8 px-4 sm:px-6 lg:px-8"
      >
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          招募人才
        </h2>
        <div class="w-2 h-2 my-3 bg-blue-500 rounded-full"></div>
        <span class="text-sm lg:text-xl text-gray-600"> Join Us </span>
      </div>
      <!-- 上半部：團隊資訊 -->
      <section class="max-w-4xl mx-auto px-4 py-10">
        <div class="w-full mb-4">
          <img
            src="https://fastly.picsum.photos/id/522/800/300.jpg?hmac=qXyrIsAXQGetviUummDPu4E5MAXwUlwBOb1fGxFMr5o"
            alt="Banner"
            class="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
        <p class="text-gray-700 mb-8">
          「誠信、勤勉、技術本位」為提昇工作品質的最高原則，「追求精益求精的工程品質」是本公司宗旨。
          <!-- 這裡放你的介紹文字 -->
        </p>
        <div class="grid grid-cols-4 gap-4 text-center mb-8">
          <div>
            <div class="text-3xl font-bold">31</div>
            <div class="text-xs text-gray-500 mt-1">COLLABORATEURS</div>
          </div>
          <div>
            <div class="text-3xl font-bold">40</div>
            <div class="text-xs text-gray-500 mt-1">ÂGE MOYEN</div>
          </div>
          <div>
            <div class="text-3xl font-bold">30%</div>
            <div class="text-xs text-gray-500 mt-1">HOMMES</div>
          </div>
          <div>
            <div class="text-3xl font-bold">70%</div>
            <div class="text-xs text-gray-500 mt-1">FEMME</div>
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-2">獎金 / 禮品類</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>年終獎金</li>
            <li>三節禮金/禮品</li>
          </ul>
        </div>
        <div class="mt-4">
          <h3 class="font-semibold mb-2">保險類</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>勞保</li>
            <li>健保</li>
            <li>意外險</li>
          </ul>
        </div>
        <div class="mt-4">
          <h3 class="font-semibold mb-2">制度類</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>上/下班時間:8:30~12:00,13:30~18:00</li>
            <li>完整的教育訓練</li>
            <li>退休金提撥(依政府規定)</li>
          </ul>
        </div>
        <div class="mt-4">
          <h3 class="font-semibold mb-2">請 / 休假制度</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li>週休二日</li>
            <li>特休/年假</li>
            <li>午休1.5小時</li>
          </ul>
        </div>
      </section>

      <!-- 下半部：背景圖＋卡片 -->
      <section
        class="relative h-[600px] mt-10 flex items-center justify-center"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover brightness-75 blur-[1px] -z-10"
          src="https://fastly.picsum.photos/id/166/1240/1080.jpg?hmac=F66rHb0XFlokPKGGTiMjYxOPvc_CgrX4s0-Vaf-uTiw"
          alt="background"
        />
        <div
          class="bg-white/90 rounded-xl shadow-lg px-8 py-8 min-w-[320px] text-center flex flex-col items-center"
        >
          <div class="font-bold text-2xl mb-2">LOGO</div>
          <h3 class="text-lg font-semibold mb-2">
            我們正在尋找志同道合的夥伴！
          </h3>
          <p class="text-gray-600 mb-4 text-sm">了解更多招募資訊</p>
          <a
            href="https://www.104.com.tw/company/1a2x6bjheg?jobsource=yahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="mt-2 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
            >
              104 人力銀行
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
