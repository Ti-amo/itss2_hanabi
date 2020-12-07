import Vue from "vue";
import VueRouter from "vue-router";
// import LoadingPage from "../views/LoadingPage.vue";
import DetailFlower from '../views/DetailFlower.vue'
import HomePage from '../views/HomePage.vue'
import CongratFlower from '../views/CongratFlower.vue'
import BirthdayFlower from '../views/BirthdayFlower.vue'
import SacrificeFlower from '../views/SacrificeFlower.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    // component: LoadingPage,
    component: HomePage,
  },
  {
    path: "/congratflowers",
    name: "CongratFlower",
    component: CongratFlower,
  },
  {
    path: "/birthdayflowers",
    name: "BirthdayFlower",
    component: BirthdayFlower,
  },
  {
    path: "/sacrificeflowers",
    name: "SacrificeFlower",
    component: SacrificeFlower,
  },
  {
    path: "/flower/:id",
    name: "DetailFlower",
    component: DetailFlower,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
