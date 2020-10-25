import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/auth/Auth.vue";
import Countries from "../components/Countries.vue";

const routes = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/countries",
    component: Countries,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
