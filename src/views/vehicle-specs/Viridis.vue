<template>
  <div>
    <header
      class="sticky inset-x-0 top-0 bg-center bg-cover xs:static"
      style="background-image: linear-gradient(rgba(45,55,72,0.5), rgba(45,55,72,0.5)), url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000); top: 0"
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
                exact-active-class="font-medium text-gray-900 bg-gray-200"
              >
                Company
              </router-link>
              <router-link
                to="/impact"
                class="px-10 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-center"
                exact-active-class="font-medium text-gray-900 bg-gray-200"
              >
                Impact
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
              to="/impact"
              class="ml-6 duration-100"
              exact-active-class="font-semibold text-white"
            >
              Impact
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
        <div class="pt-12 pb-24 sm:pt-20 sm:pb-30">
          <p class="text-lg font-semibold text-gray-400 uppercase sm:text-xl">
            Specifications
          </p>
          <h1
            class="text-6xl font-bold leading-none text-white uppercase md:tracking-wider sm:text-7xl text-left font-display"
          >
            Viridis
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
                Base monthly price: US$899
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                Some color customizations can raise the price to $909/month
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Base monthly price: US$999
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                Some color customizations can raise the price to $1009/month
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Base monthly price: US$1099
              </p>
              <p class="mt-3 text-gray-700">
                Some color customizations can raise the price to $1109/month
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
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                464 mi (747 km) average
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                475 mi (764 km) city
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                453 mi (729 km) highway
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                544 mi (875 km) average
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                550 mi (885 km) city
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3">
                538 mi (866 km) highway
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
                52 mi (84 km) range available per hour
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                61 mi (98 km) range available per hour
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                69 mi (111 km) range available per hour
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
                161 mi (259 km) range available per 30 minutes
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                205 mi (330 km) range available per 30 minutes
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                236 mi (380 km) range available per 30 minutes
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
                Dual-motor rear-wheel drive
              </p>
            </div>
            <div class="col-span-2">
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard &amp; Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0 sm:text-center">
                Triple-motor rear-wheel drive
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
                449 hp
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                667 hp
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                883 hp
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
                4.7 seconds
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                4.1 seconds
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                3.5 seconds
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
                162 mph (261 km/h)
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Standard
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                189 mph (304 km/h)
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase sm:hidden">
                Performance
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                217 mph (349 km/h)
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
