<template>
  <section v-if="!isLoading">
    <div class="header">
      <h1 class="name">Name</h1>
      <h1 class="nationality">Nationality</h1>
      <h1 class="club">Club</h1>
      <h1 class="goals">Goals</h1>
    </div>
    <div class="scorers" v-for="scorer in scorers" :key="scorer.player.id">
      <p class="name">{{ scorer.player.name }}</p>
      <p class="nationality">{{ scorer.player.nationality }}</p>
      <p class="club">{{ scorer.team.name }}</p>
      <p class="goals">{{ scorer.numberOfGoals }}</p>
    </div>
  </section>
  <loader v-else></loader>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      scorers: [],
      isLoading: true
    };
  },
  async mounted() {
    this.isLoading = true;
    const res = await fetch(
      `http://api.football-data.org/v2/competitions/${this.id}/scorers`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": process.env.VUE_APP_KEY
        }
      }
    );
    const data = await res.json();
    this.scorers = data.scorers;
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
section {
  .header {
    display: flex;
    justify-content: space-between;
    gap: 0 1rem;
    padding-left: 0.5rem;

    h1 {
      font-size: 1.1rem;
      text-align: left;
    }
  }

  .scorers {
    display: flex;
    justify-content: space-between;
    gap: 0 1rem;
    padding-left: 0.5rem;

    &:nth-child(odd) {
      background-color: white;
    }

    &:nth-child(even) {
      background-color: #ddd;
    }

    p {
      padding: 1rem 0;
      text-align: left;
    }

    .goals {
      transform: translateX(1rem);

      @media (max-width: 500px) {
        transform: translateX(0.5rem);
      }
    }
  }
}

.name {
  width: 30%;
}

.nationality {
  width: 30%;
}

.club {
  width: 30%;
}

.goals {
  width: 10%;
}
</style>