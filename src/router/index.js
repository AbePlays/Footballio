import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/auth/Auth.vue";
import Countries from "../components/Countries.vue";
import Competetions from "../components/Competetions.vue";
import Clubs from "../components/Clubs.vue";
import Home from "../components/Home.vue";
import ClubDetails from "../components/ui/ClubDetails.vue";

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
  {
    path: "/club/:id",
    component: ClubDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
