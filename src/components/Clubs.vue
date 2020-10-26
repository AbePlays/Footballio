<template>
  <section>
    <p v-if="isLoading">Loading...</p>
    <card
      v-else
      v-for="club in clubs"
      :key="club.id"
      :imageUrl="club.crestUrl"
      :name="club.name"
      @click="clickHandler(club.id)"
    ></card>
  </section>
</template>

<script>
import Card from "./ui/ClubTile.vue";

export default {
  components: {
    Card
  },
  props: ["id"],
  data() {
    return {
      clubs: [],
      isLoading: true
    };
  },
  async mounted() {
    console.log("Inside Clubs", this.id);
    const res = await fetch(
      `http://api.football-data.org/v2/competitions/${this.id}/teams`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": `${process.env.VUE_APP_KEY}`
        }
      }
    );
    const data = await res.json();
    console.log(data);
    data.teams.forEach(team => {
      var club = {
        id: team.id,
        name: team.name,
        crestUrl: team.crestUrl
      };
      this.clubs.push(club);
    });
    this.isLoading = false;
    console.log(this.clubs);
  },
  methods: {
    clickHandler(id) {
      console.log("Inside clubs", id);
      this.$router.push(`/club/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 0 auto;
  justify-content: center;
}
</style>