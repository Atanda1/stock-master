import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stock from "../views/Stock.vue";
import Portfolio from "../views/Portfolio.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/stock",
    name: "Stock",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/Stock.vue")
    component: Stock
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
