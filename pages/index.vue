<script setup></script>

<template>
  <div key=" z-0  min-h-screen w-full ">
    <Hero />

    <!-- About US -->
    <section id="about-us" class="relative w-full bg-white py-10 md:py-20">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <AboutUs />
      </div>

      <!-- <div class="max-w-3xl mx-5 md:mx-auto space-y-10"> -->
      <!-- <h2 class="font-title text-center text-3xl md:text-4xl">About Us</h2> -->

      <!-- <p>
          IDA is a pioneering circular economic tech firm fueled by a powerful
          vision: a world where design thinking and circularity join forces to
          create a thriving future.
        </p>

        <blockquote class="border-l-4 border-purple-800 pl-4 py-2 my-4">
          <h4
            class="italic text-2xl font-semibold pl-4 py-2 my-4 text-gray-700"
          >
            We believe that by fundamentally re-imagining how we design and
            build our world, we can redesign systems that regenerate the planet.
          </h4>
        </blockquote>
        <p>
          Our mission is to unlock the transformative potential of circularity
          in the built environment, food systems, and energy landscapes on a
          global scale.
        </p> -->

      <!-- <AboutUs />
      </div> -->
    </section>

    <section class="w-full">
      <AboutMotto />
    </section>

    <section class="w-full py-10 md:py-20">
      <div class="max-w-6xl mx-5 md:mx-auto">
        <AboutChallengeSolution />
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="w-full bg-[#fef7ff] py-10 md:py-20">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <AboutCallToAction />
      </div>
    </section>

    <section class="w-full py-10 md:py-20">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <AboutSdgs />
      </div>
    </section>

    <section
      class="w-full bg-gradient-to-r from-[#381E4F] to-[#1B2E5F] py-10 md:py-20"
    >
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <AboutJoinNow />
      </div>
    </section>
    <section class="w-full py-10 lg:py-20">
      <div class="max-w-3xl mx-5 lg:mx-auto space-y-5">
        <h1 class="text-4xl tracking-[2px] text-[#673f7b]">Contact Us</h1>
        <p>
          For more information or assistance, please contact us at: <br />Email:
          <a
            class="underline text-[#673f7b] tracking-[2px]"
            href="mailto:info@invictusafrica.net"
            >info@invictusafrica.net</a
          >
        </p>
      </div>
    </section>

    <!-- Our Work Section -->
    <!-- <section
      class="min-h-screen relative w-full bg-gradient-to-r from-[#381E4F] to-[#1B2E5F] py-10 md:py-20"
    >
      <div class="max-w-4xl mx-5 lg:mx-auto">
        <h3 class="text-center text-3xl text-gray-50 mb-5">Our Work</h3>
        <div class="grid grid-cols-12 lg:gap-10 text-white">
          <div class="hidden lg:col-span-4 lg:flex items-center">
            <img
              src="/images/abst-2.png"
              alt=""
              class="object-cover animate-pulse h-[400px]"
            />
          </div>
          <div class="col-span-12 lg:col-span-8 grid gap-5 text-center">
            <div class="space-y-2">
              <h4 class="text-blue-400 text-lg text-center">
                Built Environment
              </h4>
              <p class="leading-relaxed">
                We empower communities, local governments, and development
                companies to design and build structures that are not just
                efficient but also regenerative. We champion using recycled
                materials, biomimicry in design, and optimised building
                lifecycles to minimise waste and foster a healthier planet.
              </p>
            </div>
            <div>
              <h4 class="text-blue-400 text-lg text-center">Food Systems</h4>
              <p class="leading-relaxed">
                We champion closed-loop food production models that minimise
                waste and maximise resource utilisation. We support initiatives
                like urban agriculture, regenerative agriculture practices, and
                aquaponics systems that promote local food security, resource
                conservation, and a more resilient food chain.
              </p>
            </div>
            <div>
              <h4 class="text-blue-400 text-lg text-center">Energy Systems</h4>
              <p class="leading-relaxed">
                We play a crucial role in developing renewable energy solutions
                and promoting energy efficiency through a circular lens. This
                includes exploring innovative energy storage solutions,
                promoting circular material lifecycles for renewable energy
                infrastructure, and advocating for smart grid technologies to
                create a more resilient and sustainable energy future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Next section -->
    <!-- <section class="min-h-screen py-20">
      <div class="max-w-5xl mx-5 lg:mx-auto grid grid-cols-12 gap-0 lg:gap-10">
        <div
          class="col-span-12 lg:col-span-8 space-y-5 text-justify leading-relaxed"
        >
          <h3 class="text-2xl md:text-3xl text-center">
            Agriculture Value-Chain Network (AVN)
          </h3>

          <p>
            AVN, the flagship prototype from the
            <a
              href="#home"
              class="text-purple-800 font-semibold hover:underline"
            >
              Invictus Development Africa (IDA),</a
            >
            is revolutionising agriculture. It's not just a hybrid farming
            system; it's a data-driven powerhouse that empowers farmers to make
            informed decisions and maximise profits.
          </p>

          <p>
            <span class="font-semibold">Imagine this: </span> growing exactly
            what the market demands, optimising resource use, and ensuring a
            transparent, ethical, and sustainable food chain. AVN makes it
            possible!
          </p>

          <p class="font-bold text-lg">Here's how AVN works:</p>
          <ul class="list-inside list-decimal space-y-4 ml-0 md:ml-10">
            <li>
              <span class="font-semibold text-purple-700"
                >Data-Driven Decisions:</span
              >
              AVN leverages environmental, market, and resource data to guide
              planting choices. Grow what thrives in your climate and sells
              best, minimising waste and maximising yield.
            </li>
            <li>
              <span class="font-semibold text-purple-700"
                >Hybrid Farming Power:</span
              >
              AVN integrates traditional knowledge with modern technology,
              promoting sustainable practices for long-term success.
            </li>
            <li>
              <span class="font-semibold text-purple-700"
                >Empowering Farmers:</span
              >
              AVN connects you directly with distributors, retailers, and
              suppliers, fostering a more transparent and efficient value chain
              for organic food.
            </li>
          </ul>

          <p class="font-bold text-lg">Join the AVN revolution and:</p>

          <ul class="ml-0 md:ml-10">
            <li>
              <span class="font-semibold text-purple-700"
                >Increase profits:</span
              >
              grow what the market demands and reduce waste.
            </li>
            <li>
              <span class="font-semibold text-purple-700"
                >Enhance sustainability:</span
              >
              optimise resource use and promote environmentally friendly
              practices.
            </li>
            <li>
              <span class="font-semibold text-purple-700"
                >Gain market access:</span
              >
              Connect directly with buyers and get the best prices for your
              crops.
            </li>
          </ul>

          <p class="text-center text-purple-800 italic">
            AVN is the future of agriculture. Be a part of it.
          </p>
          <div class="flex w-full">
            <NuxtLink
              to="/registration"
              class="mx-auto bg-purple-800 text-white py-2 px-6 shadow-md rounded-md hover:bg-purple-700"
              >Register</NuxtLink
            >
          </div>
        </div>
        <div class="hidden lg:col-span-4 lg:flex items-center justify-center">
          <div class="flex flex-col items-center">
            <img
              src="/images/avn_logo.png"
              alt=""
              class="object-contain w-full h-full"
            />
            <h5 class="text-[#7B4988] text-4xl">A.V.N</h5>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
