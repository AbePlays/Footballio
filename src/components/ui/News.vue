<template>
  <section v-if="!isLoading">
    <div class="top">
      <div class="image">
        <img :src="newsArray[0].image" alt="image" />
      </div>
      <div class="data">
        <h1>{{ newsArray[0].title }}</h1>
        <p>{{ newsArray[0].source.name }}</p>
      </div>
    </div>
    <div class="container">
      <div v-for="news in newsArray.splice(1)" :key="news.title" class="news">
        <img :src="news.image" alt="image" />
        <h1>{{ news.title }}</h1>
        <p>{{ news.source.name }}</p>
      </div>
    </div>
  </section>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      newsArray: [],
      isLoading: true
    };
  },
  watch: {
    id() {
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      const league = this.$store.getters.competitions.find(
        competition => competition.id === Number(this.id)
      );
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?country=${league.newsCode}&topic=sports&q=football&token=${process.env.VUE_APP_GNEWS}`
      );
      const data = await res.json();
      console.log(data);
      if (data.articles.length > 10) {
        this.newsArray = data.articles.slice(0, 10);
      } else {
        this.newsArray = data.articles;
      }
      this.isLoading = false;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
section {
  p {
    margin-top: 1rem;
    color: #888;
  }

  .top {
    display: flex;
    align-items: center;

    .image {
      width: 40%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .data {
      padding: 0 2rem;
      width: 60%;

      h1 {
        font-size: 1.5rem;
      }
    }
  }

  .container {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;

    .news {
      min-width: 18rem;
      flex: 1;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>