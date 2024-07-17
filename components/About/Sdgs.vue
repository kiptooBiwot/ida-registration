<script setup>
const images = ref([
  { image: '/images/sdgs/1.png' },
  { image: '/images/sdgs/2.png' },
  { image: '/images/sdgs/6.png' },
  { image: '/images/sdgs/11.png' },
  { image: '/images/sdgs/13.png' },
])
</script>

<template>
  <div class="space-y-5">
    <h3 class="text-4xl text-[#673f7b] font-medium text-center">
      Sustainable Development Goals
    </h3>
    <p class="text-center">
      We are looking to collaborate with mutually interested farming partners
      from anywhere around the world. Here are the SDGs we cover.
    </p>

    <div
      class="grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-4 lg:grid-cols-5 max-w-3xl mx-auto"
    >
      <div v-for="(sdg, index) in images" :key="index">
        <img
          :src="sdg.image"
          alt=""
          class="w-full h-full md:w-32 md:h-32 object-cover shadow-md"
        />
      </div>
    </div>
  </div>
</template>
