<template>
  <main>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-gray-100",
  },
});
</script>
