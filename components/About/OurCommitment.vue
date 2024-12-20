<script setup>
const items = ref([
  {
    icon: 'material-symbols-light:groups',
    title: 'People-Centred Impact',
    description:
      'We place communities at the heart of every project, ensuring inclusive growth and equitable opportunities. ',
  },
  {
    icon: 'streamline:natrue-ecology-recycle-1-sign-environment-protect-save-arrows',
    title: 'Environmental Responsibility',
    description:
      'We are committed to carbon reduction, resource efficiency, and climate resilience, supported by AI-driven carbon tracking and blockchain-certified sustainability data.',
  },
  {
    icon: 'material-symbols-light:handshake-outline',
    title: 'Ethical Partnerships',
    description:
      'We collaborate with values-aligned partners to co-create transparent, sustainable business models that deliver long-term impact. ',
  },
])
</script>

<template>
  <div>
    <h2 class="text-3xl mb-8 font-medium text-center text-[#673f7b]">
      Our Commitment
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white py-8 px-5 shadow-md space-y-5"
      >
        <div class="flex justify-center">
          <Icon
            :name="item.icon"
            class="w-20 h-20 text-center text-[#673f7b]"
          />
        </div>
        <h3 class="text-[#673f7b] font-medium text-lg uppercase tracking-[4px]">
          {{ item.title }}
        </h3>
        <p class="leading-relaxed">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
