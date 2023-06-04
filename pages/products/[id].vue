<template>
  <div class="text-center relative">
    <div class="absolute left-5 top-5">
      <button
        class="bg-orange-600 border border-transparent text-white text-sm rounded-md inline-flex items-center gap-2 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-orange-600"
        @click="$router.back()"
      >
        <ArrowLeftIcon class="h-3 w-3 text-inherit" />
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
      :data-item-custom1-name="`Logged In User Email`"
      :data-item-custom1-type="'hidden'"
      :data-item-custom1-value="user?.email"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const items = useProducts();
const { getSession } = useAuth();

const { user } = await getSession();

const item = computed(() => {
  return items.value.find((item) => item.id === Number(route.params.id));
});
</script>
