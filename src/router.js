import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dictionary from "./views/Dictionary.vue";
import Support from "./views/Support.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dictionary",
      name: "dictionary",
      component: Dictionary
    },
    {
      path: "/support",
      name: "support",
      component: Support
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ]
});
