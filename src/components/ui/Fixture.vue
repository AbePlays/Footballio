<template>
  <section>
    <h1>Upcoming Games</h1>

    <div class="games">
      <div class="game" v-for="fixture in fixtures" :key="fixture.id">
        <h1>{{ fixture.homeTeam.name }}</h1>
        <p>{{ new Date(fixture.utcDate).toLocaleDateString() }}</p>
        <h1>{{ fixture.awayTeam.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fixtures: [
        {
          id: 303759,
          season: {
            id: 619,
            startDate: "2020-09-12",
            endDate: "2021-05-23",
            currentMatchday: 6
          },
          utcDate: "2020-09-12T11:30:00Z",
          status: "FINISHED",
          matchday: 1,
          stage: "REGULAR_SEASON",
          group: "Regular Season",
          lastUpdated: "2020-09-13T00:08:13Z",
          odds: {
            msg: "Activate Odds-Package in User-Panel to retrieve odds."
          },
          score: {
            winner: "AWAY_TEAM",
            duration: "REGULAR",
            fullTime: {
              homeTeam: 0,
              awayTeam: 3
            },
            halfTime: {
              homeTeam: 0,
              awayTeam: 1
            },
            extraTime: {
              homeTeam: null,
              awayTeam: null
            },
            penalties: {
              homeTeam: null,
              awayTeam: null
            }
          },
          homeTeam: {
            id: 63,
            name: "Fulham FC"
          },
          awayTeam: {
            id: 57,
            name: "Arsenal FC"
          },
          referees: [
            {
              id: 11443,
              name: "Chris Kavanagh",
              nationality: null
            },
            {
              id: 11438,
              name: "Dan Cook",
              nationality: null
            },
            {
              id: 98555,
              name: "Sian Massey-Ellis",
              nationality: null
            },
            {
              id: 11487,
              name: "Kevin Friend",
              nationality: null
            },
            {
              id: 11556,
              name: "David Coote",
              nationality: null
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.games {
  border: 1px solid #888;
  width: 50rem;

  .game {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
}
</style>