<template>
  <div
    class="flex gap-2 items-center bg-base-300 rounded-xl hover:bg-base-200 transition-all w-[250px] cursor-pointer  tile">
    <div class="logo p-2">
      <img :src="props.iconPath" alt="Icon Nuxt" />
    </div>
    <div class=" flex-col gap-1 tile-container w-full hidden lg:flex md:flex">
      <div>
        {{ props.title }}
      </div>
      <div class="text-xs text-neutral-400 ">
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

.tile {
  padding: 5px;
}



@media (max-width : 1000px) {
  .logo {
    width: 100%;
    height: 50px;
    /* width: 50px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* aspect-ratio: 1/1; */
  }

  .tile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    padding: 0px;
    font-size: small;
    aspect-ratio: 1/1;
  }

  .tile-container {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>