<template>
  <div id="projects" class="flex flex-col gap-3 py-[4rem]">
    <h2 class="text-2xl mb-5 text-center">Personal projects</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
  },
  {
    title: "Ariary converter",
    description: "Web extension that converts foreign currency on amazon to Malagasy Ariary ",
    coverImage: "https://store-images.s-microsoft.com/image/apps.41182.e1195f1f-ac9b-416f-9621-9aa7a2e29018.eb902167-1077-488a-b6a0-657f9897a5bb.24a83b27-57ea-4724-bb42-07ce94dbb361",
    skills: ['Javascript', 'chrome extension', 'HTML', 'CSS'],
    sourceLink: "https://github.com/Tina-rt/rltime-currency-converter",
    demoLink: "https://microsoftedge.microsoft.com/addons/detail/ariaryconverter/emaokcplamnpbefkneaociamopkfjmol"
  }
])

</script>

<style></style>