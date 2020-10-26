<template>
  <h1>Select a country</h1>

  <section>
    <card
      v-for="country in countries"
      :key="country.code"
      :imageUrl="country.flag"
      :name="country.name"
      @click="clickHandler(country.code)"
    ></card>
  </section>
</template>

<script>
import Card from "./ui/CountryTile.vue";
export default {
  components: {
    Card
  },
  computed: {
    key() {
      return process.env.VUE_APP_KEY;
    },
    countries() {
      return this.$store.getters.countries;
    }
  },
  methods: {
    clickHandler(code) {
      this.$router.push(`/countries/${code}`);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
}

section {
  max-width: 80rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}
</style>