<script setup></script>

<template>
  <div class="grid grid-cols-12 md:gap-10">
    <div class="col-span-12 mb-10 mb:mb-0 md:col-span-4">
      <img
        src="/images/about-us/join-us.png"
        alt=""
        class="w-full border-[5px] object-cover border-white -rotate-0"
      />
    </div>
    <div class="col-span-12 md:col-span-8">
      <div class="space-y-4 text-center">
        <h3 class="text-white text-3xl md:text-4xl tracking-[2px]">
          Join the Community.
        </h3>
        <p class="text-white">
          Take the first step towards a brighter, more sustainable future with
          AVN. Join us now and become a part of a revolutionary network that’s
          changing the face of agriculture. Click the button below to join the
          revolution and start your journey with AVN today.
        </p>
      </div>

      <div class="flex justify-center mt-5">
        <NuxtLink
          to="/registration"
          class="px-8 py-4 rounded-lg text-white bg-purple-600 uppercase text-sm font-medium tracking-[2px] hover:bg-purple-500 hover:shadow-xl"
        >
          Join the Revolution
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
