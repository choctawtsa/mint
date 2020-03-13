<template>
  <div id="app">
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <div
      class="fixed bottom-0 right-0 flex items-center justify-center h-6 m-8 px-2 py-3 font-mono text-xs text-white bg-gray-700 rounded-full opacity-50 pointer-events-none"
    >
      <div class="block">
        Team
        <span class="font-black">2039-1</span>
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
