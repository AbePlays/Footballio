<template>
  <section>
    <the-header></the-header>
    <news></news>
  </section>
</template>

<script>
import TheHeader from "./ui/Header.vue";
import News from "./News.vue";

export default {
  components: {
    TheHeader,
    News
  }
};
</script>

<style lang="scss" scoped>
</style>