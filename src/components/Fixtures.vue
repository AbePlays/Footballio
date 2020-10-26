<template>
  <section v-if="!isLoading">
    <h1>Season Schedule</h1>
    <div v-for="n in 10" :key="n" class="matchday">
      <h1>Matchday {{ n }}</h1>
      <div class="container">
        <div v-for="match in matches[n - 1]" :key="match.id" class="match">
          <div class="team">
            <p>{{ match.homeTeam.name }}</p>
            <p>{{ match.awayTeam.name }}</p>
          </div>
          <div class="score">
            <p>{{ match.score.fullTime.homeTeam }}</p>
            <p>{{ match.score.fullTime.awayTeam }}</p>
          </div>
          <div class="date">
            <p>{{ new Date(match.utcDate).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
      matches: [],
      isLoading: true
    };
  },
  async mounted() {
    const res = await fetch(
      `http://api.football-data.org/v2/competitions/2021/matches`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": process.env.VUE_APP_KEY
        }
      }
    );

    const data = await res.json();

    var matchday = [];
    for (var i = 0; i < 380; i++) {
      if (i !== 0 && i % 10 === 0) {
        this.matches.push(matchday);
        matchday = [];
      }
      matchday.push(data.matches[i]);
    }
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 1rem auto;

  .matchday {
    padding: 1rem 0;

    h1 {
      margin-bottom: 1rem;
    }

    .container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3rem;

      .match {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        min-width: 25rem;
        box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;

        p {
          margin: 1.5rem;
        }

        .team {
          width: 55%;
        }

        .score {
          width: 10%;
        }

        .date {
          width: 35%;
          text-align: right;
        }
      }
    }
  }
}
</style>