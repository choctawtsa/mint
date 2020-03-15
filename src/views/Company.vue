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
              class="hover:text-gray-200 duration-100"
              exact-active-class="font-semibold text-white"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-6 hover:text-gray-200 duration-100"
              active-class="font-semibold text-white"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-6 hover:text-gray-200 duration-100"
              active-class="font-semibold text-white"
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
            <router-link
              :to="{ name: 'home', hash: '#faq' }"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded-lg xs:inline-block xs:px-4 xl:px-6 xl:py-2 xl:text-base hover:text-teal-900 hover:bg-teal-100 duration-100"
            >
              Have a question?
            </router-link>
            <router-link
              to="/about"
              class="block mt-2 py-2 font-medium text-white border-2 border-transparent rounded-lg xs:inline-block xs:mt-0 xs:ml-2 xs:px-4 sm:ml-4 xl:px-6 xl:py-2 xl:text-base hover:border-gray-500 duration-100"
            >
              About this website
            </router-link>
          </div>
        </div>
        <router-link :to="{ path: '/company', hash: '#mission' }">
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
        </router-link>
      </div>
    </header>
    <main>
      <section
        id="mission"
        class="container flex items-center justify-between mx-auto px-6 py-10 grid sm:grid-cols-2 gap-10"
      >
        <div class="max-w-sm">
          <img
            class="object-cover w-full h-64 sm:h-auto"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000"
            alt="Men sitting in front of their laptops."
          />
        </div>
        <div class="lg:max-w-lg lg:ml-0 xl:max-w-xl">
          <h2 class="text-5xl font-bold text-gray-900 lg:text-6xl font-display">
            Our Mission
          </h2>
          <div class="w-20 h-1 my-3 bg-teal-500"></div>
          <p class="pt-2 text-gray-700 lg:text-lg">
            We're not in the business of profits; we're in the business of
            creating a better world. As a society, we're facing countless issues
            that need to be solved. We're doing our part at Mint to help solve
            those issues.
          </p>
          <p class="pt-2 text-gray-700 lg:text-lg">
            Our employees are among the best in the industry and are creating
            solutions to problems nobody else has the courage to tackle.
            Creating a better world requires innovation, and there's nobody
            better at that than Mint.
          </p>
        </div>
      </section>
      <section class="bg-white grid xs:grid-cols-12">
        <div
          class="pt-10 pb-16 pl-6 pr-12 xs:col-span-8 sm:col-span-6 lg:col-span-5"
        >
          <div class="max-w-sm ml-auto">
            <h2 class="text-5xl font-bold text-gray-900 font-display">
              Find us
            </h2>
            <div class="w-20 h-1 my-3 bg-teal-500"></div>
            <div class="pt-8">
              <div>
                <p class="tracking-wide text-gray-600 uppercase">
                  Main HQ
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Oklahoma City, OK
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Engineering Lab
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Nashville, TN
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Quality Assurance
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Cupertino, CA
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Sustainability
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Carson City, NV
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Design
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Tulsa, OK
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-64 bg-center bg-cover xs:h-auto xs:col-span-4 sm:col-span-6 lg:col-span-7"
          style="background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500)"
        ></div>
      </section>
    </main>
    <footer class="bg-teal-500">
      <div class="container mx-auto px-6">
        <div
          class="py-8 md:flex md:items-center md:justify-between text-center"
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
            <router-link
              to="/"
              class="text-teal-200 hover:text-teal-100 duration-100"
            >
              Home
            </router-link>
            <router-link
              to="/company"
              class="ml-2 text-teal-200 hover:text-teal-100 duration-100"
            >
              Company
            </router-link>
            <router-link
              to="/about"
              class="ml-2 text-teal-200 hover:text-teal-100 duration-100"
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
