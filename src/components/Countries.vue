<template>
  <section>
    <card
      v-for="country in countries"
      :key="country.code"
      :imageUrl="country.flag"
      :name="country.name"
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
  }
};
</script>

<style lang="scss" scoped>
section {
  max-width: 80rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}
</style>