<template>
  <nav
    class="sticky z-20 top-0 left-0 right-0 bg-white/75 backdrop-blur supports-backdrop-blur:bg-white/75"
  >
    <div class="flex justify-between items-center px-10 py-4 shadow-sm h-[55px]">
      <button class="font-caveat tracking-wide text-xl" href="/">CoffeeHut</button>
      <div class="flex gap-2 space-x-2">
        <NuxtLink to="/" class="link link-before" exact-active-class="link-active"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/products"
          class="link link-before"
          prefetch
          exact-active-class="link-active"
          >Products</NuxtLink
        >
      </div>
      <div class="flex space-x-1 gap-1 items-center justify-center">
        <UserMenu
          v-if="session?.user"
          :options="dropdownOptions"
          :src="session?.user?.image ?? ''"
          :alt="session?.user?.name ?? ''"
        />
        <NuxtLink
          class="link link-before"
          exact-active-class="link-active"
          prefetch
          to="/login"
          v-else
          >Sign in</NuxtLink
        >
        <Badge>
          <IconButton
            class="snipcart-checkout rounded-full bg-transparent active:bg-slate-50 dark:active:bg-slate-800 p-2 border border-spacing-2 border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-white focus:dark:ring-slate-600 focus:ring-offset-1 focus:ring-offset-gray-400 focus:dark:ring-offset-slate-600 transition-all duration-300"
          >
            <ShoppingBagIcon class="h-6 w-6 text-primary-200" />
          </IconButton>
        </Badge>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  ShoppingBagIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/outline";
const { getSession, signOut } = useAuth();

const session = await getSession();
const router = useRouter();

const dropdownOptions = ref([
  {
    label: "Profile",
    icon: UserCircleIcon,
    onClick: () => router.push("/profile"),
  },
  {
    label: "Sign out",
    icon: ArrowLeftOnRectangleIcon,
    onClick: () => signOut(),
  },
]);
</script>
