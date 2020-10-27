import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/auth/Auth.vue";
import Home from "../components/Home.vue";
import Test from "../components/Test.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/competetion/:id",
    component: Test,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
