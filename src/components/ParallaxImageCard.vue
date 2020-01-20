<template>
  <kinesis-container>
    <kinesis-element :strength="1" type="depth" tag="div">
      <div
        class="flex flex-col w-full mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-lg lg:flex-row"
      >
        <div
          class="relative flex-shrink-0 block w-full h-32 lg:w-1/3 lg:h-auto xl:w-1/2"
        >
          <img
            class="absolute inset-0 object-cover object-center w-full h-full"
            :src="imgUrl"
            :alt="imgAlt"
          />
        </div>
        <div
          class="mx-8 py-12 sm:mx-12 sm:py-16 lg:w-2/3 lg:max-w-lg xl:w-1/2 2xl:mx-20 2xl:py-20"
        >
          <kinesis-element :strength="3" type="depth" tag="div">
            <p class="font-mono font-medium text-gray-500 uppercase lg:text-lg">
              <slot name="subtitle"></slot>
            </p>
            <h1 class="text-4xl font-bold leading-tight text-white">
              <slot name="title"></slot>
            </h1>
            <p class="mt-5 text-gray-600">
              <slot name="body"></slot>
            </p>
          </kinesis-element>
          <kinesis-element :strength="5" type="depth" tag="div">
            <slot name="button"></slot>
          </kinesis-element>
        </div>
      </div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {
  props: ["imgUrl", "imgAlt"]
};
</script>
