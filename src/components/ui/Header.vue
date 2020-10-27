<template>
  <nav>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/Logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="links">
        <router-link to="/auth">Log In</router-link>
        <router-link to="/auth">Log Out</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 1rem 0;
  background-color: #ddd;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80rem;
    margin: 0 auto;

    .logo {
      img {
        display: block;
        height: 3rem;
      }
    }

    .links {
      display: flex;
      gap: 0 2rem;

      a {
        text-decoration: none;
        color: black;
        padding: 0.3rem 2rem;
        border: 1px solid black;
        border-radius: 20px;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: black;
          color: #ddd;
        }
      }
    }
  }
}
</style>