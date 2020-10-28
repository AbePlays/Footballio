<template>
  <section>
    <div class="header">
      <div class="image">
        <img :src="header.imageUrl" alt="logo" />
      </div>
      <div class="data">
        <p>COMPETITION</p>
        <h1>{{ header.name }}</h1>
      </div>
    </div>
    <tabs :id="id"></tabs>
  </section>
</template>

<script>
import Tabs from "./ui/Tabs.vue";

export default {
  components: {
    Tabs
  },
  props: ["id"],
  methods: {
    loadData() {
      const leagues = this.$store.getters.competitions;
      leagues.forEach(league => {
        if (league.id === Number(this.id)) {
          this.header.imageUrl = league.logo;
          this.header.name = league.name;
        }
      });
    }
  },
  data() {
    return {
      header: {
        imageUrl: null,
        name: null
      }
    };
  },
  mounted() {
    this.loadData();
  },
  watch: {
    id() {
      this.loadData();
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 2rem auto;

  .header {
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
      h1 {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 675px) {
    .header {
      justify-content: center;
      .image {
        width: 7rem;
        height: 7rem;
      }

      .data {
        h1 {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>