<template>
  <div class="container">
    <div class="trial">
      <p @click="goToForm">Sign up with 30 days trial</p>
    </div>
    <p>----- OR -----</p>
    <div class="subs">
      <card
        :money="`$4.99`"
        :duration="`Annually`"
        id="annually"
        class="active"
        @click="switchClasses"
      ></card>
      <card
        :money="`$9.99`"
        :duration="`Monthly`"
        id="monthly"
        @click="switchClasses"
      ></card>
    </div>

    <button @click="goToForm">Next</button>
  </div>
</template>

<script>
import Card from "./SubscriptionCard.vue";

export default {
  emits: ["switch-to-form"],
  components: {
    Card
  },
  data() {
    return {
      activeSub: "annually"
    };
  },
  methods: {
    switchClasses(event) {
      this.clearClasses();
      event.target.classList.add("active");
    },
    clearClasses() {
      const annualCard = document.getElementById("annually");
      const monthCard = document.getElementById("monthly");
      annualCard.classList.remove("active");
      monthCard.classList.remove("active");
    },
    goToForm() {
      this.$emit("switch-to-form");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  margin-bottom: 1rem;
  .trial {
    padding: 0.5rem 0;
    width: 25rem;
    border-radius: 40px;
    background-color: black;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: background-color 300ms ease-in-out;

    @media (max-width: 820px) {
      width: 20rem;
    }

    &:hover {
      background-color: #555;
    }
  }

  p {
    text-align: center;
  }

  .subs {
    display: flex;
    gap: 0 1rem;
  }

  button {
    width: fit-content;
    border: none;
    padding: 0.5rem 2rem;
    margin: 1rem 1rem 1rem 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ddd;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #ccc;
    }
  }

  .active {
    background-color: #ddd;
  }
}
</style>