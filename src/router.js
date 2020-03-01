import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/dealerships/dixie-motors",
      component: () => import("./views/dealerships/DixieMotors.vue")
    },
    {
      path: "/dealerships/opry-autos",
      component: () => import("./views/dealerships/OpryAutos.vue")
    },
    {
      path: "/dealerships/nashville-auto-group",
      component: () => import("./views/dealerships/NashvilleAutoGroup.vue")
    },
    {
      path: "/vehicles/specs/sieberi",
      component: () => import("./views/vehicle-specs/Sieberi.vue")
    },

    {
      path: "/vehicles/specs/viridis",
      component: () => import("./views/vehicle-specs/Viridis.vue")
    },
    {
      path: "/vehicles/specs/tauschii",
      component: () => import("./views/vehicle-specs/Tauschii")
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
