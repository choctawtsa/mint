<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img
      class="h-24 w-24 p-4 flex-shrink-0 object-cover object-center"
      :src="option.imageUrl"
      :alt="option.imageAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ option.title }}</h3>
      <p class="text-gray-600 text-sm xl:leading-tight">Wait time: {{ option.waitTime }}</p>
      <div class="mt-4 xl:mt-2">
          <a :href="option.actionUrl" class="text-teal-500 hover:text-teal-600 font-semibold text-sm leading-none">{{ option.action }}</a>
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