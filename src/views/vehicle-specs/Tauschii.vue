<template>
  <div>
    <header
      class="sticky inset-x-0 top-0 bg-center bg-cover xs:static"
      style="background-image: linear-gradient(rgba(43,108,176,0.5), rgba(43,108,176,0.5)), url(https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000)"
    >
      <div class="container mx-auto px-4 pt-4 sm:pt-6">
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
                active-class="font-medium text-gray-900 bg-gray-200"
              >
                Company
              </router-link>
              <router-link
                to="/about"
                class="px-10 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-center"
                active-class="font-medium text-gray-900 bg-gray-200"
              >
                About
              </router-link>
            </div>
          </div>
          <div class="hidden font-medium text-blue-200 sm:block">
            <router-link
              to="/"
              class="hover:text-blue-100 duration-100"
              exact-active-class="font-semibold text-white"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-6 hover:text-blue-100 duration-100"
              active-class="font-semibold text-white"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-6 hover:text-blue-100 duration-100"
              active-class="font-semibold text-white"
            >
              About
            </router-link>
          </div>
        </nav>
        <div class="pt-12 pb-24 sm:pt-20 sm:pb-30">
          <p class="text-lg font-semibold text-blue-200 uppercase sm:text-xl">
            Specifications
          </p>
          <h1
            class="text-6xl font-bold leading-none text-white uppercase md:tracking-wider sm:text-7xl text-left font-display"
          >
            Taushii
          </h1>
        </div>
      </div>
    </header>
    <main
      class="container relative mx-auto -mt-2 px-6 py-10 overflow-hidden bg-gray-200 border-2 border-gray-200 rounded-t-lg xs:mt-0"
    >
      <section id="specs">
        <div class="hidden pb-4 sm:grid grid-cols-7">
          <div class="col-span-2">
            <p class="font-semibold text-gray-600 uppercase">Category</p>
          </div>
          <div class="col-span-5 grid grid-cols-3 gap-6">
            <p class="font-semibold text-gray-600 uppercase">Economy</p>
            <p class="font-semibold text-gray-600 uppercase">Standard</p>
            <p class="font-semibold text-gray-600 uppercase">Performance</p>
          </div>
        </div>
        <div
          class="pb-6 border-gray-300 sm:pt-6 sm:border-t-2 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">
              Pricing
              <sup class="text-sm font-medium text-gray-600">1</sup>
            </h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Base monthly price: US$699
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                Some color customizations can raise the price to $709/month
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Base monthly price: US$799
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                Some color customizations can raise the price to $809/month
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Base monthly price: US$899
              </p>
              <p class="mt-3 text-gray-700">
                Some color customizations can raise the price to $909/month
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">Range</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                341 mi (549 km) average
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                350 mi (563 km) city
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                332 mi (534 km) highway
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                391 mi (628 km) average
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                400 mi (643 km) city
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                381 mi (613 km) highway
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                442 mi (711 km) average
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                450 mi (724 km) city
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                434 mi (698 km) highway
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">AC Charging</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                48 mi (77 km) range available per hour
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                57 mi (92 km) range available per hour
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                65 mi (105 km) range available per hour
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">DC Charging</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                153 mi (246 km) range available per 30 minutes
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                197 mi (317 km) range available per 30 minutes
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                228 mi (367 km) range available per 30 minutes
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">Powertrain</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Single-motor all-wheel drive
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Dual-motor all-wheel drive
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Dual-motor rear-wheel drive
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">Peak Power</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                399 hp
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                527 hp
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                683 hp
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">Acceleration</h3>
            <p class="mt-1 text-gray-600">0-60 mph (0-97 km/h)</p>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                5.1 seconds
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                4.7 seconds
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                4.4 seconds
              </p>
            </div>
          </div>
        </div>

        <div
          class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
        >
          <div class="col-span-2">
            <h3 class="text-2xl font-bold text-gray-800">Top Speed</h3>
          </div>
          <div class="mt-4 sm:mt-0 grid xs:grid-cols-3 gap-6 col-span-5">
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Economy
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                145 mph (233 km/h)
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                162 mph (261 km/h)
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                189 mph (304 km/h)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-10">
        <ol class="text-sm text-gray-600 list-decimal">
          <li>
            The monthly price listed is based off of a loan with a 60-month term
            at 3.5% APR. These are estimated monthly payments, available in most
            states subject to credit approval and term length. Your payments and
            rates may be higher. Additional charges such as tax, title,
            registration, and other fees are due at signing.
          </li>
        </ol>
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
            <router-link
              to="/"
              class="text-gray-600 hover:text-gray-700 duration-100"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-2 text-gray-600 hover:text-gray-700 duration-100"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-2 text-gray-600 hover:text-gray-700 duration-100"
            >
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
