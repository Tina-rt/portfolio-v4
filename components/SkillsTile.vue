<template>
  <div class="flex gap-2 items-center bg-base-300 w-fit px-3 py-2 rounded-xl">
    <div class="logo">
      <img width="30" :src="props.iconPath" alt="Icon Nuxt" />
    </div>
    <div>
      {{ props.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  iconPath: string;
  title: string;
}>()

</script>

<style></style>