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
            class="mx-auto text-3xl font-bold leading-tight text-white xs:text-4xl sm:text-5xl xl:max-w-6xl xl:text-6xl text-center"
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
    </main>
  </div>
</template>

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
