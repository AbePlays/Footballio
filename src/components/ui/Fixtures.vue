<template>
  <section v-if="!isLoading">
    <div v-for="n in matchesInMatchday" :key="n" class="matchday">
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
  <loader v-else></loader>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      matches: [],
      isLoading: true,
      matchesInMatchday: 10
    };
  },
  async mounted() {
    this.isLoading = true;
    const res = await fetch(
      `http://api.football-data.org/v2/competitions/${this.id}/matches`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": process.env.VUE_APP_KEY
        }
      }
    );

    const data = await res.json();
    if (data.count !== 380) {
      this.matchesInMatchday = 9;
    }

    var matchday = [];
    for (var i = 0; i < data.count; i++) {
      if (i !== 0 && i % this.matchesInMatchday === 0) {
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
  .matchday {
    padding: 1rem 0;

    h1 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      gap: 3rem;

      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
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