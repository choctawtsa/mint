<template>
  <header id="menu" class="fixed w-screen bg-gray-900 shadow-md top-0 left-0 z-50 sm:hidden">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <router-link to="/">
            <img class="h-8" src="/img/logos/dark-background.svg" alt="Mint" />
          </router-link>
        </div>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-6 pt-2 pb-4 sm:flex sm:p-0">
        <div class="mt-4">
          <h2 class="text-xs uppercase text-gray-500 font-semibold tracking-wide">Models</h2>
          <div class="mt-2 -mx-3">
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Hydrogen</span>
              <span
                class="text-xs font-semibold bg-teal-900 text-teal-600 px-2 py-px rounded-full uppercase tracking-wide"
              >New</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Helium</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Lithium</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Beryllium</span>
              <span
                class="text-xs font-semibold bg-teal-900 text-teal-600 px-2 py-px rounded-full uppercase tracking-wide"
              >New</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Boron</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Carbon</span>
            </a>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-xs uppercase text-gray-500 font-semibold tracking-wide">Company</h2>
          <div class="mt-2 -mx-3">
            <router-link
              to="/support"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Support</span>
            </router-link>
            <router-link
              to="/dictionary"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Dictionary</span>
            </router-link>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Carbon Impact</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Press</span>
            </a>
            <a
              href="#"
              class="flex justify-between px-3 py-2 rounded-lg items-center hover:bg-gray-800"
            >
              <span class="text-sm font-medium text-gray-400 hover:text-gray-300">Legal</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
    }
  }
};
</script>
