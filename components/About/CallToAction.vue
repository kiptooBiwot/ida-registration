<script setup>
const items = ref([
  {
    icon: 'material-symbols-light:groups',
    title: 'Join Our Community',
    description:
      'Join a community that supports you every step of the way. From regenerative farm designs and organic fertilisers to IoT systems and real-time data analytics, AVN provides everything you need to succeed. Our 25-acre Hybrid Farm Hubs (HFH) serve as a nexus between technology and traditional practices, incorporating regenerative agriculture, off-grid renewable energy, cold storage, and circular waste management.',
  },
  {
    icon: 'material-symbols-light:shopping-cart-outline',
    title: 'Market Connectivity',
    description:
      'Connect directly to local, regional, and international markets. AVN’s state-of-the-art platform ensures fair pricing, transparency, and sustainability, helping you gain visibility and access to lucrative markets. Our technology-driven approach guarantees that your produce meets the highest standards, making it attractive to buyers worldwide.',
  },
  {
    icon: 'material-symbols-light:handshake-outline',
    title: 'Be Part of the Movement',
    description:
      "Be part of a movement that's not just about farming but about building resilient communities and a sustainable future. Our commitment to environmental stewardship and social equity ensures that everyone thrives. By integrating traditional farming methods with modern technology, we promote practices that restore and protect the environment, ensuring long-term benefits for all. ",
  },
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-white py-8 px-5 shadow-md space-y-5"
    >
      <div class="flex justify-center">
        <Icon :name="item.icon" class="w-20 h-20 text-center text-[#673f7b]" />
      </div>
      <h3 class="text-[#673f7b] font-medium text-lg uppercase tracking-[4px]">
        {{ item.title }}
      </h3>
      <p class="leading-relaxed">{{ item.description }}</p>
    </div>
  </div>
</template>
