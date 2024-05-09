<script setup>

</script>

<template>
  <div class="">
    <div class="relative flex justify-between py-[2px] max-w-6xl items-center container mx-auto px-5 md:px-0">
      <NuxtLink to="/">
        <div class="flex gap-1 items-center">
          <img src="/images/logo_bg.png" alt="" class="w-14 h-14 md:w-20 md:h-20 object-cover">
          <h2 class="font-medium text-lg md:text-xl text-[#673F7B]">Invictus Development Africa </h2>
        </div>
      </NuxtLink>
      <div>
        <ul class="flex gap-3 text-md md:font-normal md:gap-6 items-center font-medium">
          <NuxtLink to="/">
            <li>Home</li>
          </NuxtLink>
          <NuxtLink to="/registration">
            <li>Register</li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </div>
</template>
