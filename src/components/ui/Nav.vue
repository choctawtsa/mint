<template>
  <div>
    <header
      id="menu"
      :class="sidebarOpen ? 'opacity-0 shadow-none' : 'opacity-100 shadow-md'"
      class="fixed top-0 left-0 z-30 w-screen bg-white md:hidden transition-medium"
    >
      <div
        class="container mx-auto md:flex md:items-center md:justify-between md:px-4 md:py-3"
      >
        <div class="flex items-center justify-between px-4 py-3 md:p-0">
          <div>
            <router-link to="/">
              <img
                class="h-8"
                src="/img/logos/light-background.svg"
                alt="Mint logo"
              />
            </router-link>
          </div>
          <div class="md:hidden">
            <button
              @click="sidebarOpen = true"
              type="button"
              class="block -m-2 p-2 text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            >
              <svg
                v-if="!sidebarOpen"
                class="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 12"
              >
                <path
                  d="M.948 0h16.103c.522 0 .95.427.95.949v.102a.952.952 0 01-.95.949H.948A.95.95 0 010 1.051V.949A.95.95 0 01.948 0zM17.051 5H.948A.95.95 0 000 5.949v.102A.95.95 0 00.948 7h16.103a.952.952 0 00.95-.949v-.102A.952.952 0 0017.05 5zM11 10H1c-.5 0-1 .427-1 .949v.102C0 11.573.5 12 1 12h10c.5 0 1-.427 1-.949v-.102c0-.522-.5-.949-1-.949z"
                />
                <path
                  d="M.948 0h16.103c.522 0 .95.427.95.949v.102a.952.952 0 01-.95.949H.948A.95.95 0 010 1.051V.949A.95.95 0 01.948 0zM17.051 5H.948A.95.95 0 000 5.949v.102A.95.95 0 00.948 7h16.103a.952.952 0 00.95-.949v-.102A.952.952 0 0017.05 5zM11 10H1c-.5 0-1 .427-1 .949v.102C0 11.573.5 12 1 12h10c.5 0 1-.427 1-.949v-.102c0-.522-.5-.949-1-.949z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <nav
      id="navigation"
      :class="
        sidebarOpen
          ? 'translate-x-0 ease-out transition-medium'
          : '-translate-x-full ease-in transition-medium'
      "
      class="fixed inset-y-0 left-0 z-50 flex-shrink-0 w-64 overflow-auto md:translate-x-0 frosted-glass md:not-frosted-glass"
    >
      <div class="absolute top-0 right-0 mt-10 mr-8 md:hidden">
        <button
          @click="sidebarOpen = false"
          class="-m-2 p-2 text-gray-500 hover:text-gray-400 focus:text-gray-400 focus:outline:none"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
        </button>
      </div>
      <div class="h-screen px-8 py-8">
        <router-link to="/">
          <img class="h-8" src="/img/logos/dark-background.svg" alt="Mint" />
        </router-link>
        <div class="mt-12">
          <h2
            class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
          >
            Models
          </h2>
          <div class="mt-2 -mx-3">
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Hydrogen</span
              >
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Helium</span
              >
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Lithium</span
              >
              <span
                class="px-2 py-px text-xs font-semibold tracking-wide text-teal-600 uppercase bg-teal-900 rounded-full"
                >New</span
              >
            </a>
          </div>
        </div>
        <div class="mt-8">
          <h2
            class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
          >
            Company
          </h2>
          <div class="mt-2 -mx-3">
            <router-link
              to="/support"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
              exact-active-class="current-page"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Support</span
              >
            </router-link>
            <router-link
              to="/dictionary"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
              exact-active-class="current-page"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Dictionary</span
              >
            </router-link>
            <router-link
              to="/environmental-impact"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
              exact-active-class="current-page"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Environmental Impact</span
              >
            </router-link>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Press</span
              >
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-900"
            >
              <span
                class="text-sm font-medium text-gray-400 hover:text-gray-300"
                >Legal</span
              >
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = !sidebarOpen"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0'"
      class="fixed top-0 bottom-0 left-0 right-0 z-40 block w-full h-full md:hidden transition-medium transition-fade"
      style="background: rgba(0,0,0,0.65);content:''"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: true
    };
  },
  watch: {
    $route() {
      this.sidebarOpen = false;
    }
  }
};
</script>
