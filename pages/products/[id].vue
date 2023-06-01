<template>
  <div class="text-center relative">
    <div class="absolute left-5 top-5">
      <button
        class="bg-white rounded-md inline-flex gap-2 p-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-orange-100 focus:ring-offset-orange-800"
        @click="$router.back()"
      >
        <ArrowLeftIcon class="h-6 w-6 text-primary-200" />
        Back
      </button>
    </div>
    <!-- Product image -->
    <NuxtImg
      :src="item?.image"
      :alt="item?.name"
      class="w-full h-60 object-cover object-center"
      loading="lazy"
    />
    <!-- Product details -->
    <div class="leading-8 mt-4">
      <h1>{{ item?.name }}</h1>
      <p>{{ item?.description }}</p>
      <p>${{ item?.price?.toFixed(2) }}</p>
    </div>
    <!-- Add to cart button -->
    <button
      v-if="item"
      class="snipcart-add-item bg-orange-500 text-white rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-orange-100 focus:ring-offset-orange-800"
      :data-item-id="item.id"
      :data-item-price="item.price"
      :data-item-description="item.description"
      :data-item-image="item.image"
      :data-item-name="item.name"
      :data-item-url="`/products/${item.id}`"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const items = useProducts();

const item = computed(() => {
  return items.value.find((item) => item.id === Number(route.params.id));
});
</script>
