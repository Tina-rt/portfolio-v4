<template>
  <div id="projects" class="flex flex-col gap-3">
    <h1 class="text-2xl mb-5">Personal projects</h1>
    <div class="flex gap-4 flex-wrap items-center">
      <project-card v-bind="p" v-for="p in projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dailymgimg from '~/assets/Daily MG.webp'
import kairotimg from '~/assets/kairot.png'

const projects = ref<Project[]>([
  {
    title: "Daily Mg",
    description: "Madagascar news daily, scraped from multiple journal",
    coverImage: dailymgimg,
    skills: ["nuxt", "vue", "python", "flask", "mongodb"],
    sourceLink: 'https://github.com/Tina-rt/daily-mg',
    demoLink: 'https://daily-mg.netlify.app/'

  },
  {
    title: "Kairot",
    description: "Web App for transcripting audio to structured text",
    coverImage: kairotimg,
    skills: ["nuxt", "vue", "python", "flask", "celery", "socket", "firebase"],
    demoLink: "https://kairot.netlify.app/",
    sourceLink: "https://github.com/Tina-rt/kairot-front"
  }
])

</script>

<style></style>