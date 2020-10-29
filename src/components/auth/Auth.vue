<template>
  <section>
    <div class="left">
      <h1 v-if="isLoginForm">Welcome Back,</h1>
      <h1 v-else>Create Your Account</h1>
      <p v-if="isLoginForm">Log in to continue</p>
      <p v-else>Sign up and get started</p>
      <img src="../../assets/Signin.png" alt="logo" />
    </div>
    <div class="right">
      <signin v-if="isLoginForm" @switch="switchAuth"></signin>
      <signup v-else @switch="switchAuth"></signup>
    </div>
  </section>
</template>

<script>
import Signin from "./Signin.vue";
import Signup from "./Signup.vue";

export default {
  components: {
    Signin,
    Signup
  },
  data() {
    return {
      isLoginForm: true
    };
  },
  methods: {
    switchAuth() {
      this.isLoginForm = !this.isLoginForm;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  height: 100vh;

  .left {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: #ccc;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      color: #888;
      margin-bottom: 2rem;
    }

    img {
      width: 30rem;
    }
  }

  .right {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>