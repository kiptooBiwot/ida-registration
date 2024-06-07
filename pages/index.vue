<script setup>
definePageMeta({
  layout: 'maintenance',
})
</script>
<template>
  <div
    class="w-full h-screen flex items-center bg-gradient-to-r from-[#381E4F] to-[#1B2E5F] min-h-screen"
  >
    <div class="max-w2xl mx-auto md:mx-auto space-y-5">
      <h1 class="text-white text-4xl font-title">
        This site is under maintenance. Try again later.
      </h1>
      <div>
        <img src="/images/maintenance.svg" alt="" class="w-[400px] mx-auto" />
      </div>
    </div>
  </div>
</template>
