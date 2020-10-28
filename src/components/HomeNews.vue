<template>
  <div v-if="!isLoading" class="section">
    <div class="top">
      <div class="image">
        <img :src="talksport[0].urlToImage" alt="image" />
      </div>
      <div class="data">
        <a :href="talksport[0].url">{{ talksport[0].title }}</a>
        <p>{{ talksport[0].author }}</p>
      </div>
    </div>
    <div class="container">
      <div v-for="news in talksport.splice(1)" :key="news.title" class="news">
        <div class="image">
          <img :src="news.urlToImage" alt="image" />
        </div>
        <a :href="news.url">{{ news.title }}</a>
        <p>{{ news.author }}</p>
      </div>
    </div>
  </div>
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
.section {
  margin-top: 1rem;
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
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 1.5rem;
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
        width: 100%;
        padding: 0;

        a {
          margin-top: 1rem;
          font-size: 1rem;
        }
      }
    }
  }

  .container {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 2rem;

    .news {
      display: grid;
      gap: 1rem 0;
      grid-template-rows: 12rem 1fr 0.5fr;
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
        font-size: 1rem;
        font-weight: bold;
      }

      p {
        align-self: flex-end;
      }
    }
  }
}
</style>