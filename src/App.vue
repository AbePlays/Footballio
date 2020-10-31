<template>
  <the-header v-if="showHeader"></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/ui/Header.vue";

export default {
  components: {
    TheHeader
  },
  computed: {
    showHeader() {
      const route = this.$route.fullPath;
      return route !== "/";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
}
</style>
