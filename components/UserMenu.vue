<template>
  <HeadlessMenu as="div" class="relative inline-block text-left">
    <div class="flex items-center gap-3">
      <p v-if="username" class="text-xs max-w-prose text-slate-500">{{ username }}</p>
      <HeadlessMenuButton
        class="rounded-full bg-transparent active:bg-slate-50 dark:active:bg-slate-800 p-2 border border-spacing-2 border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-white focus:dark:ring-slate-600 focus:ring-offset-1 focus:ring-offset-gray-400 focus:dark:ring-offset-slate-600 transition-all duration-300"
      >
        <template v-if="src">
          <NuxtImg :src="src" :alt="alt" class="h-7 w-7 rounded-full" />
        </template>
        <template v-else>
          <UserIcon class="h-7 w-7 rounded-full" />
        </template>
      </HeadlessMenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <HeadlessMenuItem v-slot="{ active }" v-for="(item, idx) in options" :key="idx">
            <button
              :class="[
                active ? 'bg-slate-100 text-slate-800' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="item?.onClick"
            >
              <component
                :is="item?.icon"
                class="mr-2 h-5 w-5 text-slate-400"
                :active="active"
                aria-hidden="true"
              />
              {{ item?.label }}
            </button>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>

<script setup lang="ts">
import {UserIcon} from '@heroicons/vue/24/outline'

defineProps({
  options: {
    type: Array<any>,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  }
});
</script>
