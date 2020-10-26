<template>
  <section>
    <the-header></the-header>
    <fixtures></fixtures>
  </section>
</template>

<script>
import TheHeader from "./ui/Header.vue";
import Fixtures from "./Fixtures.vue";

export default {
  components: {
    TheHeader,
    Fixtures
  }
};
</script>

<style lang="scss" scoped>
</style>