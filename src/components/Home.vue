<template>
  <section>
    <the-header></the-header>
    <scorer></scorer>
  </section>
</template>

<script>
import TheHeader from "./ui/Header.vue";
import Scorer from "./Scorer.vue";

export default {
  components: {
    TheHeader,
    Scorer
  }
};
</script>

<style lang="scss" scoped>
</style>