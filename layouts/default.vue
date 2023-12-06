<template>
  <main>
    <slot />
  </main>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "bg-gray-100",
  },
  bodyAttrs: {
    class: "bg-gray-100 antialiased",
  },
});
</script>
