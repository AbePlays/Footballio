<template>
  <section>
    <the-header></the-header>
    <standing></standing>
    <news></news>
  </section>
</template>

<script>
import TheHeader from "./ui/Header.vue";
import Standing from "./ui/Standing.vue";
import News from "./ui/News.vue";

export default {
  components: {
    TheHeader,
    Standing,
    News
  }
};
</script>

<style lang="scss" scoped>
</style>