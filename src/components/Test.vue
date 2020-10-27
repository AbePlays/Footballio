<template>
  <section v-if="!isLoading">
    <div class="image">
      <img :src="header.imageUrl" alt="logo" />
    </div>
    <div class="data">
      <p>COMPETITION</p>
      <h1>{{ header.name }}</h1>
    </div>
  </section>
  <h1 v-else></h1>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      header: {
        imageUrl: null,
        name: null
      },
      isLoading: true
    };
  },
  async updated() {
    const leagues = this.$store.getters.competitions;
    leagues.forEach(league => {
      if (league.id === Number(this.id)) {
        this.header.imageUrl = league.logo;
        this.header.name = league.name;
      }
    });
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 2rem auto;
  display: flex;
  gap: 0 2rem;
  align-items: center;

  .image {
    width: 10rem;
    height: 10rem;
    border: 1px solid #ddd;
    padding: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .data {
    p {
    }

    h1 {
      font-size: 2rem;
    }
  }
}
</style>