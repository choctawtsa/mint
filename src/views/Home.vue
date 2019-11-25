<template>
  <main id="home">
    <div class="flex bg-gray-100">
      <div
        class="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:mx-auto">
          <img
            class="-mt-4 rounded-lg shadow-xl sm:-mt-4 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="/img/_m_v_-ZxQE-mbf9_s-unsplash.jpg"
            alt="Interstate"
          />
          <h1
            class="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:mt-8 sm:text-3xl lg:mt-0 xl:text-4xl"
          >
            A major revolution in
            <span class="text-teal-500">electric vehicles.</span>
          </h1>
          <p class="mt-4 text-gray-600 sm:text-xl sm:mt-6">
            Electric vehicles are taking over the world. By 2030, nearly a third
            of all vehicles in America will be electric. Here at Mint, we're
            rising to meet those needs with beautiful, sustainable products.
          </p>
          <div>
            <!-- There's still a lot to clean up with this two-button setup, esp on mobile screens -->
            <a
              href="#"
              class="mt-4 mr-4 shadow-lg sm:mt-6 btn btn-teal transition-medium hover:shadow-2xl hover:bg-teal-600"
              >Our products</a
            >
            <router-link
              to="/dictionary"
              class="mt-4 text-gray-700 border border-gray-500 sm:mt-6 btn hover:bg-gray-400 hover:border-gray-400 hover:text-gray-900 transition-medium"
              >More about us</router-link
            >
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full"
          src="/img/_m_v_-ZxQE-mbf9_s-unsplash.jpg"
          alt="Interstate"
        />
      </div>
    </div>
    <div>
      <div class="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 class="text-3xl font-bold text-gray-900">
          A car for every lifestyle.
        </h2>
        <p class="text-gray-600">
          No matter what you do, there's a Mint model to fit your needs.
        </p>
        <div class="flex flex-wrap justify-center -mx-4">
          <div
            class="w-full px-4 mt-6 lg:w-1/2 xl:w-1/3"
            v-for="(model, i) in carModels"
            :key="i"
          >
            <CarModel :model="model" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import CarModel from "@/components/CarModel";

export default {
  name: "home",
  components: {
    CarModel
  },
  data() {
    return {
      carModels: [
        {
          name: "Hydrogen",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Helium",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1532988633349-d3dfb28ee834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Lithium",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Beryllium",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Boron",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1549632891-a0bea6d0355b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1344&q=80",
          thumbnailAlt: "Placeholder"
        },
        {
          name: "Carbon",
          monthlyPrice: 0,
          thumbnailUrl:
            "https://images.unsplash.com/photo-1546110975-1039aa313845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          thumbnailAlt: "Placeholder"
        }
      ]
    };
  }
};
</script>
