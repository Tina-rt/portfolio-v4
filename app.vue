<template>
  <div class="main">
    <NuxtPage />
  </div>
  <BackgroundAnim />
</template>

<script setup lang="ts">

onMounted(() => {
  document.getElementsByTagName('body')[0].setAttribute("data-theme", 'mytheme')
})
</script>

<style scoped>
.main {
  width: 100%;
  padding-inline: 1rem;
}

@media (min-width: 1000px) {
  .main {
    width: 70vw;
    margin: auto;
    padding: 0;
  }
}
</style>
