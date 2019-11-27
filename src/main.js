import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VuePageTransition from "vue-page-transition";
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";

Vue.config.productionTip = false;

Vue.component("parallax-container", ParallaxContainer);
Vue.component("parallax-element", ParallaxElement);
Vue.use(VuePageTransition);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
