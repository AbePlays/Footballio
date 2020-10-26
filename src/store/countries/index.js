import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state() {
    return {
      countries: [
        {
          name: "France",
          code: "FRA",
          flag: "https://media.api-sports.io/flags/fr.svg",
        },
        {
          name: "England",
          code: "ENG",
          flag: "https://media.api-sports.io/flags/gb.svg",
        },
        {
          name: "Germany",
          code: "DEU",
          flag: "https://media.api-sports.io/flags/de.svg",
        },
        {
          name: "Italy",
          code: "ITA",
          flag: "https://media.api-sports.io/flags/it.svg",
        },
        {
          name: "Netherlands",
          code: "NLD",
          flag: "https://media.api-sports.io/flags/nl.svg",
        },
        {
          name: "Spain",
          code: "ESP",
          flag: "https://media.api-sports.io/flags/es.svg",
        },
        {
          name: "Portugal",
          code: "PRT",
          flag: "https://media.api-sports.io/flags/pt.svg",
        },
        {
          name: "Turkey",
          code: "TUR",
          flag: "https://media.api-sports.io/flags/tr.svg",
        },
        {
          name: "Russia",
          code: "RUS",
          flag: "https://media.api-sports.io/flags/ru.svg",
        },
        {
          name: "Belgium",
          code: "BEL",
          flag: "https://media.api-sports.io/flags/be.svg",
        },
        {
          name: "Denmark",
          code: "DNK",
          flag: "https://media.api-sports.io/flags/dk.svg",
        },
        {
          name: "Greece",
          code: "GRC",
          flag: "https://media.api-sports.io/flags/gr.svg",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
