<template>
  <button
    v-bind="$attrs"
    class="rounded-full border p-1 h-10 w-10 inline-flex items-center justify-center focus:ring-1 focus:outline-none focus:ring-orange-100 focus:ring-offset-orange-800"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>
