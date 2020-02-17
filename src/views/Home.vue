<template>
  <div>
    <div
      class="bg-cover"
      style="background-image: linear-gradient(rgba(40,94,97,0.5), rgba(40,94,97,0.5)), url(https://images.unsplash.com/photo-1429549462610-8dcf74f61550)"
    >
      <div class="container mx-auto px-4 pt-6 pb-6">
        <nav class="flex items-center justify-between pb-6">
          <img
            class="w-16 xs:w-20 sm:w-24"
            src="img/all-white.svg"
            alt="Mint Electric logo"
          />
          <div class="hidden sm:block">
            <a class="font-semibold text-white" href="#">Home</a>
            <a
              class="ml-6 font-medium text-gray-400 hover:text-white duration-100"
              href="#"
            >
              News
            </a>
            <a
              class="ml-6 font-medium text-gray-400 hover:text-white duration-100"
              href="#"
            >
              Impact
            </a>
          </div>
        </nav>
        <div class="pt-12 pb-16 sm:pt-16 sm:pb-24 xl:pt-24 xl:pb-48 lg:pb-36">
          <h1
            class="mx-auto text-3xl font-bold leading-tight tracking-tight text-white xs:text-4xl sm:text-5xl xl:max-w-6xl xl:text-6xl text-center"
          >
            Building a more sustainable future,
            <br class="hidden lg:inline" />
            one vehicle at a time.
          </h1>
          <div class="w-56 mx-auto mt-8 xs:w-auto xl:mt-12 text-center">
            <a
              href="#"
              class="block py-1 text-sm font-medium text-gray-900 bg-white border-2 border-transparent rounded-lg xs:inline-block xs:px-4 sm:text-base xl:px-6 xl:py-2 hover:text-teal-900 hover:bg-teal-100 duration-100"
            >
              Browse models
            </a>
            <a
              href="#"
              class="block mt-2 py-1 text-sm font-medium text-white border-2 border-transparent rounded-lg xs:inline-block xs:mt-0 xs:ml-2 xs:px-4 sm:ml-4 sm:text-base xl:px-6 xl:py-2 hover:border-gray-500 duration-100"
            >
              Our carbon impact
            </a>
          </div>
        </div>
      </div>
    </div>
    <main>
      <section
        class="mx-auto px-4 pt-4 lg:pt-0 xl:max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-12 transform lg:-translate-y-1/2"
      >
        <div
          class="flex items-center overflow-hidden bg-gray-800 rounded-lg h-30"
          v-for="(car, i) in carModels"
          :key="i"
        >
          <img
            :src="car.thumbnailUrl"
            :alt="car.thumbnailAlt"
            class="flex-shrink-0 object-cover h-30 w-30"
          />
          <div class="px-5 py-4">
            <h4 class="text-2xl font-semibold text-white">{{ car.name }}</h4>
            <p class="text-sm text-gray-600">From ${{ car.monthlyPrice }}/mo</p>
            <a href="#" class="block mt-2 text-teal-500">Explore</a>
          </div>
        </div>
      </section>
      <section class="container mx-auto mt-10 px-6 lg:mt-0">
        <h2
          class="text-3xl font-bold leading-tight text-white md:text-4xl text-center"
        >
          For the
          <span class="text-teal-500">planet,</span>
          not the profits.
        </h2>
        <p class="max-w-3xl mx-auto mt-2 text-gray-600 text-center">
          Our business model doesn’t revolve around sales; our focus is on
          creating a sustainable future and making this planet habitable for
          generations to come.
        </p>
        <div
          class="mt-10 grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-2 sm:gap-10"
        >
          <div class="col-span-3 lg:col-span-1">
            <div class="max-w-lg">
              <h2
                class="text-2xl font-bold leading-tight text-white md:text-3xl"
              >
                An investment like no other.
              </h2>
              <p class="mt-2 text-gray-600">
                Mint electric vehicles are among the cheapest on the market.
                You'll be reaping the benefits of a Mint vehicle for years to
                come.
              </p>
            </div>
            <div class="mt-7">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                      fill="#38B2AC"
                    />
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="8"
                      width="22"
                      height="16"
                    >
                      <path
                        d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0)"></g>
                  </svg>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    Impulse-buying cheap
                  </h2>
                  <p class="mt-1 text-sm text-gray-600">
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                      fill="#38B2AC"
                    />
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="8"
                      width="22"
                      height="16"
                    >
                      <path
                        d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0)"></g>
                  </svg>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    More reliable than the moon
                  </h2>
                  <p class="mt-1 text-sm text-gray-600">
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                      fill="#38B2AC"
                    />
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="8"
                      width="22"
                      height="16"
                    >
                      <path
                        d="M13.1511 23.9999C12.7831 23.9999 12.4311 23.8479 12.1791 23.5799L5.69509 16.6746C5.18976 16.1386 5.21776 15.2946 5.75376 14.7906C6.29109 14.2866 7.13509 14.3133 7.63776 14.8493L13.1378 20.7039L24.3484 8.43461C24.8471 7.88928 25.6898 7.85328 26.2338 8.34928C26.7764 8.84528 26.8138 9.68928 26.3178 10.2319L14.1351 23.5653C13.8858 23.8399 13.5311 23.9973 13.1604 23.9999H13.1511Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0)"></g>
                  </svg>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    Gas is for chumps
                  </h2>
                  <p class="mt-1 text-sm text-gray-600">
                    With any electric vehicle, you won't have to worry about
                    paying for gas. A Mint vehicle goes the extra mile by
                    leading the industry in efficieny, so you don't have to
                    charge as often.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 sm:mt-0 col-span-2 lg:col-span-1">
            <div
              class="items-center justify-between px-6 pt-5 pb-6 bg-gray-800 border border-gray-700 rounded-lg lg:flex lg:px-8 lg:pt-7 lg:pb-8"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-600 uppercase"
                >
                  Mint
                </h4>
                <div class="w-full h-6 mt-1 bg-gray-700 rounded">
                  <span
                    class="inline-block h-6 bg-teal-500 rounded"
                    style="width: 57.07113%"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="font-semibold text-white text-2xl lg:text-3.5xl leading-tight"
                >
                  $682
                  <span class="text-lg font-medium text-gray-400 lg:text-xl">
                    / mo
                  </span>
                </h4>
                <p class="text-sm leading-none text-gray-600">average price</p>
              </div>
            </div>
            <div
              class="items-center justify-between mt-6 px-6 pt-5 pb-6 bg-gray-800 border border-gray-700 rounded-lg lg:flex lg:px-8 lg:pt-7 lg:pb-8"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-600 uppercase"
                >
                  Rivian
                </h4>
                <div class="w-full h-6 mt-1 bg-gray-700 rounded">
                  <span
                    class="inline-block h-6 bg-yellow-500 rounded"
                    style="width: 98.661088%"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="font-semibold text-white text-2xl lg:text-3.5xl leading-tight"
                >
                  $1,179
                  <span class="text-lg font-medium text-gray-400 lg:text-xl">
                    / mo
                  </span>
                </h4>
                <p class="text-sm leading-none text-gray-600">average price</p>
              </div>
            </div>
            <div
              class="items-center justify-between mt-6 px-6 pt-5 pb-6 bg-gray-800 border border-gray-700 rounded-lg lg:flex lg:px-8 lg:pt-7 lg:pb-8"
            >
              <div class="lg:w-3/5 xl:w-2/3">
                <h4
                  class="font-semibold tracking-wider text-gray-600 uppercase"
                >
                  Tesla
                </h4>
                <div class="w-full h-6 mt-1 bg-gray-700 rounded">
                  <span
                    class="inline-block w-full h-6 bg-red-500 rounded"
                  ></span>
                </div>
              </div>
              <div class="mt-2 lg:mt-0 lg:text-center">
                <h4
                  class="font-semibold text-white text-2xl lg:text-3.5xl leading-tight"
                >
                  $1,195
                  <span class="text-lg font-medium text-gray-400 lg:text-xl">
                    / mo
                  </span>
                </h4>
                <p class="text-sm leading-none text-gray-600">average price</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto mt-10 px-6">
        <div
          class="items-center justify-between px-6 py-10 bg-teal-900 rounded-lg sm:px-10 sm:py-12 md:px-12 md:py-16 lg:flex lg:px-18 lg:py-18"
        >
          <div>
            <h3
              class="text-3xl font-bold leading-tight text-teal-200 sm:text-4xl"
            >
              Want news on our upcoming products?
            </h3>
            <p
              class="mt-1 text-lg text-teal-400 sm:text-xl md:mt-2 lg:text-2xl xl:mt-0"
            >
              Sign up to get updates.
            </p>
          </div>
          <div
            class="flex-shrink-0 pt-6 md:flex md:items-center lg:block lg:max-w-xs lg:pt-0"
          >
            <div
              class="flex items-center justify-between pt-1 pb-1 pl-4 pr-1 bg-teal-100 border-2 border-teal-900 rounded-lg md:max-w-xs lg:w-auto focus-within:bg-white focus-within:border-teal-300"
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
              class="block mt-2 px-1 text-sm text-teal-400 md:mt-0 md:pl-4 md:pr-0 lg:mt-2 lg:px-2"
            >
              We care about the protection of your data. Read our
              <a class="font-medium text-teal-200 underline" href="#">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </section>
      <section
        class="container mx-auto mt-10 px-6 pb-10 grid gap-5 grid-cols-2 grid-rows-2"
      >
        <div
          class="w-full h-full px-10 py-16 bg-center bg-cover rounded-lg col-span-1 row-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1568048478323-26b5c074ca70?exp=-15&sat=25)"
        >
          <p class="text-lg font-medium tracking-wider text-gray-500 uppercase">
            Hydroelectric Power
          </p>
          <h2 class="text-4xl font-bold leading-tight text-white">
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
          class="w-full h-full px-10 py-16 bg-center bg-cover rounded-lg col-span-1 row-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1580132749356-23736cd4809e?exp=-10)"
        >
          <p class="text-lg font-medium tracking-wider text-gray-500 uppercase">
            Nuclear Power
          </p>
          <h2 class="text-4xl font-bold leading-tight text-white">
            n&uuml;k
          </h2>
          <p class="mt-4 text-gray-400">
            Some of our plants also operate in cities with large amounts of
            nuclear power. While nuclear certainly isn't the
            <span class="italic">safest</span>
            energy source in the world, it's certainly cleaner than fossil fuels
            and a good step on the road to safe, renewable energy.
          </p>
        </div>
        <img
          hidden
          class="object-cover w-full h-full rounded-lg col-span-1 row-span-1"
          src="img/american-public-power-association-dCx2xFuPWks-unsplash.jpg"
          alt="A solar farm"
        />
        <div
          class="w-full h-full px-10 py-16 bg-center bg-cover rounded-lg col-span-1 row-span-1"
          style="background-image: url(https://images.unsplash.com/photo-1508790762848-8a3096277c8f?exp=-10)"
        >
          <p class="text-lg font-medium tracking-wider text-gray-500 uppercase">
            Solar Power
          </p>
          <h2 class="text-4xl font-bold text-white">
            Eat the sun
          </h2>
          <p class="mt-4 text-gray-400">
            Our offices in Nevada are powered completely by a company-owned
            solar farm. This state-of-the-art facility manages our worldwide
            production and delivery procedures and is the main corporate entity
            in contact with dealerships.
          </p>
        </div>
        <img
          class="object-cover w-full h-full rounded-lg col-span-1 row-span-1"
          src="img/science-in-hd-b_HIKRj7EcY-unsplash.jpg"
          alt="A nuclear power plant"
        />
      </section>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.mosaic {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 20rem));
  grid-gap: 1.25rem;
  gap: 1.25rem;
}
</style>

<script>
// import CarModel from "@/components/CarModel";
// import ParallaxImageCard from "@/components/ParallaxImageCard";

export default {
  name: "home",
  components: {
    // CarModel,
    // ParallaxImageCard
  },
  data() {
    return {
      carModels: [
        {
          name: "Hydrogen",
          monthlyPrice: 299,
          thumbnailUrl:
            "https://cdn.choctawtsa.org/mint/photo-1494976388531-d1058494cdd8.jpg",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Helium",
          monthlyPrice: 499,
          thumbnailUrl:
            "https://cdn.choctawtsa.org/mint/photo-1532988633349-d3dfb28ee834.jpg",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Lithium",
          monthlyPrice: 399,
          thumbnailUrl:
            "https://cdn.choctawtsa.org/mint/photo-1541443131876-44b03de101c5.jpg",
          thumbnailAlt: "Placeholder"
        }
      ]
    };
  }
};
</script>
