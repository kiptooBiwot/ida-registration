<script setup>
definePageMeta({
  layout: 'about',
})

const reasons = [
  {
    icon: 'i-heroicons-computer-desktop-20-solid',
    heading: 'Access to Cutting-Edge Tools',
    description:
      'Get the training, resources, and technology you need to boost productivity and profits',
  },
  {
    icon: 'i-heroicons-currency-dollar',
    heading: 'Fair Pricing and Market Access',
    description:
      'Connect directly with ethical buyers and secure better prices for your produce',
  },
  {
    icon: 'i-heroicons-presentation-chart-line',
    heading: 'Grow Sustainably',
    description:
      'Learn regenerative farming practices that restore your land and protect the environment',
  },
  {
    icon: 'i-heroicons-hand-thumb-up',
    heading: 'Financial Inclusion',
    description:
      'Build your digital financial identity, access credit, and manage your income securely',
  },
  {
    icon: 'i-heroicons-user-group',
    heading: 'Be Part of a Community',
    description:
      'Join a global network of farmers committed to sustainability, innovation, and success',
  },
]
</script>

<template>
  <div class="w-full py-10">
    <div id="avn" class="relative w-full bg-white py-10 md:py-20">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <section>
          <div class="grid grid-cols-1 gap-5 md:gap-7 lg:gap-10 md:grid-cols-2">
            <div>
              <h4
                class="uppercase text-gray-500 text-sm tracking-[4px] font-medium mb-2"
              >
                Agriculture Value-Chain Network
              </h4>
              <div class="space-y-5">
                <h2 class="text-5xl font-medium tracking-[1px]">
                  Impact: Building Resilient Communities and Inclusive Future
                </h2>
                <p class="leading-relaxed">
                  At the Agriculture Value Chain Network (AVN), we believe in
                  creating a sustainable agricultural ecosystem that empowers
                  smallholder farmers, fosters economic equity, and addresses
                  the urgent challenges of climate change. By combining
                  innovative hybrid farming systems, technology integration, and
                  circular economy practices, AVN is driving meaningful change
                  across Africa—and we want YOU to be part of this
                  transformation.
                </p>
              </div>
            </div>
            <div class="flex items-center">
              <img
                src="/images/avn/avn-image.png"
                alt=""
                class="w-full h-auto rounded-md shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      <!-- CTA -->
      <section>
        <div
          class="relative w-full py-20 px-10 bg-[url('/images/about-us/bg-pattern.png')] bg-fixed h-3/4"
        >
          <div class="absolute inset-0 bg-white bg-opacity-95" />

          <div class="relative max-w-5xl mx-5 lg:mx-auto space-y-5">
            <div class="max-w-3xl mx-auto space-y-5">
              <h3
                class="text-4xl font-medium tracking-[1px] text-center text-[#673f7b]"
              >
                Why Join AVN? Empower Your Future Today
              </h3>
              <p class="leading-relaxed text-center">
                Be part of a movement that’s changing agriculture and reshaping
                lives, communities, and the planet. Here’s why YOU should sign
                up for AVN:  
              </p>
            </div>
            <div>
              <!-- CARDS -->
              <div class="mx-auto p-5 sm:p-10 md:p-0">
                <div
                  class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10"
                >
                  <div
                    v-for="(reason, index) in reasons"
                    :key="index"
                    class="border-r border-b border-l border-gray-50 lg:border-t lg:border-gray-50 shadow-md bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal rounded-md"
                  >
                    <div class="flex items-center justify-center mt-10 mb-5">
                      <UIcon
                        :name="reason.icon"
                        class="w-12 h-12 text-[#673f7b]"
                      />
                    </div>
                    <div class="p-4 pt-2">
                      <div class="mb-8">
                        <h2
                          class="text-gray-800 font-semibold text-lg mb-2 hover:text-indigo-600 inline-block"
                        >
                          {{ reason.heading }}
                        </h2>
                        <p class="text-gray-700 text-sm">
                          {{ reason.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10">
        <div class="max-w-3xl mx-auto">
          <h3
            class="text-4xl font-medium tracking-[1px] text-center text-[#673f7b] mb-5"
          >
            Our Impact
          </h3>
          <div class="space-y-2 md:space-y-6 lg:space-y-10">
            <div class="relative max-w-3xl mx-5 lg:mx-auto space-y-4">
              <h3
                class="text-2xl font-medium tracking-[1px] text-center text-[#673f7b]"
              >
                Economic Empowerment
              </h3>
              <ul class="list-outside list-disc">
                <li>
                  Increased farmer incomes by 20–40% through better yields and
                  market access.
                </li>
                <li>
                  Sustainable job creation, with each Hybrid Farming Hub
                  generating jobs for farmers, technicians, and local
                  communities.
                </li>
              </ul>
            </div>

            <div class="relative max-w-3xl mx-5 lg:mx-auto space-y-5">
              <h3
                class="text-2xl font-medium tracking-[1px] text-center text-[#673f7b]"
              >
                Environmental Resilience
              </h3>
              <ul class="list-outside list-disc">
                <li>
                  Regenerative agriculture that restores soil health, reduces
                  chemical inputs, and mitigates carbon emissions.
                </li>
                <li>
                  Circular economy initiatives like composting organic waste and
                  recycling farming tools.
                </li>
              </ul>
            </div>

            <div class="relative max-w-3xl mx-5 lg:mx-auto space-y-5">
              <h3
                class="text-2xl font-medium tracking-[1px] text-center text-[#673f7b]"
              >
                Social Equity
              </h3>
              <ul class="list-outside list-disc">
                <li>
                  We are empowering women, youth, and marginalised communities
                  with inclusive opportunities.
                </li>
                <li>
                  Rehabilitation programs offer incarcerated individuals
                  pathways to sustainable livelihoods.
                </li>
                <li>
                  We strengthen food systems to ensure local food security and
                  resilience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 gap-5 md:gap-7 lg:gap-10 md:grid-cols-2">
            <div>
              <img
                src="/images/avn/avn_benefits.png"
                alt=""
                class="object-cover w-full md:w-3/4 mx-auto h-full rounded-xl"
              />
            </div>
            <div class="space-y-5">
              <div>
                <h3
                  class="text-2xl font-semibold tracking-[1px] text-center text-[#673f7b] mb-5"
                >
                  Exclusive Benefits for Members
                </h3>
                <ul class="list-disc list-outside space-y-4">
                  <li>Reduced fees on hybrid farming resources.</li>
                  <li>
                    Priority access to training programs and market
                    opportunities.
                  </li>
                  <li>
                    Ongoing support from our team of agricultural and tech
                    experts.
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  class="text-2xl font-semibold tracking-[1px] text-center text-[#673f7b] mb-5 mt-10"
                >
                  Together, We Can Make a Difference
                </h3>
                <p class="font-semibold mb-2">By 2030, AVN aims to:</p>
                <ul class="list-disc list-outside space-y-4">
                  <li>Empower 50,000 farmers across Africa.</li>
                  <li>Mitigate over 10 million tonnes of carbon emissions.</li>
                  <li>Generate 20,000 sustainable jobs.</li>
                  <li>
                    Build resilient food systems that reduce dependency on
                    imports and global supply chains.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#673f7b] py-10">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl text-white font-normal text-center">
            Sign up today and take the first step toward transforming your farm,
            community, and future. Together, we’ll grow a sustainable tomorrow!
          </h3>
          <div class="flex items-center justify-center mt-5">
            <NuxtLink
              to="/registration"
              class="px-8 py-4 rounded-lg text-white bg-orange-600 uppercase text-sm font-medium tracking-[2px] hover:bg-orange-500 hover:shadow-xl"
            >
              Join Now
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
