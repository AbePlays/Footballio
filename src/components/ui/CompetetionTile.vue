<template>
  <div class="card">
    <img :src="imageUrl" alt="logo" />
    <div class="card-details">
      <h1>Country</h1>
      <p>{{ country }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "country"]
};
</script>

<style lang="scss" scoped>
.card {
  width: 15rem;
  box-shadow: 0 0 2px black;
  border-radius: 5px;
  margin: 1rem;

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  &-details {
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>