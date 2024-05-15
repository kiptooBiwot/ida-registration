<script setup>
const atTopOfPage = ref(true)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (window.scrollY > 0) {
    if (atTopOfPage.value) atTopOfPage.value = false
  } else {
    if (!atTopOfPage.value) atTopOfPage.value = true
  }
}

</script>

<template>
    <nav :class="{ 'scrolled': !atTopOfPage }" class="w-full">
      <div  class="relative flex justify-between py-[2px] max-w-6xl items-center mx-5 lg:mx-auto md:px-0">
        <NuxtLink to="/">
          <div class="flex gap-1 items-center">
            <img src="/images/logo_bg.png" alt="" class="w-14 h-14 md:w-20 md:h-20 object-cover" :class="{'scrolled' : atTheTopOfPage}">
            <img src="/images/logo_white.png" alt="" class="w-14 h-14 md:w-20 md:h-20 object-cover block" :class="{'scrolled' : !atTheTopOfPage}">
            <h2 class="text-base font-semibold md:text-xl md:font-medium text-gray-50" :class="{ 'scrolled': !atTopOfPage }">Invictus <br class="block md:hidden"> Development Africa </h2>
          </div>
        </NuxtLink>
        <div>
          <ul class="flex gap-3 text-sm md:font-normal md:gap-6 items-center font-medium text-gray-50 uppercase" :class="{ 'scrolled': !atTopOfPage }">
            <NuxtLink to="/#home" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline">
              <li>Home</li>
            </NuxtLink>
            <NuxtLink to="/#about-us" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline">
              <li>About Us</li>
            </NuxtLink>
            <NuxtLink to="/registration" class="hover:scale-105 transition ease-in-out duration-300 hover:text-purple-700 hover:underline hidden md:block">
              <li>Register</li>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
</template>


<style scoped>
nav.scrolled {
  /* background: white; */
  @apply shadow-lg;
  @apply bg-purple-100 transition ease-in-out duration-500;
  /* border-bottom: 0px; */
}

h2.scrolled {
  @apply text-[#673F7B];
}

ul.scrolled {
  @apply text-gray-600;
}

img.scrolled {
  @apply hidden;
}

</style>