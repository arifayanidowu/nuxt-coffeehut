<!-- file: ~/pages/login.vue -->
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full">
    <div class="border rounded-md mx-auto w-full md:w-[600px] px-10 py-5 shadow-sm">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NuxtImg
          class="mx-auto h-10 w-auto"
          src="/images/milk-tea.png"
          alt="CoffeeHut"
          loading="lazy"
        />
        <h2
          class="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10">
        <form class="space-y-6" @submit.prevent="signInWithEmail">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              :disabled="loading"
              class="flex w-full justify-center rounded-md bg-orange-900 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-all"
            >
              {{ loading ? "Loading..." : "Sign in" }}
            </button>
          </div>
        </form>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
            >or</span
          >
        </div>
        <button
          @click="signInWithGoogle"
          class="inline-flex w-full items-center gap-2 border justify-center rounded-md bg-slate-50 px-3 py-4 text-sm font-semibold leading-6 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
        >
          <IconsGoogleIcon class="w-5 h-5" />
          Sign In with Google
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const { signIn } = useAuth();

const email = ref("");
const loading = ref(false);

const signInWithEmail = async (event: Event) => {
  event.preventDefault();
  loading.value = true;
  try {
    const data = await signIn("email", {
      email: email.value,
      redirect: false,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  } finally {
    loading.value = false;
  }
};

const signInWithGoogle = async () => {
  try {
    await signIn("google");
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
};
</script>
