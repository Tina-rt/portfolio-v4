<template>
  <div class="flex w-full gap-4 justify-center p-4 sticky top-0 z-20 nav-bg">
    <a class="btn btn-ghost btn-secondary" href="#about">About</a>
    <a class="btn btn-ghost btn-secondary" href="#projects">Projects</a>
    <a class="btn btn-ghost btn-secondary" href="#experience">Experience</a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.nav-bg {
  backdrop-filter: blur(10px);
  border-radius: 20px;
  -webkit-backdrop-filter: blur(10px);
}

.nav-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(200deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%);
  border-radius: 20px;
  z-index: -1;
}
</style>