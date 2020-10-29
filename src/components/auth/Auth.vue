<template>
  <section>
    <div class="left">
      <h1 v-if="isLoginForm">Welcome Back,</h1>
      <h1 v-else>Create Your Account</h1>
      <p v-if="isLoginForm">Log in to continue</p>
      <p v-else>Sign up and get started</p>
      <div class="image">
        <img src="../../assets/Signin.png" alt="logo" />
      </div>
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
  min-height: 100vh;

  @media (max-width: 820px) {
    display: block;
    background-color: #ccc;
  }

  .left {
    width: 40%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #ccc;

    @media (max-width: 820px) {
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      color: #888;
      margin-bottom: 2rem;
    }
    .image {
      max-width: 30rem;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 820px) {
        width: 20rem;
      }
    }
  }

  .right {
    padding: 1rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
      width: 100%;
    }
  }
}
</style>