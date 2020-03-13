<template>
  <div>
    <header
      class="bg-center bg-cover"
      style="background-image: linear-gradient(90deg, white 0%, white 20%, rgba(255,255,255,0) 100%), url(/img/nashville-map-2.png)"
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
            Opry Autos
          </h1>
          <p class="mt-1 text-teal-900 lg:text-xl">
            11890 Opry Dr, Nashville, TN 37203
          </p>
          <div class="mt-16 xs:mt-12 lg:mt-16">
            <a
              href="https://www.google.com/maps/place/Nashville,+TN/"
              class="block px-4 py-3 font-medium text-white bg-gray-800 rounded-lg shadow-xl xs:inline-block xs:py-2 hover:bg-gray-700 text-center xs:text-left duration-200"
            >
              Get Directions
            </a>
            <a
              href="#"
              class="block mt-4 px-4 py-3 font-medium text-gray-800 bg-white rounded-lg shadow-xl xs:inline-block xs:mt-0 xs:ml-5 xs:py-2 hover:bg-gray-100 text-center xs:text-left duration-200"
            >
              Contact
            </a>
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
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.7"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Jeremy Patterson
                </h3>
                <p class="text-sm text-gray-700">Manager</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.5"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Anna Hughes
                </h3>
                <p class="text-sm text-gray-700">Director of Sales</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.7"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  David Turner
                </h3>
                <p class="text-sm text-gray-700">Director of Finance</p>
              </div>
            </div>
            <div class="flex items-center px-4 py-3 border-t border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=100&h=100&facepad=1.5"
                class="w-12 h-12 rounded-full "
              />
              <div class="ml-3">
                <h3 class="font-medium leading-snug text-teal-500">
                  Kelly Hall
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
              best in the area in ratings, Opry Autos has been delighting
              customers since it opened in 2018.
            </p>
            <p class="mt-2 text-gray-700">
              Opry Autos is rated first in efficiency out of every car
              dealership in the United States. That means that we get you in and
              out with a car you love as quickly as possible, without skimping
              on anything. In fact, you'll find most of our reviews say that
              we're among the nicest people they've met.
            </p>
            <p class="mt-2 text-gray-700">
              Our customers
              <span class="italic">always</span>
              feel well cared for when they shop at Opry Autos. Our dealership
              even has a caf&eacute; in it with complementary drinks and snacks
              for everyone as they purchase their vehicle.
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
                The most efficient dealership in the nation
              </h2>
              <p class="mt-4 text-gray-700">
                It's not easy being this amazing, but Opry Autos has done it
                anyways. We're proud to be serving our customers better than any
                other dealership in the nation, and we won't be stopping anytime
                soon.
              </p>
            </div>
            <div class="flex-wrap items-center justify-between mt-6 xs:flex">
              <div class="flex-auto">
                <div class="flex items-center">
                  <span class="text-3xl font-bold leading-snug text-teal-500">
                    4.8
                  </span>
                  <svg
                    class="h-6 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                    />
                    <mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="2"
                      width="20"
                      height="19"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                      />
                    </mask>
                  </svg>
                </div>
                <span class="leading-tight text-gray-600">
                  Customer Reviews
                </span>
              </div>
              <div class="flex-auto mt-2 xs:mt-0">
                <div class="flex items-center">
                  <span class="text-3xl font-bold leading-snug text-teal-500">
                    5.0
                  </span>
                  <svg
                    class="h-6 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                    />
                    <mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="2"
                      width="20"
                      height="19"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                      />
                    </mask>
                  </svg>
                </div>
                <span class="leading-tight text-gray-600">
                  USA Today
                </span>
              </div>
              <div class="flex-auto mt-2 sm:mt-0">
                <div class="flex items-center">
                  <span class="text-3xl font-bold leading-snug text-teal-500">
                    4.9
                  </span>
                  <svg
                    class="h-6 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                    />
                    <mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="2"
                      width="20"
                      height="19"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1 20.8a1 1 0 001 0c.4-.3.5-.6.4-1l-1-5.6 4.2-4a1 1 0 00-.6-1.7l-5.7-.9-2.5-5c-.3-.8-1.5-.8-1.8 0l-2.5 5-5.7.9a1 1 0 00-.6 1.7l4.1 4-1 5.6a1 1 0 001.5 1l5.1-2.6 5.1 2.6zm-4.6-4.6a1 1 0 00-1 0l-3.7 2 .7-4.2c0-.3 0-.7-.3-1l-3-2.8 4.2-.7c.3 0 .6-.2.7-.5L12 5.2 13.9 9c.1.3.4.5.7.5l4.2.7-3 2.9a1 1 0 00-.3.9l.7 4.1-3.7-2z"
                      />
                    </mask>
                  </svg>
                </div>
                <span class="leading-tight text-gray-600">Mashable</span>
              </div>
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
