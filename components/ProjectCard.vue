<template>
  <div class="card bg-base-200 w-[20rem] shadow-sm max-h-[30rem] ">

    <div class="card-body flex flex-col-reverse items-center justify-between max-h-full">
      <div class="h-full flex flex-col justify-between">
        <h2 class="card-title">{{ props.title }}</h2>
        <p class="my-3">{{ props.description }}</p>


        <div class="flex gap-1 flex-wrap my-2 pt-4">
          <div class="badge badge-soft" v-for="b in props.skills">{{ b }}</div>
        </div>
        <div class="card-actions py-3">
          <a target="_blank" :href="props.demoLink" class="btn btn-secondary btn-sm">
            <icon name="material-symbols:open-in-new" /> Preview
          </a>
          <a target="_blank" :href="props.sourceLink" class="btn btn-secondary btn-sm">
            <icon name="material-symbols:code-rounded" />
            Code
          </a>
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
  sourceLink?: string;
  demoLink?: string;
}>();

</script>

<style scoped>
.image-container {
  width: 100%;
  height: 10rem;
  border-radius: 20px;
}


img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}
</style>