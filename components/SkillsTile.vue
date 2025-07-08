<template>
  <div
    class="flex gap-2 items-center bg-base-300  px-3 py-1 rounded-xl hover:bg-base-200 transition-all w-[250px] cursor-pointer  tile">
    <div class="logo p-2">
      <img :src="props.iconPath" alt="Icon Nuxt" />
    </div>
    <div class="flex flex-col gap-1 tile-container w-full">
      <div>
        {{ props.title }}
      </div>
      <div class="text-xs text-neutral-400 hidden lg:block md:block">
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
    /* width: 100%; */
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .tile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    padding: 5px;
    font-size: small;

  }

  .tile-container {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>