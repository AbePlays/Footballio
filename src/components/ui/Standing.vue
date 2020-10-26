<template>
  <section>
    <div class="header">
      <img src="" alt="logo" />
      <h1>Name of the league</h1>
    </div>

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

    <div class="data" v-for="club in clubs" :key="club.id">
      <div class="left">
        <img :src="club.crestUrl" alt="logo" />
        <h1>{{ club.name }}</h1>
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
</template>

<script>
export default {
  data() {
    return {
      clubs: [
        {
          id: 62,
          name: "Everton FC",
          crestUrl: "https://crests.football-data.org/62.svg",
          playedGames: 6,
          won: 4,
          draw: 1,
          lost: 1,
          points: 13,
          goalsFor: 14,
          goalsAgainst: 9,
          goalDifference: 5
        },
        {
          id: 64,
          name: "Liverpool FC",
          crestUrl: "https://crests.football-data.org/64.svg",
          playedGames: 6,
          form: "W,D,L,W,W",
          won: 4,
          draw: 1,
          lost: 1,
          points: 13,
          goalsFor: 15,
          goalsAgainst: 14,
          goalDifference: 1
        },
        {
          id: 58,
          name: "Aston Villa FC",
          crestUrl: "https://crests.football-data.org/58.svg",
          playedGames: 5,
          form: "L,W,W,W,W",
          won: 4,
          draw: 0,
          lost: 1,
          points: 12,
          goalsFor: 12,
          goalsAgainst: 5,
          goalDifference: 7
        },
        {
          id: 338,
          name: "Leicester City FC",
          crestUrl: "https://crests.football-data.org/338.svg",
          playedGames: 6,
          form: "W,L,L,W,W",
          won: 4,
          draw: 0,
          lost: 2,
          points: 12,
          goalsFor: 13,
          goalsAgainst: 8,
          goalDifference: 5
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 50rem;
  border: 1px solid #aaa;
  padding: 1rem;

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

    .right {
      display: flex;
      gap: 1rem;
    }
  }

  .data {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;

      img {
        width: 1rem;
        margin-right: 1rem;
      }
    }

    .right {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>