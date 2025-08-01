<template>
  <div class="background-container ">
    <div class="background-inner"></div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped>
.background-container {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(80, 80, 80, 0.947);
  /* border-radius: 99999px; */
  overflow: hidden;

}

.background-inner {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: conic-gradient(from 0deg at 50% 50%, var(--color-primary) 0%, var(--color-secondary) 100%);
  filter: blur(100px);
  animation: animatebg 10s infinite;
  /* transform: translateX(10%); */
}

@keyframes animatebg {
  0% {
    transform: rotate(0deg) translateY(0) translateX(0);
  }

  50% {
    transform: rotate(0.5turn) translateX(20%) translateX(20%);
  }

  100% {
    transform: rotate(1turn) translate(0%) translateX(0);
  }
}
</style>