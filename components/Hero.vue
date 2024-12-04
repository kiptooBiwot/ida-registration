<script setup></script>

<template>
  <div>
    <section
      id="home"
      class="flex items-center bg-gradient-to-r from-[#381E4F] to-[#1B2E5F] min-h-screen"
    >
      <div
        class="mx-5 md:mx-10 mt-[100px] md:mt-0 max-w-6xl xl:mx-auto grid grid-cols-2 h-full"
      >
        <div class="col-span-12 md:col-span-1 h-full flex items-center">
          <div class="w-fit ml-0 space-y-10">
            <div class="space-y-5">
              <h1
                class="font-bold text-gray-50 text-3xl md:text-5xl tracking-[3px]"
              >
                Harnessing the
                <span class="text-blue-400">Power of Digitisation</span> through
                Regenerative Agriculture and Circular Value-Chains
              </h1>
              <p class="text-white text-sm md:text-lg leading-8">
                Are you ready to revolutionise the way you farm? Welcome to AVN.
                Transforming the future of farming to create a sustainable and
                profitable farming ecosystem.
              </p>
            </div>
            <div class="">
              <NuxtLink
                to="/registration"
                class="py-3 px-6 text-sm tracking-[4px] font-medium md:py-4 md:px-8 rounded-md bg-[#673F7B] hover:bg-[#715380] hover:bg-opacity-90 hover:shadow-lg hover:text-gray-200 transition-all ease-in-out text-white uppercase"
              >
                Register
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 mt-10 md:mt-0 md:col-span-1 flex items-center justify-center md:justify-end"
        >
          <!-- <div class="flex items-center justify-center"> -->
          <!-- <img
            src="/images/hero_logo_1.svg"
            alt=""
            class="w-[300px] h-[300px] md:w-[450px] md:h-[400px]"
          /> -->
          <!-- </div> -->
          <!-- src="/images/hero-img-avn2.png" -->
          <img
            src="/images/avn_hero.png"
            alt=""
            class="object-cover object-right w-[300px] h-[300px] md:w-[480px] md:h-[450px] border-[8px] border-white"
          />
          <!-- <img
            src="/images/hero-img.png"
            alt=""
            class="object-fit w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          /> -->
        </div>
      </div>
    </section>
  </div>
</template>
