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
      this.$router.push(`/competition/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 0.5rem auto 0;
  gap: 1rem 3rem;

  @media (max-width: 700px) {
    gap: 0.5rem 1rem;
  }

  p {
    cursor: pointer;
  }
}
</style>