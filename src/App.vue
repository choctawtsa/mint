<template>
  <div id="app" class="h-screen flex">
    <SideNav />
    <Navbar />
    <div class="flex-1 min-w-0">
      <vue-page-transition name="fade-in-up">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/ui/SideNav.vue";
import Navbar from "@/components/ui/Navbar.vue";

export default {
  components: {
    SideNav,
    Navbar
  }
};
</script>

<style src="./assets/tailwind.css"></style>
