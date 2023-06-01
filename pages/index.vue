<template>
  <div class="h-screen relative overflow-hidden px-10 py-28">
    <h1 class="text-orange-900 text-4xl max-w-prose leading-10 mb-2">
      Welcome to <span class="font-caveat">CoffeeHut</span>
    </h1>
    <p class="text-xl">The best coffee house in the world</p>
    <NuxtLink
      to="/products"
      class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-900 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-900"
    >
      Shop Now
    </NuxtLink>
    <NuxtImg
      src="/images/coffee-beans-bg.jpeg"
      loading="lazy"
      class="absolute -z-10 -right-16 w-[200px] h-[200px] md:w-[600px] md:h-[600px] border border-transparent ring-4 ring-offset-8 outline-none ring-orange-900 top-1/3 rounded-full object-cover transform -translate-y-1/2 select-none"
    />
  </div>
</template>

<script setup lang="ts"></script>
