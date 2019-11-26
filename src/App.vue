<template>
  <div id="app" class="flex h-screen">
    <Nav />
    <BreakpointIndicator v-if="breakpointIndicator" />
    <div class="flex-1">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/ui/Nav.vue";
import BreakpointIndicator from "@/components/dev/BreakpointIndicator.vue";

export default {
  components: {
    Nav,
    BreakpointIndicator
  },
  data() {
    return {
      breakpointIndicator: false
    };
  }
};
</script>

<style src="./assets/tailwind.css"></style>
