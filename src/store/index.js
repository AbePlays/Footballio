import { createStore } from "vuex";
import competetionsModule from "./competetions/index";
import countriesModule from "./countries/index";
import userModule from "./user/index";

export default createStore({
  modules: {
    competetions: competetionsModule,
    countries: countriesModule,
    user: userModule,
  },
});
