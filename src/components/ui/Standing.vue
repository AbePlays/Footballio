<template>
  <section v-if="!isLoading">
    <h1>Standings</h1>

    <div class="info">
      <div class="left">
        <h1># Team</h1>
      </div>
      <div class="right">
        <p>PL</p>
        <p>W</p>
        <p>D</p>
        <p>L</p>
        <p>GD</p>
        <p>PTS</p>
      </div>
    </div>

    <div class="data" v-for="(club, index) in clubs" :key="club.id">
      <div class="left">
        <p>{{ index + 1 }}</p>
        <img :src="club.team.crestUrl" alt="logo" />
        <h1>{{ club.team.name }}</h1>
      </div>

      <div class="right">
        <p>{{ club.playedGames }}</p>
        <p>{{ club.won }}</p>
        <p>{{ club.draw }}</p>
        <p>{{ club.lost }}</p>
        <p>{{ club.goalDifference }}</p>
        <p>{{ club.points }}</p>
      </div>
    </div>
  </section>
  <loader v-else></loader>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      clubs: [],
      isLoading: true
    };
  },
  async mounted() {
    this.isLoading = true;
    const res = await fetch(
      `http://api.football-data.org/v2/competitions/${this.id}/standings`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": process.env.VUE_APP_KEY
        }
      }
    );

    const data = await res.json();
    this.clubs = data.standings[0].table;
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
section {
  h1 {
    font-size: 0.9rem;
  }

  p {
    width: 3rem;
    text-align: center;
    font-size: 0.9rem;
  }

  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      margin-right: 1rem;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    color: #aaa;
    margin-top: 1rem;

    .left {
      margin-left: 1rem;
    }

    .right {
      display: flex;
      gap: 1rem;
    }
  }

  .data {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .left {
      display: flex;

      img {
        width: 1rem;
        margin: 0 1rem;
      }
    }

    .right {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>