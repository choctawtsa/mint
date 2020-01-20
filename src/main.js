import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VuePageTransition from "vue-page-transition";
import VueKinesis from "vue-kinesis";

Vue.config.productionTip = false;
Vue.use(VuePageTransition);
Vue.use(VueKinesis);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
