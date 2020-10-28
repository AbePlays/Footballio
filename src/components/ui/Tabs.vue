<template>
  <div class="container">
    <div class="tabs">
      <button
        @click.prevent="clickHandler"
        id="news"
        class="active"
        ref="primary"
      >
        News
      </button>
      <button @click="clickHandler" id="fixtures">Fixtures</button>
      <button @click="clickHandler" id="table">Table</button>
      <button @click="clickHandler" id="goals">Top Scorers</button>
    </div>

    <div class="data">
      <news v-if="activeTab === 'news'" :id="id"></news>
      <fixtures v-else-if="activeTab === 'fixtures'" :id="id"></fixtures>
      <standing v-else-if="activeTab === 'table'" :id="id"></standing>
      <scorer v-else :id="id"></scorer>
    </div>
  </div>
</template>

<script>
import News from "./News.vue";
import Standing from "./Standing.vue";
import Scorer from "../Scorer.vue";
import Fixtures from "../Fixtures.vue";

export default {
  props: ["id"],
  components: {
    News,
    Standing,
    Scorer,
    Fixtures
  },
  watch: {
    id() {
      this.clearClasses();
      this.$refs.primary.classList.add("active");
      this.activeTab = "news";
    }
  },
  data() {
    return {
      activeTab: "news"
    };
  },
  methods: {
    clickHandler(event) {
      this.clearClasses();
      event.target.classList.add("active");
      this.activeTab = event.target.id;
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
.container {
  margin-top: 3rem;
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

  .data {
    margin-top: 2rem;
  }
}
</style>