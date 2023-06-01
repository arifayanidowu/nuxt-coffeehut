<template>
  <div>
    <!-- Product details -->
    <h1>{{ item?.name }}</h1>
    <p>{{ item?.description }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const items = useProducts();

const item = computed(() => {
  return items.value.find((item) => item.id === Number(route.params.id));
});
</script>
