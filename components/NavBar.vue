<script setup>

</script>

<template>
  <div class="">
    <div class="relative flex justify-between py-[2px] max-w-6xl items-center container mx-auto px-5 md:px-0">
      <NuxtLink to="/">
        <div class="flex gap-1 items-center">
          <img src="/images/logo_bg.png" alt="" class="w-14 h-14 md:w-20 md:h-20 object-cover">
          <h2 class="text-base font-semibold md:text-xl md:font-medium text-[#673F7B]">Invictus <br class="block md:hidden"> Development Africa </h2>
        </div>
      </NuxtLink>
      <div>
        <ul class="flex gap-3 text-sm md:font-normal md:gap-6 items-center font-medium text-gray-600 uppercase">
          <NuxtLink to="/" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline">
            <li>Home</li>
          </NuxtLink>
          <NuxtLink to="/#about-us" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline">
            <li>About Us</li>
          </NuxtLink>

          <NuxtLink to="/registration" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline">
            <li>Register</li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </div>
</template>
