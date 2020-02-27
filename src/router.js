import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EnvironmentalImpact from "./views/EnvironmentalImpact.vue";
import DixieMotors from "./views/dealerships/DixieMotors.vue";
import OpryAutos from "./views/dealerships/OpryAutos.vue";
import NashvilleAutoGroup from "./views/dealerships/NashvilleAutoGroup.vue";

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
      path: "/environmental-impact",
      name: "environmental-impact",
      component: EnvironmentalImpact
    },
    {
      path: "/carbon-impact",
      redirect: "/environmental-impact"
    },
    {
      path: "/dealerships/dixie-motors",
      component: DixieMotors
    },
    {
      path: "/dealerships/opry-autos",
      component: OpryAutos
    },
    {
      path: "/dealerships/nashville-auto-group",
      component: NashvilleAutoGroup
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
