<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img class="h-8" src="/img/light-background.svg" alt="Workcation">
        </div>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-gray-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <router-link to="/" class="block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-200">Home</router-link>
        <router-link to="/dictionary" class="mt-1 block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2">Dictionary</router-link>
        <a href="https://www.choctawtsa.org" class="mt-1 block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2">Choctaw TSA</a>
      </nav>
    </div>
      
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
