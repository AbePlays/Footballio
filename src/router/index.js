import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/auth/Auth.vue";
import Countries from "../components/Countries.vue";
import Competetions from "../components/Competetions.vue";
import Clubs from "../components/Clubs.vue";

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
  {
    path: "/countries/:code",
    component: Competetions,
    props: true,
  },
  {
    path: "/competetion/:id",
    component: Clubs,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
