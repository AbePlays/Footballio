<template>
  <section>
    <the-header></the-header>
    <standing></standing>
    <news></news>
    <fixture></fixture>
  </section>
</template>

<script>
import TheHeader from "./ui/Header.vue";
import Standing from "./ui/Standing.vue";
import News from "./ui/News.vue";
import Fixture from "./ui/Fixture.vue";

export default {
  components: {
    TheHeader,
    Standing,
    News,
    Fixture
  }
};
</script>

<style lang="scss" scoped>
</style>