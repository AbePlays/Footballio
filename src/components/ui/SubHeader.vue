<template>
  <section>
    <p @click="clickHandler(2021)">Premier League</p>
    <p @click="clickHandler(2002)">Bundesliga</p>
    <p @click="clickHandler(2019)">Serie A</p>
    <p @click="clickHandler(2015)">Ligue 1</p>
    <p @click="clickHandler(2014)">La Liga</p>
    <p @click="clickHandler(2003)">Eredivisie</p>
  </section>
</template>

<script>
export default {
  methods: {
    clickHandler(id) {
      console.log("I was pressed", id);
      this.$router.push(`/competetion/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  max-width: 80rem;
  margin: 0.5rem auto 0;
  gap: 0 3rem;

  p {
    cursor: pointer;
  }
}
</style>