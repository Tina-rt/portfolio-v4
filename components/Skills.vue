<template>
  <div>
    <h1 class="text-2xl">Skills</h1>
    <div class="my-2">

      <div class="flex flex-col items-center justify-center w-full">
        <h2 class="text-xs text-neutral-300 italic p-2 border-b-2 w-full  border-neutral-500">What I'm
          proefficient with </h2>

        <div class="skill_container">
          <skills-tile :icon-path="skills.iconPath" :title="skills.title" :description="skills.description"
            v-for="skills in proefSkills"></skills-tile>


        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

import nuxtLogo from '~/assets/nuxtlogo.svg';
import vuejslogo from '~/assets/vuejslogo.png';
import typescriptlogo from '~/assets/typescript_original_logo_icon_146317.webp'
import pythonlogo from '~/assets/pythonlogo.png'
import nodejslogo from '~/assets/nodejslogo.png'
import dockerlogo from '~/assets/dockerlogo.png'
import mysqllogo from '~/assets/mysql logo.webp'
import capacitorlogo from '~/assets/capacitorlogo.png'


const proefSkills = ref<{
  title: string;
  iconPath: string;
  description: string;
}[]>([
  {
    title: "Nuxt",
    iconPath: nuxtLogo,
    description: "Vue Framework"
  },
  {
    title: "Vue",
    iconPath: vuejslogo,
    description: "Javascript Library for dynamic app"
  },
  {
    title: "Typescript",
    iconPath: typescriptlogo,
    description: "Like Javascript but better"
  },
  {
    title: "Python",
    iconPath: pythonlogo,
    description: "For building efficient backend, automate things"
  },
  {
    title: "NodeJS",
    iconPath: nodejslogo,
    description: "Fast Js runtime, backend logic"
  },
  {
    title: "MySQL",
    iconPath: mysqllogo,
    description: "Powerful relational database"
  },
  {
    title: "Docker",
    iconPath: dockerlogo,
    description: "Simplifies application deployement"
  },
  {
    title: "Tailwindcss",
    iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    description: "CSS utilities"
  }
])

</script>

<style scoped>
.skill_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
}

@media (max-width: 1000px) {
  .skill_container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>