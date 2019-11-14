<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img class="h-32 w-32 flex-shrink-0 object-cover object-center" :src="model.thumbnailUrl" :alt="model.thumbnailAlt" />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ model.name }}</h3>
      <p class="text-gray-600 text-sm xl:leading-tight">Starting at ${{ model.monthlyPrice }}/mo</p>
      <div class="mt-4 xl:mt-2">
        <a
          href="#"
          class="text-teal-500 hover:text-teal-600 font-semibold text-sm leading-none"
        >Order</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["model"]
};
</script>