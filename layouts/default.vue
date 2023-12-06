<template>
  <main>
    <slot />
  </main>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-gray-100 g",
  },
});
</script>
