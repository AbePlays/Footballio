<template>
  <section>
    <h1>Latest News</h1>

    <div class="news-container">
      <div class="news" v-for="news in newsArray" :key="news.url">
        <div class="image">
          <img :src="news.urlToImage" alt="thumbnail" />
        </div>

        <div class="details">
          <h1>{{ news.title }}</h1>
          <p>{{ news.author }} via {{ news.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsArray: [
        {
          name: "Football.London",
          author: "Archie Griggs",
          title:
            "Arsenal's David Luiz makes strong VAR claim in wake of Virgil van Dijk's injury for Liverpool - Football.London",
          description:
            "The Brazilian international wants to see contact in football perceived as 'part of the game'",
          url:
            "https://www.football.london/arsenal-fc/arsenals-david-luiz-makes-strong-19163416",
          urlToImage:
            "https://i2-prod.football.london/arsenal-fc/article19163405.ece/ALTERNATES/s1200/0_luiz.jpg"
        },
        {
          name: "Football.London",
          author: "Archie Griggs",
          title:
            "Arsenal's David Luiz makes strong VAR claim in wake of Virgil van Dijk's injury for Liverpool - Football.London",
          description:
            "The Brazilian international wants to see contact in football perceived as 'part of the game'",
          url:
            "https://www.football.london/arsenal-fc/arsenals-david-luiz-makes-strong-19163416",
          urlToImage:
            "https://i2-prod.football.london/arsenal-fc/article19163405.ece/ALTERNATES/s1200/0_luiz.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  h1 {
    font-size: 1.25rem;
  }

  .news-container {
    width: 50rem;
    border: 1px solid #888;
    border-radius: 5px;
    padding: 0 1rem;

    .news {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin: 1rem 0;

      .image {
        width: 40%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      .details {
        width: 60%;
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        justify-content: space-between;

        p {
          color: #aaa;
        }
      }
    }
  }
}
</style>