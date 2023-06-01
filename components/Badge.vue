<template>
  <div class="relative w-fit h-fit">
    <div class="absolute top-0 right-0">
      <span
        class="snipcart-items-count inline-flex bg-red-600 text-red-100 items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        {{ badgeContent }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  badgeContent: {
    type: Number,
    default: 0,
  },
});
</script>
