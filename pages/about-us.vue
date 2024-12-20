<script setup>
definePageMeta({
  layout: 'about',
})

const router = useRouter()

const register = () => {
  router.push('/registration')
}
</script>

<template>
  <div class="w-full py-10">
    <section id="about-us" class="relative w-full bg-white pt-10 md:py-20">
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

    <!-- AVN -->
    <!-- <section> -->
    <!-- <AVNAbout /> -->
    <!-- </section> -->

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
        <!-- <AboutCallToAction /> -->
        <AboutOurCommitment />
      </div>
    </section>

    <!-- <section class="w-full py-10 md:py-20">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <AboutSdgs />
      </div>
    </section> -->

    <section class="w-full">
      <div class="bg-[#673f7b] py-10 md:py-16 text-white">
        <div class="max-w-4xl mx-auto text-center space-y-3">
          <h3 class="font-semibold text-gray-200 text-4xl">
            Join Us on This Global Journey
          </h3>
          <div>
            <p class="tracking-wide text-gray-100">
              Together, we can build a future where technology, innovation, and
              sustainability redefine the way businesses and communities grow
              and thrive. Connect with us to learn more about our global
              initiatives or explore partnership opportunities.
            </p>
          </div>
          <button
            @click="register"
            class="py-3 uppercase px-12 rounded-md bg-orange-400 text-white hover:bg-orange-500 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
