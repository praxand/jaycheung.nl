<template>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-gray-100 antialiased",
  },
});
</script>
