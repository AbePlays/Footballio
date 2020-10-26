<template>
  <nav>
    <div class="logo">
      <h1>Footballio</h1>
    </div>
    <div class="links">
      <ul>
        <li>Leagues</li>
        <li>Contact Us</li>
        <li>Login</li>
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
    }
  }
}
</style>