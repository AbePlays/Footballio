<template>
  <section>
    <h1>Top News</h1>
    <home-news></home-news>
  </section>
</template>

<script>
import HomeNews from "./HomeNews.vue";

export default {
  components: {
    HomeNews
  },
  data() {
    return {
      newsArray: [],
      isLoading: true
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 1rem auto;

  h1 {
    font-size: 2rem;
  }
}
</style>