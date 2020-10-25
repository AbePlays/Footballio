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

<style lang="scss" scoped>
.card {
  width: 15rem;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  border-radius: 5px;
  margin: 3rem 5rem;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    transition: all 500ms ease-in-out;
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
  }
}
</style>