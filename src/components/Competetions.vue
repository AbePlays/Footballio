<template>
  <h1>Select a league</h1>
  <section>
    <card
      v-for="competetion in competetions"
      :key="competetion.id"
      :imageUrl="competetion.logo"
      :name="competetion.name"
      @click="clickHandler(competetion.id)"
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
  },
  methods: {
    clickHandler(id) {
      console.log("Inside competetions", id);
      this.$router.push(`/competetion/${id}`);
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
  display: flex;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 0 auto;
  justify-content: center;
}
</style>