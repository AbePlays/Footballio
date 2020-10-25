<template>
  <section>
    <card
      v-for="competetion in competetions"
      :key="competetion.id"
      :imageUrl="competetion.logo"
      :name="competetion.name"
    ></card>
  </section>
</template>

<script>
import Card from "./ui/CompetetionTile.vue";
export default {
  components: {
    Card
  },
  props: ["code"],
  computed: {
    competetions() {
      return this.$store.getters.competetions.filter(
        competetion => competetion.code === this.code
      );
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 0 auto;
  justify-content: center;
}
</style>