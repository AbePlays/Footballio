<template>
  <nav>
    <div class="logo">
      <h1>Footballio</h1>
    </div>
    <div class="links">
      <ul>
        <li><router-link to="/countries">League</router-link></li>
        <li><router-link to="/">Contact Us</router-link></li>
        <li><router-link to="/auth">Account</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 4rem;
  background-color: #ddd;
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>