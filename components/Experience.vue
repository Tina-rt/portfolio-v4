<script setup lang="ts">

const experiences = ref<Experience[]>([
    {
        title: "Frontend Vuejs Developer",
        company: "Neoshore Madagascar",
        daterange: "December 2023 - Present",
        description: "Maintain the existing Vue2 application, fixing and adding features. Creating and maintaining the new Vue3 application with Typescript, plementing figma design to functional application, making graphql api calls to the backend using apollo.",
        skils: ['vue2', 'Vue3', 'Typescript', 'apollo-graphql', 'primevue4']
    },
    {
        title: "Fullstack Nuxt/Node Developer",
        company: "Pharmatech",
        daterange: "July 2024 - October 2024 (Freelancing)",
        description: "Creating the frontend with nuxtJs and ensuring the SEO parts. Contribute also the backend services like auth, processing order and deliver an API for the Dashboard.",
        skils: ['Nuxt', 'Vue3', 'Typescript', 'ExpressJS', 'DaisyUI', 'Sequelize', 'MySQL']
    },
    {
        title: "Intern as Django and Javascript Developer",
        company: "Akanjo Madagascar",
        daterange: "July 2022 - September 2022",
        description: "Rebuilt the company employees and products management using django in the backend and Jquery on the frontend. Made a reporting system using Javascript library like HTML to Pdf.",
        skils: ['Django', 'Python', 'Javascript']
    }
])

</script>


<template>
    <div>
        <div class="text-2xl">Experiences</div>
        <div class="flex flex-col lg;grid md:grid grid-cols-2 gap-4">

            <ExperienceCard :experience="xp" v-for="xp in experiences" />
        </div>
    </div>
</template>

<style scoped></style>