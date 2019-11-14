<template>
  <main id="support">
    <div class="bg-gray-100 flex border-b-4 border-teal-300">
      <div class="px-8 py-12 max-w-md mx-auto sm:max-w-lg lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div class="xl:max-w-lg xl:mx-auto">
          <h1
            class="text-4xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-3xl lg:mt-0 xl:text-4xl"
          >
            Get Support
            <span class="text-teal-500">.</span>
          </h1>
          <p
            class="mt-4 text-gray-600 sm:text-xl sm:mt-6"
          >Our support staff are expertly-trained to provide you with the best solution to any problem you may have.</p>
        </div>
      </div>
      <div class="hidden -mb-1 lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 h-full w-full object-cover object-right"
          src="/img/austin-distel-mpN7xjKQ_Ns-unsplash.jpg"
          alt="People talking at a computer"
        />
      </div>
    </div>
    <div class="py-10 px-5 mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
      <h1 class="text-2xl font-bold text-gray-900">Support Options</h1>
      <Call :call="call" />
    </div>
  </main>
</template>

<script>
import Call from "@/components/support-options/Call.vue";

export default {
  components: {
    Call
  },
  data() {
    return {
      call: [
        {
          waitTime: "5 min"
        }
      ]
    };
  }
};
</script>