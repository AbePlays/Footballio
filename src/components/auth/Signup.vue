<template>
  <div class="form">
    <div class="container" v-if="showForm">
      <img src="../../assets/back.svg" alt="back-button" @click="switchForm" />
      <form>
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="John Doe" />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="example@example.com" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Atleast 6 characters long"
          />
        </div>
        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Atleast 6 characters long"
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
    <subscription v-else @switchToForm="switchForm"></subscription>
    <p>Already have an account?<a href="#" @click="switchAuth"> Log in</a></p>
  </div>
</template>

<script>
import Subscription from "./Subscription.vue";

export default {
  components: {
    Subscription
  },
  data() {
    return {
      showForm: false
    };
  },
  emits: ["switch"],
  methods: {
    switchAuth() {
      this.$emit("switch");
    },
    switchForm() {
      this.showForm = !this.showForm;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: fit-content;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 2px grey;

  img {
    width: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    margin: 0 1rem 3rem;
    text-align: center;
  }

  .form-control {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    width: 25rem;
    height: 2.5rem;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: red;
  }

  button {
    display: block;
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

  p {
    text-align: center;
  }
}
</style>