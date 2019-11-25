<template>
  <div class="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <img
      class="flex-shrink-0 object-cover object-center w-24 h-24 p-4"
      :src="option.imageUrl"
      :alt="option.imageAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ option.title }}</h3>
      <p class="text-sm text-gray-600 xl:leading-tight">
        Wait time: {{ option.waitTime }}
      </p>
      <div class="mt-4 xl:mt-2">
        <a
          :href="option.actionUrl"
          class="text-sm font-semibold leading-none text-teal-500 hover:text-teal-600"
          >{{ option.action }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support Options",
  props: ["option"]
};
</script>
