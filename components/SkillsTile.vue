<template>
  <div
    class="flex gap-2 items-center bg-base-300  px-3 py-1 rounded-xl hover:bg-base-200 transition-all w-[250px] cursor-pointer">
    <div class="logo p-2 max-w-1/4">
      <img :src="props.iconPath" alt="Icon Nuxt" />
    </div>
    <div class="flex flex-col gap-1">
      <div>
        {{ props.title }}
      </div>
      <div class="text-xs text-neutral-400">
        <p>{{ props.description }} </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  iconPath: string;
  title: string;
  description: string;
}>()

</script>

<style></style>