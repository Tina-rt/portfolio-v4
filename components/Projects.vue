<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-2xl mb-5">Personal projects</h1>
    <div class="flex flex-col gap-4 flex-wrap items-center">
      <project-card v-bind="p" v-for="p in projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>

const projects = ref<Project[]>([
  {
    title: "Daily Mg",
    description: "Madagascar news daily, scraped from multiple journal",
    coverImage: "https://cdn.dribbble.com/userupload/11224084/file/original-982ecfe80abe3ddf3cf0db4e16bfee94.png?resize=1024x768&vertical=center",
    skills: ["nuxt", "vue", "python", "flask"]
  },
  {
    title: "Kairot",
    description: "Web App for transcripting audio to structured text",
    coverImage: "https://cdn.dribbble.com/userupload/43989526/file/original-91f1f4ced1461f1dd9d28c532b804541.png?resize=1024x768&vertical=center",
    skills: ["nuxt", "vue", "python", "flask", "supabase"]
  }
])

</script>

<style></style>