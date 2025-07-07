<template>
  <div
    class="flex gap-2 items-center bg-base-300  px-3 py-1 rounded-xl hover:bg-base-200 transition-all w-[250px] cursor-pointer min-h-[80px] tile">
    <div class="logo p-2">
      <img :src="props.iconPath" alt="Icon Nuxt" />
    </div>
    <div class="flex flex-col gap-1 tile-container w-full">
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

<style scoped>
.logo {
  width: 25%;
}



@media (max-width : 1000px) {
  .logo {
    width: 100%;
    max-width: 100px;
  }

  .tile {
    display: flex;
    flex-direction: column;
    /* width: fit-content; */
    padding: 10px;
  }

  .tile-container {
    justify-content: center;
    align-items: center;
  }
}
</style>