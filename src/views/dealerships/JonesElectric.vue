<template>
  <div>
    <header
      class="bg-center bg-cover"
      style="background-image: linear-gradient(90deg, white 0%, white 20%, rgba(255,255,255,0) 100%), url(/img/nashville-map-3.png)"
    >
      <div
        class="container mx-auto px-6 pt-4 pb-8 xs:pb-16 sm:pt-8 lg:pb-20 xl:pb-24"
      >
        <nav class="flex items-center justify-between pb-6">
          <router-link to="/">
            <img
              class="w-20 sm:w-24"
              src="/img/all-gray.svg"
              alt="Mint Electric logo"
            />
          </router-link>
          <div class="sm:hidden">
            <button
              @click="menuOpen = !menuOpen"
              class="flex items-center p-3 text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
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
          <div class="hidden font-medium text-gray-700 sm:block">
            <router-link
              to="/"
              class="hover:text-gray-900 duration-100"
              exact-active-class="font-semibold text-gray-900"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-6 hover:text-gray-900 duration-100"
              exact-active-class="font-semibold text-gray-900"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-6 hover:text-gray-900 duration-100"
              exact-active-class="font-semibold text-gray-900"
            >
              About
            </router-link>
          </div>
        </nav>
        <div class="pt-10 md:pt-12 xl:pt-16">
          <h1
            class="text-6xl font-bold leading-tight text-teal-500 lg:text-7xl font-display"
          >
            Jones Electric
          </h1>
          <p class="mt-1 text-teal-900 lg:text-xl">
            35333 Tennessee Ln, Nashville, TN 37203
          </p>
          <div class="mt-16 xs:mt-12 lg:mt-16">
            <a
              href="https://www.google.com/maps/place/Nashville,+TN/"
              class="block px-4 py-3 font-medium text-white bg-gray-800 rounded-lg shadow-xl xs:inline-block xs:py-2 hover:bg-gray-700 text-center xs:text-left duration-200"
            >
              Get Directions
            </a>
            <a
              href="mailto:hello@choctawtsa.org"
              class="block mt-4 px-4 py-3 font-medium text-gray-800 bg-white rounded-lg shadow-xl xs:inline-block xs:mt-0 xs:ml-5 xs:py-2 hover:bg-gray-100 text-center xs:text-left duration-200"
            >
              Contact
            </a>
            <span
              class="block mt-4 -mb-4 text-xs text-gray-500 xs:text-left text-center"
            >
              Map data &copy;2020 Google
            </span>
          </div>
        </div>
      </div>
    </header>
    <main class="mt-6 pb-10">
      <section class="container mx-auto px-6">
        <div class="md:flex md:items-start xl:grid xl:grid-cols-12 xl:gap-10">
          <div
            class="flex-none bg-white rounded-lg shadow-lg md:w-64 lg:w-full lg:max-w-xs xl:col-span-3"
          >
            <div class="flex items-center px-4 py-3">
              <img
                src="https://images.unsplash.com/photo-1508215302842-8a015a452a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.5"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Amanda Taylor
                </h3>
                <p class="text-sm text-gray-700">Manager</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.7"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Deborah Reed
                </h3>
                <p class="text-sm text-gray-700">Director of Sales</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.2"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Michael Howard
                </h3>
                <p class="text-sm text-gray-700">Director of Finance</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.5"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Sharon Flores
                </h3>
                <p class="text-sm text-gray-700">Customer Service</p>
              </div>
            </div>
          </div>
          <div class="mt-6 md:mt-0 md:ml-8 xl:ml-0 xl:col-span-9">
            <h2
              class="text-2xl font-bold text-gray-900 md:text-3xl font-display"
            >
              About this location
            </h2>
            <p class="mt-1 text-gray-700">
              This Mint dealership is among the three in downtown Nashville and
              is as high-quality as the rest. Consistently ranking among the
              best in the area in ratings, Jones Electric has been delighting
              customers since it opened in 2017.
            </p>
            <p class="mt-2 text-gray-700">
              Jones Electric is more than just a dealership; it's a hub of
              innovation. This location runs completely on renewable energy, and
              upgrades are being constantly made to make the location as
              sustainable as possible. This innovation leads the location to
              represent Mint the best out of any other dealership.
            </p>
            <p class="mt-2 text-gray-700">
              Mint has always been a home for innovation and for moving this
              planet towards a more sustainable future. The efforts of our
              dealership partners are only a step in that, but Jones Electric
              perfectly represents the values of that step.
            </p>
          </div>
        </div>
      </section>
      <section class="container mx-auto mt-10 px-6">
        <div
          class="overflow-hidden bg-white rounded-lg shadow-lg md:grid md:grid-cols-12"
        >
          <div
            class="h-64 bg-center bg-cover md:h-auto md:col-span-3 lg:col-span-5 xl:col-span-6"
            style="background-image: url(https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=616)"
          ></div>
          <div
            class="px-6 py-12 sm:py-16 sm:pl-8 sm:pr-8 xl:pr-16 md:col-span-9 lg:col-span-7 xl:col-span-6"
          >
            <div class="w-10 h-10 p-2 bg-teal-500 rounded">
              <svg class="text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7 11.8l2.3 9a1 1 0 01-1.5 1l-5.7-3-5.3 3a1 1 0 01-1.5-1l2.3-9a6 6 0 119.3 0zM12 4a4 4 0 110 8 4 4 0 010-8zm.3 12.7a1 1 0 00-1 0L7.6 19 9 13.2a6 6 0 006 0l1.5 5.8-4.2-2.3z"
                />
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="5"
                  y="2"
                  width="15"
                  height="20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7 11.8l2.3 9a1 1 0 01-1.5 1l-5.7-3-5.3 3a1 1 0 01-1.5-1l2.3-9a6 6 0 119.3 0zM12 4a4 4 0 110 8 4 4 0 010-8zm.3 12.7a1 1 0 00-1 0L7.6 19 9 13.2a6 6 0 006 0l1.5 5.8-4.2-2.3z"
                  />
                </mask>
              </svg>
            </div>
            <div class="mt-4">
              <h2
                class="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl font-display"
              >
                Mint's most innovative dealership
              </h2>
              <p class="mt-4 text-gray-700">
                Mint values innovation and the effort to improve this planet
                above all else. We're constantly looking for ways to improve on
                our mission, and Jones Electric's constant innovation in
                sustainability perfectly represents what we're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="container mx-auto px-6">
        <div
          class="py-8 border-t-2 border-gray-400 md:flex md:items-center md:justify-between text-center"
        >
          <div
            class="flex flex-col items-center justify-center sm:flex-row md:justify-start"
          >
            <img
              src="https://cdn.choctawtsa.org/mint/all-gray.svg"
              class="h-6"
              alt="Mint logo"
            />
            <p class="mt-2 text-gray-600 sm:mt-0 sm:ml-6">
              &copy; 2020 Mint Electric, Inc. All rights reserved.
            </p>
          </div>
          <div class="hidden mt-4 sm:block md:mt-auto">
            <router-link to="/" class="text-gray-600">Home</router-link>
            <router-link to="/company" class="ml-2 text-gray-600">
              Company
            </router-link>
            <router-link to="/about" class="ml-2 text-gray-600">
              About
            </router-link>
          </div>
        </div>
      </div>
    </footer>
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
