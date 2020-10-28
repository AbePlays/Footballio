<template>
  <div class="loader loader1">
    <div>
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$grey: #00000080;
$green: #9acd32;

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
    border-top-color: $grey;
  }
  50% {
    transform: rotate(180deg);
    border-top-color: $green;
  }
  100% {
    transform: rotate(360deg);
    border-top-color: $grey;
  }
}

* {
  box-sizing: border-box;
}

body {
  background: #f9f9f9;
  padding-bottom: 50px;
}

@mixin loaderDivMixin {
  border-radius: 50%;
  padding: 4px;
  border: 1px solid transparent;
  animation: rotate linear 3.5s infinite;
}

.loader {
  position: relative;
  margin: 50px auto;
  width: 100px;
  height: 100px;
  display: block;
  overflow: hidden;
  div {
    height: 100%;
  }
}

/* loader 1 */
.loader1,
.loader1 div {
  @include loaderDivMixin;
  border-top-color: $green;
  border-bottom-color: $grey;
}

div:hover {
  animation-play-state: paused;
}

.loader,
.loader * {
  will-change: transform;
}
</style>