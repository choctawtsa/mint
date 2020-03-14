<template>
  <div>
    <header
      class="sticky inset-x-0 top-0 bg-center bg-cover xs:static"
      style="background-image: linear-gradient(45deg, rgba(15, 80, 137, 0.7), rgba(156, 15, 42, 0.7)), url(https://images.unsplash.com/photo-1509910513818-4d13fdaf89c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000);"
    >
      <div class="container mx-auto px-4 pt-3 sm:pt-2">
        <nav class="flex items-center justify-between pb-6">
          <div class="flex items-center">
            <a class="block py-2 pr-6" href="https://www.choctawtsa.org">
              <img
                class="w-24 sm:w-32"
                src="/img/logo-white.svg"
                alt="Choctaw TSA logo"
              />
            </a>
            <router-link
              class="block py-2 pl-6 border-l-2"
              to="/"
              style="border-color: rgba(255,255,255,0.25)"
            >
              <img
                class="-mt-2 sm:w-24 w-18"
                src="/img/all-white.svg"
                alt="Mint Electric logo"
              />
            </router-link>
          </div>

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
          <div class="hidden font-medium text-red-200 sm:block">
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
        <div class="pt-12 pb-12 xs:pb-24 sm:pt-20 sm:pb-30">
          <h1
            class="text-6xl font-bold leading-none text-white sm:text-7xl text-left font-display"
          >
            About
          </h1>
          <div class="pt-20 xs:pt-8">
            <a
              href="/docs/LEAP-Report.pdf"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded-lg xs:inline-block xs:px-4 xl:px-6 xl:py-2 xl:text-base hover:bg-gray-200 text-center duration-100"
            >
              LEAP Report
            </a>
            <a
              href="/docs/Student-Copyright-Checklist.pdf"
              class="block mt-2 py-2 font-medium text-white border-2 border-transparent rounded-lg xs:inline-block xs:mt-0 xs:ml-2 xs:px-4 sm:ml-4 xl:px-6 xl:py-2 xl:text-base hover:border-gray-500 text-center duration-100"
            >
              Copyright Checklist
            </a>
          </div>
        </div>
      </div>
    </header>
    <main
      class="container relative mx-auto -mt-2 px-6 py-10 overflow-hidden bg-gray-200 border-2 border-gray-200 rounded-t-lg xs:mt-0"
    >
      <p class="pb-2 text-sm text-gray-600">
        Note: This website has been built completely by our team and is not
        using any templates of any kind, as per section D of the Preliminary
        Round Regulations for Webmaster specified in
        <span class="italic">
          the TSA High School Competitive Events Guide for the 2019 and 2020
          National TSA Conferences.
        </span>
        Additionally, all items listed here are licensed under the
        <a href="https://opensource.org/licenses/MIT" class="text-blue-500">
          MIT License
        </a>
        unless otherwise noted.
      </p>
      <p class="pb-4 text-sm text-gray-600">
        State conference judges: TSA updated Webmaster regulations on the
        <a
          href="https://tsaweb.org/competitions-programs/tsa/competition-updates"
          class="text-blue-500"
        >
          Competition Updates
        </a>
        page to remove requirements for the CTE and TSA websites. As such, we
        have left them out of our submission. We did obtain confirmation that
        our interpretation was correct from the National TSA Webmaster event
        coordinator, Emily Hummell, and the OKTSA Webmaster event manager, Jill
        Sullins, to ensure that this wouldn't be an issue at either conference.
        A copy of email exchanges between us and both officials can be found
        <a href="/docs/Emails.pdf" class="text-blue-500">here.</a>
      </p>
      <div
        class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Styling</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div>
            <p class="font-semibold text-gray-600 uppercase">
              Tailwind CSS
            </p>
            <p class="mt-2 text-gray-700">
              Tailwind CSS is a utility framework that makes developing much
              easier. Instead of having to check Bootstrap's docs, find a
              component that fits your needs well enough, and then having to
              fight with Bootstrap's predetermined styles to customize the
              component, we chose Tailwind. Tailwind allows you to create
              everything yourself, without having to write any CSS (well, you
              can write CSS if you really need to, but those occasions are few
              and far between). It's difficult to explain exactly what Tailwind
              offers through a write-up like this, so we'd recommend checking it
              out at
              <a class="text-blue-500" href="https://tailwindcss.com">
                tailwindcss.com;
              </a>
              or, you can check out its
              <a
                class="text-blue-500"
                href="https://github.com/tailwindcss/tailwindcss"
              >
                GitHub repository.
              </a>
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Purge CSS
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Tailwind CSS generates a ton of classes; our config in
                particular is 582,036 lines long. That's 13.0
                <span class="italic">megabytes!</span>
                Purge CSS removes all of the utilities that aren't actively
                being used by our site (which is most of them), and our
                deployment platform compresses the file down to just over 20 KB.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Autoprefixer
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Tailwind doesn't include vendor prefixes on CSS properties by
                default to lower the size of the CDN build. However, we've
                decided to use a tool called Autoprefixer that goes through and
                adds vendor prefixes to our CSS for better cross-browser
                compatability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Function</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div>
            <p class="font-semibold text-gray-600 uppercase">
              Vue.js
            </p>
            <p class="mt-2 text-gray-700">
              Our website was built with the front-end JavaScript framework
              <a class="text-blue-500" href="https://vuejs.org">
                Vue.js.
              </a>
              The decision to use Vue was really just to get used to
              technologies that are actually used in the industry. While we did
              use Vue to build our site and got some good use out of it, we
              definitely didn't use it to its full potential. A technology like
              Vue isn't mastered quickly, especially by high school students.
              Next year, we're hoping to make better use of Vue, but that
              depends on whether the theme warrants extended Vue functionality.
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Vue Router
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Vue tooling to allow for navigation between pages in single-page
                applications (like this site).
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Vue CLI
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                A first-party development environment for Vue with support for
                live-servers, single-file components, etc..
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Babel
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                A JavaScript transcompiler to convert code written in ES6 or
                later syntax to code that can be run by older JavaScript
                engines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-6 pb-6 border-t-2 border-gray-300 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Graphics</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div>
            <p class="font-semibold text-gray-600 uppercase">
              Unsplash
            </p>
            <p class="mt-2 text-gray-700">
              All images on this site are free images from
              <a class="text-blue-500" href="https://unsplash.com">
                Unsplash.
              </a>
              Unsplash has a very permissive
              <a class="text-blue-500" href="https://unsplash.com/license">
                license
              </a>
              that grants users an "irrevocable, nonexclusive, worldwide
              copyright license to download, copy, modify, distribute, perform,
              and use photos from Unsplash for free, including for commercial
              purposes, without permission from or attributing the photographer
              or Unsplash." The service's huge stock of high-quality photos
              makes it a hugely useful tool for our team.
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Heroicons
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Heroicons is a very versatile and useful SVG icon set
                specifically for UI design.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Eva Icons
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Eva Icons is another useful icon set that we used; it contained
                an icon that we needed but Heroicons didn't have, so we had to
                use two icon sets.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Google Maps
              </p>
              <p class="mt-2 text-gray-700 xs:mt-3 sm:mt-0">
                Graphics for maps were provided courtesy of Google Maps, and
                follow Google's attribution guidelines as outlined
                <a
                  href="https://www.google.com/permissions/geoguidelines/attr-guide/"
                  class="text-blue-500"
                >
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
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
