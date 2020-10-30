import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/auth/Auth.vue";
import Home from "../components/Home.vue";
import Test from "../components/Content.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/competition/:id",
    component: Test,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated) {
    next();
  } else {
    console.log(to.fullPath);
    if (to.fullPath === "/") {
      if (store.getters.isAuthenticated) {
        next("/home");
      } else {
        next();
      }
    } else {
      next("/");
    }
  }
});

export default router;
