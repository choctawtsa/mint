import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/company",
      component: () => import("./views/Company.vue")
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
      path: "/dealerships/jones-electric",
      component: () => import("./views/dealerships/JonesElectric.vue")
    },
    {
      path: "/dealerships/nashville-auto-group",
      redirect: "/dealerships/jones-electric"
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
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
