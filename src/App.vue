<template>
  <div id="app">
    <Navbar/>
    <vue-page-transition name="fade-in-up">
      <router-view/>
    </vue-page-transition>
    
  </div>
</template>

<script>
import Navbar from '@/components/ui/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style src="./assets/tailwind.css"></style>
