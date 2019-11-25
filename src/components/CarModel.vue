<template>
  <div class="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <img
      class="flex-shrink-0 object-cover object-center w-32 h-32"
      :src="model.thumbnailUrl"
      :alt="model.thumbnailAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ model.name }}</h3>
      <p class="text-sm text-gray-600 xl:leading-tight">
        Starting at ${{ model.monthlyPrice }}/mo
      </p>
      <div class="mt-4 xl:mt-2">
        <a
          href="#"
          class="text-sm font-semibold leading-none text-teal-500 hover:text-teal-600"
          >Order</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["model"]
};
</script>
