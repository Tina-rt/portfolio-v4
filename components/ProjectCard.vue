<template>
  <div class="card bg-base-200 w-full shadow-sm max-h-[30rem] md:max-h-[15rem] lg:max-h-[15rem] max-w-[50rem] ">

    <div class="card-body flex flex-col-reverse items-center justify-between max-h-full md:flex-row lg:flex-row">
      <div class="h-full flex flex-col justify-between">
        <h2 class="card-title">{{ props.title }}</h2>
        <p class="my-3">{{ props.description }}</p>


        <div class="flex gap-1 flex-wrap my-2 pt-4">
          <div class="badge badge-soft" v-for="b in props.skills">{{ b }}</div>
        </div>
        <div class="card-actions py-3">
          <button class="btn btn-secondary btn-sm">
            <icon name="material-symbols:open-in-new" /> Preview
          </button>
          <button class="btn btn-secondary btn-sm">
            <icon name="material-symbols:code-rounded" />
            Code
          </button>
        </div>
      </div>
      <div class="image-container">
        <img :src="props.coverImage" :alt="props.title" class="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  title: string;
  description: string;
  coverImage: string;
  skills?: string[];
}>();

</script>

<style scoped>
.image-container {
  width: 20rem;
  height: 10rem;
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>