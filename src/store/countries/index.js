import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state() {
    return {
      countries: [
        {
          name: "France",
          code: "FR",
          flag: "https://media.api-sports.io/flags/fr.svg",
        },
        {
          name: "England",
          code: "GB",
          flag: "https://media.api-sports.io/flags/gb.svg",
        },
        {
          name: "Germany",
          code: "DE",
          flag: "https://media.api-sports.io/flags/de.svg",
        },
        {
          name: "Italy",
          code: "IT",
          flag: "https://media.api-sports.io/flags/it.svg",
        },
        {
          name: "Netherlands",
          code: "NL",
          flag: "https://media.api-sports.io/flags/nl.svg",
        },
        {
          name: "Spain",
          code: "ES",
          flag: "https://media.api-sports.io/flags/es.svg",
        },
        {
          name: "Portugal",
          code: "PT",
          flag: "https://media.api-sports.io/flags/pt.svg",
        },
        {
          name: "Turkey",
          code: "TR",
          flag: "https://media.api-sports.io/flags/tr.svg",
        },
        {
          name: "Russia",
          code: "RU",
          flag: "https://media.api-sports.io/flags/ru.svg",
        },
        {
          name: "Belgium",
          code: "BE",
          flag: "https://media.api-sports.io/flags/be.svg",
        },
        {
          name: "Denmark",
          code: "DK",
          flag: "https://media.api-sports.io/flags/dk.svg",
        },
        {
          name: "Greece",
          code: "GR",
          flag: "https://media.api-sports.io/flags/gr.svg",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
