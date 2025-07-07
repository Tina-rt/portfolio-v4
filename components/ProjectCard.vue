<template>
  <div class="card bg-base-200 w-full shadow-sm">

    <div class="card-body flex flex-row justify-between">
      <div>
        <h2 class="card-title">{{ props.title }}</h2>
        <p>{{ props.description }}</p>
        <div class="flex gap-1 flex-wrap my-2 pt-4">
          <div class="badge badge-soft" v-for="b in props.skills">{{ b }}</div>
        </div>
        <div class="card-actions ">
          <button class="btn btn-primary">View </button>
        </div>
      </div>
      <figure class="w-1/3 rounded-2xl">
        <img :src="props.coverImage" :alt="props.title" />
      </figure>
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

<style></style>