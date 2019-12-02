<template>
  <main id="home">
    <div class="flex bg-gray-100">
      <div
        class="max-w-md mx-auto px-8 py-12 sm:max-w-xl lg:w-1/2 lg:max-w-full lg:px-12 lg:py-24"
      >
        <div class="xl:max-w-lg xl:mx-auto">
          <img
            class="-mt-4 rounded-lg shadow-xl sm:object-cover sm:object-center sm:w-full sm:-mt-4 lg:hidden sm:h-72"
            src="/img/_m_v_-ZxQE-mbf9_s-unsplash.jpg"
            alt="Interstate"
          />
          <h1
            class="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:mt-8 sm:text-3xl lg:mt-0 xl:text-4xl"
          >
            A major revolution in
            <span class="text-teal-500">electric vehicles.</span>
          </h1>
          <p class="mt-4 text-gray-600 sm:mt-6 sm:text-xl">
            Electric vehicles are taking over the world. By 2030, nearly a third
            of all vehicles in America will be electric. At Mint, we're rising
            to meet those needs with beautiful, sustainable products.
          </p>
          <div>
            <a
              href="#"
              class="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-500 border border-teal-500 rounded shadow-lg sm:mt-6 hover:bg-teal-600 hover:border-teal-600 hover:shadow-2xl transition-medium"
              >Browse products</a
            >
          </div>
        </div>
      </div>
      <div class="hidden lg:relative lg:block lg:w-1/2">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full"
          src="/img/_m_v_-ZxQE-mbf9_s-unsplash.jpg"
          alt="Interstate"
        />
        <svg
          class="absolute inset-0 w-16 h-full text-gray-100 fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="100,0 0,100 0,0" />
        </svg>
      </div>
    </div>
    <div>
      <div class="max-w-md mx-auto px-8 py-8 sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 class="text-3xl font-bold text-gray-900">
          A car for every lifestyle.
        </h2>
        <p class="text-gray-600">
          No matter what you do, there's a Mint model to fit your needs.
        </p>
        <div class="flex flex-wrap justify-center -mx-4">
          <div
            class="w-full mt-6 px-4 lg:w-1/2 xl:w-1/3"
            v-for="(model, i) in carModels"
            :key="i"
          >
            <CarModel :model="model" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="mx-auto px-6 py-8 sm:max-w-full sm:px-12 md:max-w-lg lg:max-w-full lg:px-16 xl:px-32"
    >
      <ParallaxImageCard
        img-url="https://images.unsplash.com/photo-1556761175-b413da4baf72?sat=-100&blend=38B2AC&blend-mode=multiply"
        img-alt="Support desk"
      >
        <template v-slot:subtitle>World-class support</template>
        <template v-slot:title>We're here to help.</template>
        <template v-slot:body
          >Our support staff are expertly-trained to provide you with the best
          solution to any problem you may have, no matter the time of day (or
          night).</template
        >
        <template v-slot:button>
          <router-link
            to="/support"
            class="inline-flex items-center mt-8 px-4 py-2 text-sm font-semibold bg-white rounded hover:bg-gray-300 transition-medium"
          >
            <span class="text-gray-800 ">Visit the support desk</span>
            <span class="py-1 pl-3"
              ><svg
                class="text-gray-600 fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="fillCurrent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 15V9C16 8.448 16.447 8 17 8C17.553 8 18 8.448 18 9V15C18 16.654 16.654 18 15 18H3C1.346 18 0 16.654 0 15V3C0 1.346 1.346 0 3 0H9C9.553 0 10 0.448 10 1C10 1.552 9.553 2 9 2H3C2.448 2 2 2.449 2 3V15C2 15.551 2.448 16 3 16H15C15.552 16 16 15.551 16 15Z"
                />
                <path
                  d="M14.5781 2.008L12.9951 2C12.4421 1.997 11.9971 1.547 12.0001 0.995C12.0031 0.444 12.4501 0 13.0001 0H13.0051L17.0021 0.02C17.5521 0.023 17.9971 0.469 17.9971 1.019L18.0001 4.999C18.0001 5.552 17.5531 6 17.0011 6H17.0001C16.4481 6 16.0001 5.553 16.0001 5.001L15.9991 3.415L9.7071 9.707C9.5121 9.902 9.2561 10 9.0001 10C8.7441 10 8.4881 9.902 8.2931 9.707C7.9021 9.316 7.9021 8.684 8.2931 8.293L14.5781 2.008Z"
                />
                <path
                  d="M16 9C16 8.448 16.447 8 17 8C17.553 8 18 8.448 18 9V15C18 16.654 16.654 18 15 18H3C1.346 18 0 16.654 0 15V3C0 1.346 1.346 0 3 0H9C9.553 0 10 0.448 10 1C10 1.552 9.553 2 9 2H3C2.448 2 2 2.449 2 3V15C2 15.551 2.448 16 3 16H15C15.552 16 16 15.551 16 15V9Z"
                />
                <path
                  d="M14.5781 2.008L12.9951 2C12.4421 1.997 11.9971 1.547 12.0001 0.995C12.0031 0.444 12.4501 0 13.0001 0H13.0051L17.0021 0.02C17.5521 0.023 17.9971 0.469 17.9971 1.019L18.0001 4.999C18.0001 5.552 17.5531 6 17.0011 6H17.0001C16.4481 6 16.0001 5.553 16.0001 5.001L15.9991 3.415L9.7071 9.707C9.5121 9.902 9.2561 10 9.0001 10C8.7441 10 8.4881 9.902 8.2931 9.707C7.9021 9.316 7.9021 8.684 8.2931 8.293L14.5781 2.008Z"
                />
              </svg>
            </span>
          </router-link>
        </template>
      </ParallaxImageCard>
    </div>
  </main>
</template>

<script>
import CarModel from "@/components/CarModel";
import ParallaxImageCard from "@/components/ParallaxImageCard";

export default {
  name: "home",
  components: {
    CarModel,
    ParallaxImageCard
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
        }
      ]
    };
  }
};
</script>
