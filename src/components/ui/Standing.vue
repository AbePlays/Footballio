<template>
  <section v-if="!isLoading">
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
  .info {
    display: flex;
    justify-content: space-between;
    gap: 0 2rem;

    .right {
      display: flex;
      gap: 0 1rem;
      p {
        text-align: center;
        width: 2rem;
      }
    }
  }

  .data {
    display: flex;
    justify-content: space-between;
    gap: 0 2rem;
    padding: 1rem 0;

    @media (max-width: 700px) {
      gap: 0 0.5rem;
    }

    .left {
      display: flex;

      p {
        text-align: center;
        width: 1.3rem;

        @media (max-width: 700px) {
          font-size: 0.8rem;
        }
      }

      img {
        object-fit: contain;
        width: 1rem;
        margin: 0 1rem;

        @media (max-width: 700px) {
          margin: 0 0.5rem;
          display: none;
        }
      }

      h1 {
        @media (max-width: 700px) {
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }
      }
    }

    .right {
      display: flex;
      gap: 0 1rem;

      @media (max-width: 700px) {
        gap: 0;
      }

      p {
        text-align: center;
        width: 2rem;

        @media (max-width: 700px) {
          font-size: 0.8rem;
        }
      }
    }

    &:nth-child(odd) {
      background-color: white;
    }

    &:nth-child(even) {
      background-color: #ddd;
    }
  }
}
</style>