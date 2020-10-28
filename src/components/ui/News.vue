<template>
  <section v-if="!isLoading">
    <div class="top">
      <div class="image">
        <img :src="newsArray[0].image" alt="image" />
      </div>
      <div class="data">
        <a :href="newsArray[0].url">{{ newsArray[0].title }}</a>
        <p>{{ newsArray[0].source.name }}</p>
      </div>
    </div>
    <div class="container">
      <div v-for="news in newsArray.splice(1)" :key="news.title" class="news">
        <div class="image">
          <img :src="news.image" alt="image" />
        </div>
        <a :href="news.url">{{ news.title }}</a>
        <p>{{ news.source.name }}</p>
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

      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: black;
        font-weight: bold;
      }

      p {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 675px) {
    .top {
      display: block;

      .image {
        width: 100%;
        height: 12rem;

        img {
          object-fit: cover;
        }
      }

      .data {
        margin-top: 1rem;
        width: 100%;
        padding: 0;

        a {
          font-size: 1rem;
        }
      }
    }
  }

  .container {
    margin: 2rem 0;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));

    .news {
      display: grid;
      gap: 1rem 0;
      grid-template-rows: 12rem 1fr 0.3fr;
      .image {
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
      }

      p {
        align-self: flex-end;
      }
    }
  }
}
</style>