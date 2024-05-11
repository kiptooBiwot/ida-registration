<script setup>

</script>

<template>
  <!-- component -->
<footer class="bg-[#673F7B] text-white">
    <div class="container px-6 py-8 mx-auto">
        <!-- <div class="flex flex-col items-center text-center">
            <NuxtLink to="/">
        <div class="flex gap-1 items-center">
          <img src="/images/logo_bg.png" alt="" class="w-14 h-14 md:w-20 md:h-20 object-cover">
          <h2 class="text-base font-semibold md:text-xl md:font-medium text-white">Invictus <br class="block md:hidden"> Development Africa </h2>
        </div>
      </NuxtLink>

            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div> -->

        <!-- <hr class="my-10 border-gray-200 " /> -->

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-white">© Copyright {{ new Date().getFullYear() }} All Rights Reserved.</p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-100" aria-label="Reddit"> Terms </a>

                <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-100 " aria-label="Reddit"> Privacy </a>

                <!-- <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-100 " aria-label="Reddit"> Cookies </a> -->
            </div>
        </div>
    </div>
</footer>
</template>