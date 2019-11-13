<template>
  <nav
    id="navigation"
    class="h-screen fixed hidden sm:block flex-shrink-0 w-64 px-8 py-8 bg-gray-900 z-50 inset-y-0 left-0 overflow-y-auto"
  >
    <router-link to="/">
      <img class="h-8" src="/img/logos/dark-background.svg" alt="Mint" />
    </router-link>
    <div class="mt-12">
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
</template>