<template>
  <div class="form">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
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
      <a href="#">Forgot Password?</a>
      <button>Log in</button>
    </form>
    <p>Don't have an account?<a href="#" @click="switchAuth"> Sign up</a></p>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    switchAuth() {
      this.$emit("switch");
    },
    async submitForm() {
      if (this.verifyEmail(this.email) && this.password.length >= 6) {
        await this.$store.dispatch("signin", {
          email: this.email,
          password: this.password
        });
        this.$router.replace("/home");
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
  width: fit-content;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 2px grey;

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