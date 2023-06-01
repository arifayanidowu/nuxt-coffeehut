<template>
  <div class="px-10 py-4">
    <input
      type="search"
      placeholder="Search products"
      v-model="query"
      class="border w-full py-4 my-4 rounded-md focus:outline-none focus:border-transparent focus:ring focus:ring-offset-2 focus:ring-orange-100 focus:ring-offset-orange-800"
    />

    <h2 class="text-2xl font-semibold">Products</h2>
    <div class="border-b my-2"></div>
    <!-- Card -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <div
        role="button"
        disabled
        tabindex="-1"
        v-for="item in filteredItems"
        :key="item.id"
        class="snipcart-add-item bg-white rounded-md group shadow-md overflow-hidden cursor-pointer hover:shadow-lg active:shadow-inner active:bg-gray-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        :data-item-id="item.id"
        :data-item-price="item.price"
        :data-item-description="item.description"
        :data-item-image="item.image"
        :data-item-name="item.name"
      >
        <div class="relative">
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover object-center group-hover:opacity-75 transition-opacity"
            loading="lazy"
          />
          <div class="absolute top-2 right-2">
            <button
              class="snipcart-add-item bg-white rounded-full p-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-orange-100 focus:ring-offset-orange-800"
              :data-item-id="item.id"
              :data-item-price="item.price"
              :data-item-description="item.description"
              :data-item-image="item.image"
              :data-item-name="item.name"
            >
              <ShoppingBagIcon class="h-6 w-6 text-primary-200" />
            </button>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-gray-500">${{ item.price?.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";

const query = ref("");

const items = reactive([
  {
    id: 1,
    name: "Coffee",
    price: 5,
    image: "https://source.unsplash.com/featured/?coffee",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 2,
    name: "Tea",
    price: 3,
    image: "https://source.unsplash.com/featured/?tea",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 7,
    image: "https://source.unsplash.com/featured/?cappuccino",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 4,
    name: "Latte",
    price: 7,
    image: "https://source.unsplash.com/featured/?latte",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 5,
    name: "Espresso",
    price: 5,
    image: "https://source.unsplash.com/featured/?espresso",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 6,
    name: "Mocha",
    price: 7,
    image: "https://source.unsplash.com/featured/?mocha",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 7,
    name: "Macchiato",
    price: 7,
    image: "https://source.unsplash.com/featured/?macchiato",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 8,
    name: "Americano",
    price: 7,
    image: "https://source.unsplash.com/featured/?americano",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 9,
    name: "Flat White",
    price: 7,
    image: "https://source.unsplash.com/featured/?flatwhite",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 10,
    name: "Affogato",
    price: 7,
    image: "https://source.unsplash.com/featured/?affogato",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 11,
    name: "Cortado",
    price: 7,
    image: "https://source.unsplash.com/featured/?cortado",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 12,
    name: "Irish Coffee",
    price: 7,
    image: "https://source.unsplash.com/featured/?chai",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
  {
    id: 13,
    name: "Cafe au Lait",
    price: 7,
    image: "https://source.unsplash.com/featured/?cafeaulait",
    description:
      "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
  },
]);

const filteredItems = computed(() => {
  return items.filter((item) => item.name.toLowerCase().includes(query.value));
});
</script>
