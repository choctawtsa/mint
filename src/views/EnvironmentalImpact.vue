<template>
  <main id="support">
    <div class="flex bg-gray-100 border-b-4 border-teal-300">
      <div
        class="max-w-md px-8 py-12 mx-auto sm:max-w-lg lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:mx-auto">
          <h1
            class="text-4xl font-bold leading-tight text-gray-900 sm:mt-8 sm:text-3xl lg:mt-0 xl:text-4xl"
          >
            Environmental Impact
            <span class="text-teal-500">.</span>
          </h1>
          <p class="mt-4 text-gray-600 sm:text-xl sm:mt-6">
            We're not just fighting for a carbon-negative society; we're
            fighting to reduce waste in the battery industry, too.
          </p>
        </div>
      </div>
      <div class="hidden -mb-1 lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 object-cover object-right w-full h-full"
          src="/img/rawfilm-ihMzQV3lleo-unsplash.jpg"
          alt="People talking at a computer"
        />
      </div>
    </div>
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
