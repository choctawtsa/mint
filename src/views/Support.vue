<template>
  <main id="support">
    <div class="flex bg-gray-100 border-b-4 border-teal-300">
      <div
        class="max-w-md mx-auto px-8 py-12 sm:max-w-lg lg:w-1/2 lg:max-w-full lg:px-12 lg:py-24"
      >
        <div class="xl:max-w-lg xl:mx-auto">
          <h1
            class="text-4xl font-bold leading-tight text-gray-900 sm:mt-8 sm:text-3xl lg:mt-0 xl:text-4xl"
          >
            Get Support
            <span class="text-teal-500">.</span>
          </h1>
          <p class="mt-4 text-gray-600 sm:mt-6 sm:text-xl">
            Our support staff are expertly-trained to provide you with the best
            solution to any problem you may have.
          </p>
        </div>
      </div>
      <div class="hidden -mb-1 lg:relative lg:block lg:w-1/2">
        <img
          class="absolute inset-0 object-cover object-right w-full h-full"
          src="/img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg"
          alt="People talking at a computer"
        />
      </div>
    </div>
    <section
      class="max-w-sm mx-auto px-5 py-10 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
    >
      <h1 class="text-2xl font-bold text-gray-900">Support Options</h1>
      <div class="flex flex-wrap justify-start -mx-4">
        <div
          class="w-full mt-6 px-4 lg:w-1/2 xl:w-1/3"
          v-for="(option, i) in supportOptions"
          :key="i"
        >
          <SupportOptions :option="option" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupportOptions from "@/components/SupportOptions.vue";

export default {
  components: {
    SupportOptions
  },
  data() {
    return {
      supportOptions: [
        {
          title: "Phone Support",
          waitTime: "2 minutes",
          action: "Call",
          actionUrl: "#",
          imageUrl: "/img/icons/Support.svg",
          imageAlt: "Phone icon"
        }
      ]
    };
  }
};
</script>
