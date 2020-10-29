<template>
  <div class="form">
    <div class="container" v-if="showForm">
      <img src="../../assets/back.svg" alt="back-button" @click="switchForm" />
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            v-model.trim="name"
          />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            v-model.trim="email"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Atleast 6 characters long"
            v-model.trim="password"
          />
        </div>
        <div class="form-control">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Atleast 6 characters long"
            v-model.trim="confirmPassword"
          />
        </div>
        <button>Sign up</button>
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      showForm: false,
      chosenPlan: 2
    };
  },
  emits: ["switch"],
  methods: {
    switchAuth() {
      this.$emit("switch");
    },
    switchForm(plan) {
      this.chosenPlan = plan;
      this.showForm = !this.showForm;
    },
    submitForm() {
      if (
        this.name.length > 3 &&
        this.verifyEmail(this.email) &&
        this.password.length >= 6 &&
        this.password === this.confirmPassword
      ) {
        this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
          name: this.name,
          chosenPlan: this.chosenPlan
        });
      } else {
        alert("Invalid Credentials");
      }
    },
    verifyEmail(text) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(text);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
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

    @media (max-width: 820px) {
      width: 20rem;
    }
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