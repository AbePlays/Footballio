<template>
  <section>
    <div class="left">
      <h1>Welcome Back,</h1>
      <p>Log in to continue</p>
      <img src="../../assets/Signin.png" alt="logo" />
    </div>
    <div class="right">
      <div class="form">
        <h1>Log in</h1>
        <form>
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
          <a href="#">Forgot Password?</a>

          <button type="submit">Log in</button>
        </form>

        <p>Don't have an account?<a href="#"> Sign up</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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

    .form {
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
    }
  }
}
</style>