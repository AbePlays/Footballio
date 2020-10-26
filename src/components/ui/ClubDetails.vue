<template>
  <section v-if="!isLoading">
    <div class="image">
      <img :src="clubData.crestUrl" alt="logo" />
    </div>
    <div class="data">
      <h1>{{ clubData.name }}</h1>
      <p>Founded in : {{ clubData.founded }}</p>
      <p>Stadium : {{ clubData.venue }}</p>
      <p>Address : {{ clubData.address }}</p>
      <p>Website : {{ clubData.website }}</p>
    </div>
  </section>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      clubData: null,
      isLoading: true
    };
  },
  async mounted() {
    const res = await fetch(
      `http://api.football-data.org/v2/teams/${this.id}`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": process.env.VUE_APP_KEY
        }
      }
    );

    const data = await res.json();
    console.log(data);
    this.clubData = data;
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
section {
  margin: 1rem auto;
  width: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  .image {
    border: 1px solid grey;
    padding: 1.5rem;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .data {
    h1 {
      font-size: 2rem;
    }
  }
}
</style>