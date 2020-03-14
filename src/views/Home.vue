<template>
  <div>
    <header
      class="bg-center bg-cover"
      style="background-image: linear-gradient(rgba(40,94,97,0.5), rgba(40,94,97,0.5)), url(https://images.unsplash.com/photo-1464429314063-c1eed7e79974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000)"
    >
      <div class="container mx-auto px-4 pt-4 xs:pb-6 sm:pt-6">
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
        <div
          class="pt-12 pb-6 xs:pb-16 sm:pt-16 sm:pb-24 xl:pt-24 xl:pb-48 lg:pb-36"
        >
          <h1
            class="mx-auto text-3xl font-bold leading-tight tracking-tight text-white xs:text-5xl sm:text-6xl xl:max-w-6xl font-display xl:text-7xl text-center"
          >
            Building a more sustainable future
            <br class="hidden lg:inline" />
            one vehicle at a time.
          </h1>
          <div class="mx-auto xs:w-auto xs:pt-0 xl:mt-12 mt-18 text-center">
            <a
              href="#locations"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded-lg xs:inline-block xs:px-4 xl:px-6 xl:py-2 xl:text-base hover:text-teal-900 hover:bg-teal-100 duration-100"
            >
              Find a location
            </a>
            <a
              href="#faq"
              class="block mt-2 py-2 font-medium text-white border-2 border-transparent rounded-lg xs:inline-block xs:mt-0 xs:ml-2 xs:px-4 sm:ml-4 xl:px-6 xl:py-2 xl:text-base hover:border-gray-500 duration-100"
            >
              Have a question?
            </a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section
        class="mx-auto px-4 pt-4 lg:pt-0 xl:max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-12 transform lg:-translate-y-1/2"
      >
        <router-link
          class="block"
          :to="'/vehicles/specs/' + car.name"
          v-for="(car, i) in carModels"
          :key="i"
        >
          <div
            class="flex items-center overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl h-30 transform hover:-translate-y-1 ease-out duration-100"
          >
            <img
              :src="car.thumbnailUrl"
              :alt="car.thumbnailAlt"
              class="flex-shrink-0 object-cover h-30 w-30"
            />
            <div class="px-5 py-4">
              <h4
                class="text-xl font-semibold text-gray-900 capitalize sm:text-2xl font-display"
              >
                {{ car.name }}
              </h4>
              <p class="text-sm text-gray-700">
                From ${{ car.monthlyPrice }}/mo
              </p>
              <p class="block mt-2 text-teal-500">Explore</p>
            </div>
          </div>
        </router-link>
      </section>
      <section class="mt-10 px-6 lg:mt-0">
        <div class="container mx-auto">
          <h2
            class="text-3xl font-bold leading-tight text-gray-900 md:text-5xl font-display text-center"
          >
            For the
            <span class="text-teal-500">planet,</span>
            not the profits.
          </h2>
          <p class="max-w-3xl mx-auto mt-2 text-gray-700 text-center">
            Our business model doesn’t revolve around sales; our focus is on
            creating a sustainable future and making this planet habitable for
            generations to come.
          </p>
        </div>
        <div
          class="mt-6 md:mt-10 lg:px-4 xl:mx-auto xl:px-4 xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-2 sm:gap-10"
        >
          <div class="col-span-3 lg:col-span-1">
            <div class="max-w-lg">
              <h2
                class="text-2xl font-bold leading-tight text-gray-900 md:text-3xl font-display"
              >
                An investment like no other.
              </h2>
              <p class="mt-2 text-gray-700">
                Mint electric vehicles are among the cheapest on the market.
                You'll be reaping the benefits of a Mint vehicle for years to
                come.
              </p>
            </div>
            <div class="mt-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="p-1 bg-teal-500 rounded">
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-gray-900">
                    Almost an impulse-buy
                  </h2>
                  <p class="mt-1 text-sm text-gray-700">
                    We know you put a lot of thought into the vehicle that
                    you'll be using for the next decade; that's why we've made
                    our cars the easy choice. Mint vehicles are 42.5% cheaper on
                    average than our top competitors. It's a no-brainer.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="p-1 bg-teal-500 rounded">
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-gray-900">
                    Industry-leading reliability
                  </h2>
                  <p class="mt-1 text-sm text-gray-700">
                    An unexpected issue with a vehicle can be the thing between
                    you and months of financial hardship. With a Mint vehicle,
                    that's something you can put behind you with our vehicles'
                    award-winning reliability.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="p-1 bg-teal-500 rounded">
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-gray-900">
                    Electric efficiency
                  </h2>
                  <p class="mt-1 text-sm text-gray-700">
                    With any electric vehicle, you won't have to worry about
                    paying for gas. A Mint vehicle goes the extra mile by
                    leading the industry in efficiency, so you don't have to
                    charge as often.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 sm:mt-0 col-span-2 lg:col-span-1">
            <div
              class="items-center justify-between px-6 pt-5 pb-6 bg-white border border-gray-300 rounded-lg cursor-default select-none lg:flex lg:px-8 lg:pt-7 lg:pb-8 hover:bg-teal-100 hover:border-teal-400 group duration-200 transform hover:scale-101"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-700 uppercase group-hover:text-teal-700 duration-200"
                >
                  Mint
                </h4>
                <div
                  class="w-full h-6 mt-1 overflow-hidden bg-teal-100 border border-transparent rounded shadow-inner group-hover:bg-teal-100 group-hover:border-teal-400 duration-200"
                >
                  <span
                    class="inline-block h-full bg-teal-500 rounded-r duration-200 group-hover:rounded-none group-hover:bg-teal-400"
                    style="width: 57.07113%"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="text-2xl font-semibold leading-tight text-gray-900 lg:text-4xl font-display group-hover:text-teal-900 duration-200"
                >
                  $682
                  <span
                    class="text-lg font-medium text-gray-600 lg:text-xl group-hover:text-teal-600 duration-200"
                  >
                    / mo
                  </span>
                </h4>
                <p
                  class="text-sm leading-none text-gray-700 group-hover:text-teal-700 duration-200"
                >
                  average price
                </p>
              </div>
            </div>
            <div
              class="items-center justify-between mt-6 px-6 pt-5 pb-6 bg-white border border-gray-300 rounded-lg cursor-default select-none lg:flex lg:px-8 lg:pt-7 lg:pb-8 hover:bg-yellow-100 hover:border-yellow-400 group duration-200 transform hover:scale-101"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-700 uppercase group-hover:text-yellow-700 duration-200"
                >
                  Rivian
                </h4>
                <div
                  class="w-full h-6 mt-1 overflow-hidden bg-yellow-100 border border-transparent rounded shadow-inner group-hover:bg-yellow-100 group-hover:border-yellow-400 duration-200"
                >
                  <span
                    class="inline-block h-full bg-yellow-500 rounded-r group-hover:rounded-none duration-200 group-hover:bg-yellow-400"
                    style="width: 98.661088%"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="text-2xl font-semibold leading-tight text-gray-900 lg:text-4xl font-display group-hover:text-yellow-900 duration-200"
                >
                  $1,179
                  <span
                    class="text-lg font-medium text-gray-600 lg:text-xl group-hover:text-yellow-600 duration-200"
                  >
                    / mo
                  </span>
                </h4>
                <p
                  class="text-sm leading-none text-gray-700 group-hover:text-yellow-700 duration-200"
                >
                  average price
                </p>
              </div>
            </div>
            <div
              class="items-center justify-between mt-6 px-6 pt-5 pb-6 bg-white border border-gray-300 rounded-lg cursor-default select-none lg:flex lg:px-8 lg:pt-7 lg:pb-8 hover:bg-red-100 hover:border-red-400 group duration-200 transform hover:scale-101"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-700 uppercase group-hover:text-red-700 duration-200"
                >
                  Tesla
                </h4>
                <div
                  class="w-full h-6 mt-1 overflow-hidden bg-red-100 border border-transparent rounded shadow-inner group-hover:bg-red-100 group-hover:border-red-400 duration-200"
                >
                  <span
                    class="inline-block w-full h-full bg-red-500 rounded-r duration-200 group-hover:rounded-none group-hover:bg-red-400"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="text-2xl font-semibold leading-tight text-gray-900 lg:text-4xl font-display group-hover:text-red-900 duration-200"
                >
                  $1,195
                  <span
                    class="text-lg font-medium text-gray-600 lg:text-xl group-hover:text-red-600 duration-200"
                  >
                    / mo
                  </span>
                </h4>
                <p
                  class="text-sm leading-none text-gray-700 group-hover:text-red-700 duration-200"
                >
                  average price
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto mt-10 px-6">
        <div
          class="items-center justify-between px-6 py-10 bg-teal-100 rounded-lg shadow-inner sm:px-10 sm:py-12 md:px-12 md:py-16 lg:flex lg:px-18 lg:py-18"
        >
          <div>
            <h3
              class="text-3xl font-bold leading-tight text-teal-900 sm:text-5xl font-display"
            >
              Want news on our upcoming products?
            </h3>
            <p
              class="mt-1 text-lg text-teal-500 sm:text-xl md:mt-2 lg:text-2xl xl:mt-0"
            >
              Sign up to get updates.
            </p>
          </div>
          <div
            class="flex-shrink-0 pt-6 md:flex md:items-center lg:block lg:max-w-xs lg:pt-0"
          >
            <div
              class="flex items-center justify-between pt-1 pb-1 pl-4 pr-1 bg-white border-2 border-teal-100 rounded-lg md:max-w-xs lg:w-auto focus-within:bg-white focus-within:border-teal-300"
            >
              <label for="newsletter-email" class="sr-only">
                Enter your email
              </label>
              <input
                class="min-w-0 text-teal-900 placeholder-gray-600 bg-transparent focus:outline-none"
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="ml-2 px-4 py-2 text-sm text-white bg-gray-800 rounded focus:shadow-outline focus:outline-none"
              >
                Submit
              </button>
            </div>
            <p
              class="block mt-2 px-1 text-sm text-teal-500 md:mt-0 md:pl-4 md:pr-0 lg:mt-2 lg:px-2"
            >
              We care about the protection of your data. Read our
              <a class="font-medium text-teal-600 underline" href="#">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </section>
      <section id="locations" class="container mx-auto mt-6 px-6 pt-4">
        <div class="items-center justify-between pb-4 sm:flex">
          <h2
            class="text-xl font-semibold text-gray-900 sm:text-2xl font-display"
          >
            Find a dealer near you
          </h2>
          <a
            href="#faq"
            class="font-medium text-teal-500 sm:text-lg text-right"
          >
            Why can't I buy online?
          </a>
        </div>
        <router-link
          to="/dealerships/dixie-motors"
          class="overflow-hidden bg-white border border-gray-300 rounded-lg hover:border-teal-400 hover:scale-101 transform duration-200 grid sm:grid-cols-12 group"
        >
          <div
            class="z-10 px-6 py-5 sm:z-auto sm:px-8 sm:py-6 sm:col-span-7 md:col-span-6 lg:col-span-5 xl:col-span-4"
          >
            <div class="xs:flex xs:items-baseline">
              <h3
                class="mr-3 text-xl font-medium leading-tight text-teal-500 font-display"
              >
                Dixie Motors
              </h3>
              <p class="text-gray-700">
                4 miles away
              </p>
            </div>
            <div class="mt-2 xs:flex xs:items-center xs:mt-1">
              <div class="flex items-center">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Open 9am - 5pm</p>
              </div>
              <div class="flex items-center xs:ml-6">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Nashville</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-end w-full h-full px-6 py-6 bg-center bg-cover rounded-lg sm:static sm:w-auto sm:h-auto sm:rounded-none sm:col-span-5 md:col-span-6 lg:col-span-7 xl:col-span-8"
            style="background-image: linear-gradient(90deg, white, rgba(255,255,255, 0) 40%), url(img/nashville-map-1.png)"
          >
            <svg
              class="h-9 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </router-link>
        <router-link
          to="/dealerships/opry-autos"
          class="mt-3 overflow-hidden bg-white border border-gray-300 rounded-lg hover:border-teal-400 hover:scale-101 transform duration-200 grid sm:grid-cols-12 group"
        >
          <div
            class="z-10 px-6 py-5 sm:z-auto sm:px-8 sm:py-6 sm:col-span-7 md:col-span-6 lg:col-span-5 xl:col-span-4"
          >
            <div class="xs:flex xs:items-baseline">
              <h3
                class="mr-3 text-xl font-medium leading-tight text-teal-500 font-display"
              >
                Opry Autos
              </h3>
              <p class="text-gray-700">
                7 miles away
              </p>
            </div>
            <div class="mt-2 xs:flex xs:items-center xs:mt-1">
              <div class="flex items-center">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Open 10am - 7pm</p>
              </div>
              <div class="flex items-center xs:ml-6">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Nashville</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-end w-full h-full px-6 py-6 bg-center bg-cover rounded-lg sm:static sm:w-auto sm:h-auto sm:rounded-none sm:col-span-5 md:col-span-6 lg:col-span-7 xl:col-span-8"
            style="background-image: linear-gradient(90deg, white, rgba(255,255,255, 0) 40%), url(img/nashville-map-2.png)"
          >
            <svg
              class="h-9 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </router-link>
        <router-link
          to="/dealerships/nashville-auto-group"
          class="mt-3 overflow-hidden bg-white border border-gray-300 rounded-lg hover:border-teal-400 hover:scale-101 transform duration-200 grid sm:grid-cols-12 group"
        >
          <div
            class="z-10 px-6 py-5 sm:z-auto sm:px-8 sm:py-6 sm:col-span-7 md:col-span-6 lg:col-span-5 xl:col-span-4"
          >
            <div class="xs:flex xs:items-baseline">
              <h3
                class="mr-3 text-xl font-medium leading-tight text-teal-500 font-display"
              >
                Nashville Auto Group
              </h3>
              <p class="text-gray-700">
                14 miles away
              </p>
            </div>
            <div class="mt-2 xs:flex xs:items-center xs:mt-1">
              <div class="flex items-center">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Open 9am - 5pm</p>
              </div>
              <div class="flex items-center xs:ml-6">
                <svg
                  class="h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="ml-2 text-gray-600">Nashville</p>
              </div>
            </div>
          </div>
          <div
            class="absolute flex items-center justify-end w-full h-full px-6 py-6 bg-center bg-cover rounded-lg sm:static sm:w-auto sm:h-auto sm:rounded-none sm:col-span-5 md:col-span-6 lg:col-span-7 xl:col-span-8"
            style="background-image: linear-gradient(90deg, white, rgba(255,255,255, 0) 40%), url(img/nashville-map-3.png)"
          >
            <svg
              class="h-9 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </router-link>
      </section>
      <section
        class="container mx-auto mt-10 px-6 pb-10 grid gap-5 grid-cols-1 md:grid-cols-2"
      >
        <div
          class="w-full h-full px-6 py-10 bg-center bg-cover rounded-lg lg:px-10 lg:py-16 col-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1568048478323-26b5c074ca70?exp=-15&sat=25&w=606)"
        >
          <p
            class="font-medium leading-tight tracking-wider text-gray-500 uppercase lg:text-lg"
          >
            Hydroelectric Power
          </p>
          <h2
            class="text-4xl font-bold leading-tight text-white lg:text-5xl font-display"
          >
            Go with the flow
          </h2>
          <p class="mt-4 text-gray-400">
            Our factories are partially powered by clean energy produced by
            hydroelectric sources, like dams. Dams provide easy, clean energy to
            areas near a flowing water source; we're dedicated to producing our
            beautiful vehicles in clean places like this.
          </p>
        </div>
        <div
          class="w-full h-full px-6 py-10 bg-center bg-cover rounded-lg lg:px-10 lg:py-16 col-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1580132749356-23736cd4809e?exp=-10&w=606)"
        >
          <p
            class="font-medium leading-tight tracking-wider text-gray-500 uppercase lg:text-lg"
          >
            Nuclear Power
          </p>
          <h2
            class="text-4xl font-bold leading-tight text-white lg:text-5xl font-display"
          >
            The potential of a particle
          </h2>
          <p class="mt-4 text-gray-400">
            While certainly not being the
            <span class="italic">safest</span>
            source of energy around, nuclear energy has massive potential. We
            don't envision nuclear fission being around for the long-term, but
            it's a moderately clean transitional source of energy as we move on
            to better things like nuclear and as we build up our other renewable
            sources.
          </p>
        </div>
        <div
          class="w-full h-full px-6 py-10 bg-center bg-cover rounded-lg lg:px-10 lg:py-16 col-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1508790762848-8a3096277c8f?exp=-10&w=606)"
        >
          <p
            class="font-medium leading-tight tracking-wider text-gray-500 uppercase lg:text-lg"
          >
            Solar Power
          </p>
          <h2
            class="text-4xl font-bold leading-tight text-white lg:text-5xl font-display"
          >
            Shine bright
          </h2>
          <p class="mt-4 text-gray-400">
            For more arid areas that receive a lot of sun, solar energy is a
            fantastic choice. Desert areas in states like Nevada are prime
            choices to build solar farms, like we did. Our Nevada offices are
            powered completely by solar energy.
          </p>
        </div>
        <div
          class="w-full h-full px-6 py-10 bg-center bg-cover rounded-lg lg:px-10 lg:py-16 col-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1573486145949-182147241fa6?exp=-10&w=606)"
        >
          <p
            class="font-medium leading-tight tracking-wider text-gray-500 uppercase lg:text-lg"
          >
            Wind Power
          </p>
          <h2
            class="text-4xl font-bold leading-tight text-white lg:text-5xl font-display"
          >
            More than a passing breeze
          </h2>
          <p class="mt-4 text-gray-400">
            Wind is set to be the prime source of renewable energy across the
            Great Plains. Our production centers and headquarters in Oklahoma
            are primarily powered by this renewable source, and we're working to
            expand it across the state and surrounding areas.
          </p>
        </div>
      </section>
      <section id="faq" class="bg-teal-500">
        <div class="container mx-auto px-6 pt-10 pb-16">
          <h2
            class="pb-6 text-4xl font-bold leading-tight text-white md:text-5xl font-display"
          >
            Frequently asked questions
          </h2>
          <div
            class="pt-8 border-t-2 border-teal-400 grid md:grid-cols-2 gap-3 md:gap-6"
          >
            <div>
              <div>
                <h3 class="text-xl font-semibold text-teal-100">
                  Can I buy online?
                </h3>
                <p class="mt-1 text-teal-200">
                  Unfortunately, we don't take online orders at this time. We're
                  primarily focused on scaling up our production to meet the
                  high demand already presented by our sales at our partner
                  dealerships. Once we have the capacity to meet the demand, we
                  will be offering online orders.
                </p>
              </div>
              <div class="mt-3">
                <h3 class="text-xl font-semibold text-teal-100">
                  Can I buy a vehicle from outside of the US?
                </h3>
                <p class="mt-1 text-teal-200">
                  Not at this time, but we are working on making this a
                  possibility. We're still working to meet the demand of US
                  consumers, but we're working out deals with Canadian and
                  Australian dealerships in the meantime. Once we're ready for
                  online orders, most countries will be able to purchase a
                  vehicle online just like our US consumers.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 class="text-xl font-semibold text-teal-100">
                  Are your products made in the US?
                </h3>
                <p class="mt-1 text-teal-200">
                  We're very proud to be able to answer "yes" to this question.
                  We employ 3,400 people in total across the United States in
                  our production lines and offices.
                </p>
              </div>
              <div class="mt-3">
                <h3 class="text-xl font-semibold text-teal-100">
                  How do I charge my Mint vehicle?
                </h3>
                <p class="mt-1 text-teal-200">
                  Any purchase of a Mint vehicle comes with a charger for you to
                  keep at your house. We have also made our vehicles compatible
                  with Tesla SuperChargers and are building our own network of
                  chargers across the United States for on-the-road charging.
                </p>
              </div>
              <div class="mt-3">
                <h3 class="text-xl font-semibold text-teal-100">
                  How long is the range for my vehicle?
                </h3>
                <p class="mt-1 text-teal-200">
                  Each vehicle has a different range and recharging time. You
                  can find these listed on each product's spec page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-teal-500">
      <div class="container mx-auto px-6">
        <div
          class="py-8 border-t-2 border-teal-400 md:flex md:items-center md:justify-between text-center"
        >
          <div
            class="flex flex-col items-center justify-center sm:flex-row md:justify-start"
          >
            <img
              src="https://cdn.choctawtsa.org/mint/teal-background.svg"
              class="h-6"
              alt="Mint logo"
            />
            <p class="mt-2 text-teal-200 sm:mt-0 sm:ml-6">
              &copy; 2020 Mint Electric, Inc. All rights reserved.
            </p>
          </div>
          <div class="hidden mt-4 sm:block md:mt-auto">
            <router-link to="/" class="text-teal-200">Home</router-link>
            <router-link to="/company" class="ml-2 text-teal-200">
              Company
            </router-link>
            <router-link to="/about" class="ml-2 text-teal-200">
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
  name: "home",
  data() {
    return {
      menuOpen: false,
      carModels: [
        {
          name: "sieberi",
          monthlyPrice: 499,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1532988633349-d3dfb28ee834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&h=360",
          thumbnailAlt: "Mint Sieberi"
        },
        {
          name: "viridis",
          monthlyPrice: 899,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&h=360",
          thumbnailAlt: "Mint Viridis"
        },
        {
          name: "tauschii",
          monthlyPrice: 699,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&h=360",
          thumbnailAlt: "Mint Tauschii"
        }
      ]
    };
  }
};
</script>
