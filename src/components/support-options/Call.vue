<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img
      class="h-24 w-24 p-4 flex-shrink-0 object-cover object-center"
      src="/img/icons/Support.svg"
      alt="phone icon"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">Give us a Call</h3>
      <p class="text-gray-600 text-sm xl:leading-tight">Wait time: {{ call.waitTime }}</p>
      <div class="mt-4 xl:mt-2">
          <a href="#" class="text-teal-500 hover:text-teal-600 font-semibold text-sm leading-none">Call</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Call",
  props: ["call"]
};
</script>