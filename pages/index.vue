<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <About />
    </div>
  </div>

  <Projects />

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <Faq />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jay Cheung",
  ogTitle: "Jay Cheung",
  description: "Jay Cheung's personal website",
  ogDescription: "Jay Cheung's personal website",
  ogImage: "https://jaycheung.nl/images/profile.png",
  twitterCard: "summary_large_image",
});
</script>
