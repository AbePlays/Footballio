<template>
  <section>
    <div class="tabs">
      <button @click.prevent="clickHandler" id="news" class="active">
        News
      </button>
      <button @click="clickHandler" id="fixtures">Fixtures</button>
      <button @click="clickHandler" id="table">Table</button>
      <button @click="clickHandler" id="goals">Top Scorers</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    clickHandler(event) {
      this.clearClasses();
      event.target.classList.add("active");
    },
    clearClasses() {
      const buttons = document.querySelectorAll("button");
      buttons.forEach(button => {
        if (button.classList.contains("active")) {
          button.classList.remove("active");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  button {
    border: none;
    background-color: white;
    position: relative;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.15rem;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &::after {
      content: "";
      display: none;
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 0.12rem;
      border-radius: 5px;
      background-color: yellowgreen;
    }
  }

  .active {
    color: yellowgreen;

    &::after {
      display: block;
    }
  }
}
</style>