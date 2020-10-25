<template>
  <div class="card">
    <img :src="imageUrl" alt="country-flag" />
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "name"]
};
</script>

<style lang="sass" scoped>
</style>