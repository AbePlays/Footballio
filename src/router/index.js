import { createRouter, createWebHistory } from "vue-router";
import Signin from "../components/auth/Signin.vue";

const routes = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: "/auth",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
