<template>
  <card
    v-for="country in countries"
    :key="country.code"
    :imageUrl="country.flag"
    :name="country.name"
  ></card>
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
  }
};
</script>

<style lang="sass" scoped>
</style>