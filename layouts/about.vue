<script setup></script>

<template>
  <div class="relative">
    <header class="">
      <nav class="w-full fixed inset-x-0 top-0 z-10">
        <NavBarAbout />
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
