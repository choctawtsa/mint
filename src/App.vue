<template>
  <div id="app">
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <div
      class="fixed bottom-0 left-0 flex items-center justify-center h-6 m-8 px-2 py-3 font-mono text-xs text-white bg-gray-700 rounded-full opacity-50 pointer-events-none"
    >
      <div class="block">
        Team
        <span class="font-black">2039-1</span>
      </div>
    </div>
    <div
      v-if="breakpointIndicatorOn"
      class="fixed bottom-0 right-0 flex items-center justify-center w-10 h-6 m-8 p-3 font-mono text-xs text-white bg-gray-700 rounded-full xs:w-6 xs:bg-red-500 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 duration-200 ease-out"
    >
      <div class="block xs:hidden sm:hidden md:hidden lg:hidden xl:hidden">
        xxs
      </div>
      <div class="hidden xs:block sm:hidden md:hidden lg:hidden xl:hidden">
        xs
      </div>
      <div class="hidden xs:hidden sm:block md:hidden lg:hidden xl:hidden">
        sm
      </div>
      <div class="hidden xs:hidden sm:hidden md:block lg:hidden xl:hidden">
        md
      </div>
      <div class="hidden xs:hidden sm:hidden md:hidden lg:block xl:hidden">
        lg
      </div>
      <div class="hidden xs:hidden sm:hidden md:hidden lg:hidden xl:block">
        xl
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      breakpointIndicatorOn: true
    };
  }
};
</script>

<style src="./assets/tailwind.css"></style>
