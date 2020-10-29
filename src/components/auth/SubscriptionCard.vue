<template>
  <div class="card">
    <h1>{{ duration }}</h1>
    <div class="bottom">
      <div class="up">
        <h1>{{ money }}</h1>
        <p>/month</p>
      </div>
      <div class="down">
        <p>Billed {{ duration.toLowerCase() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["money", "duration", "features"]
};
</script>

<style lang="scss" scoped>
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  height: 15rem;
  padding: 1rem;
  box-shadow: 0 0 2px grey;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px grey;
  }

  h1 {
    font-size: 1.5rem;
  }

  .bottom {
    .up {
      display: flex;
      align-items: baseline;
      margin-bottom: 1rem;

      h1 {
        font-size: 1.2rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>