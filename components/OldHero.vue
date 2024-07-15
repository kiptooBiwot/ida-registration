<script setup></script>

<template>
  <div>
    <section
      id="home"
      class="flex items-center bg-gradient-to-r from-[#381E4F] to-[#1B2E5F] min-h-screen"
    >
      <div
        class="mx-10 mt-[100px] md:mt-0 max-w-6xl xl:mx-auto grid grid-cols-2 h-full"
      >
        <div class="col-span-12 md:col-span-1 h-full flex items-center">
          <div class="w-fit ml-0 space-y-10">
            <!-- <h1 class="font-semibold text-gray-50 text-3xl md:text-5xl">Harnessing the <span class="text-blue-400">Power of
                Digitization</span>
              through Regenerative
              Agriculture and
              Circular Value-Chains</h1> -->
            <div class="space-y-5">
              <h1 class="font-semibold text-gray-50 text-5xl md:text-6xl">
                Building a <span class="text-blue-400">Thriving</span> Future
                Where <span class="text-blue-400">Design</span> Meets
                <span class="text-blue-400">Circularity</span>
              </h1>
              <h3 class="font-medium text-lg md:text-2xl text-gray-100">
                Reimagine. Redesign. Regenerate.
              </h3>
            </div>
            <div class="">
              <NuxtLink
                to="/registration"
                class="py-3 px-6 text-sm md:py-4 md:px-8 rounded-md bg-[#673F7B] text-white uppercase"
              >
                Register
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-1 flex items-center justify-center md:justify-end"
        >
          <!-- <div class="flex items-center justify-center"> -->
          <!-- <img src="/images/hero_logo_1.svg" alt="" class="w-[300px] h-[300px] md:w-[450px] md:h-[400px]"> -->
          <!-- </div> -->
          <img
            src="/images/hero-img.png"
            alt=""
            class="object-fit w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  </div>
</template>
