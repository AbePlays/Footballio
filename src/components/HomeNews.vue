<template>
  <section v-if="!isLoading">
    <div class="top">
      <div class="image">
        <img :src="talksport[0].urlToImage" alt="image" />
      </div>
      <div class="data">
        <h1>{{ talksport[0].title }}</h1>
        <p>{{ talksport[0].author }}</p>
      </div>
    </div>
    <div class="container">
      <div v-for="news in talksport.splice(1)" :key="news.title" class="news">
        <img :src="news.urlToImage" alt="image" />
        <h1>{{ news.title }}</h1>
        <p>{{ news.author }}</p>
      </div>
    </div>
  </section>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
      talksport: [],
      isLoading: true
    };
  },
  async mounted() {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${process.env.VUE_APP_NEWS_KEY}`
    );
    const data = await res.json();
    this.talksport = data.articles;
    this.isLoading = false;
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