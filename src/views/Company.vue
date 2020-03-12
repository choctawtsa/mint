<template>
  <div>
    <header
      class="bg-center bg-cover"
      style="background-image: linear-gradient(rgba(40,94,97,0.5), rgba(40,94,97,0.5)), url(https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000)"
    >
      <div
        class="container flex flex-col justify-between min-h-screen mx-auto px-4 pt-4 pb-8 sm:pt-6 xl:pb-10"
      >
        <nav class="flex items-center justify-between pb-6">
          <router-link to="/">
            <img
              class="w-20 sm:w-24"
              src="/img/all-white.svg"
              alt="Mint Electric logo"
            />
          </router-link>

          <div class="sm:hidden">
            <button
              @click="menuOpen = !menuOpen"
              class="flex items-center p-3 text-gray-400 hover:text-white focus:text-white focus:outline-none"
            >
              <svg
                class="h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-show="!menuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
                <path
                  v-show="menuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              :class="menuOpen ? 'h-auto py-2 shadow-lg' : 'h-0'"
              class="absolute flex flex-col overflow-y-hidden bg-white rounded-lg -ml-30 duration-200 transition-all ease-out"
            >
              <router-link
                to="/"
                class="px-10 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-center"
                exact-active-class="font-medium text-gray-900 bg-gray-200"
              >
                Home
              </router-link>
              <router-link
                to="/company"
                class="px-10 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-center"
                exact-active-class="font-medium text-gray-900 bg-gray-200"
              >
                Company
              </router-link>
              <router-link
                to="/about"
                class="px-10 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-center"
                exact-active-class="font-medium text-gray-900 bg-gray-200"
              >
                About
              </router-link>
            </div>
          </div>
          <div class="hidden font-medium text-gray-400 sm:block">
            <router-link
              to="/"
              class="duration-100"
              exact-active-class="font-semibold text-white"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-6 duration-100"
              exact-active-class="font-semibold text-white"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-6 duration-100"
              exact-active-class="font-semibold text-white"
            >
              About
            </router-link>
          </div>
        </nav>
        <div class="pt-12 pb-12 sm:pt-16 sm:pb-10 lg:pb-12 xl:pt-24 xl:pb-16">
          <h1
            class="mx-auto text-3xl font-bold leading-tight tracking-tight text-white xs:text-5xl sm:text-6xl xl:max-w-6xl font-display xl:text-7xl text-center"
          >
            We're working to move humanity toward a brighter future.
          </h1>
          <div class="mx-auto xs:w-auto xs:pt-0 xl:mt-12 mt-18 text-center">
            <a
              href="/#faq"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded-lg xs:inline-block xs:px-4 xl:px-6 xl:py-2 xl:text-base hover:text-teal-900 hover:bg-teal-100 duration-100"
            >
              Have a question?
            </a>
            <router-link
              to="/about"
              class="block mt-2 py-2 font-medium text-white border-2 border-transparent rounded-lg xs:inline-block xs:mt-0 xs:ml-2 xs:px-4 sm:ml-4 xl:px-6 xl:py-2 xl:text-base hover:border-gray-500 duration-100"
            >
              About this website
            </router-link>
          </div>
        </div>
        <div>
          <svg
            class="h-10 mx-auto text-white lg:h-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  }
};
</script>
