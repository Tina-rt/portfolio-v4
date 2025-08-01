<script setup lang="ts">

const experiences = ref<Experience[]>([
    {
        title: "Frontend Vuejs Developer",
        company: "Neoshore Madagascar",
        daterange: "December 2023 - Present",
        description: "Maintain the existing Vue2 application, fixing and adding features. Creating and maintaining the new Vue3 application with Typescript, implementing figma design to functional application, making graphql api calls to the backend using apollo.",
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
    <div id="experience">
        <div class="text-2xl text-center py-4">Experiences</div>
        <ul class="timeline timeline-vertical pt-5 hidden lg:block md:block">

            <li v-for="(xp, index) in experiences">
                <span class="text-accent italic"
                    :class="{ 'timeline-start': index % 2 == 1, 'timeline-end': index % 2 == 0 }">
                    {{ xp.daterange }}
                </span>
                <div class="timeline-middle">
                    <Icon name="material-symbols:check-circle" size="24" />
                </div>
                <hr />
                <div class=" timeline-box"
                    :class="{ 'timeline-start': index % 2 == 0, 'timeline-end': index % 2 == 1 }">
                    <experience-card :experience="xp" />
                </div>
                <hr />
            </li>

        </ul>
        <div class="lg:hidden md:hidden  flex flex-col gap-4 pt-5">
            <template v-for="(xp, index) in experiences">
                <div v-if="index % 2 != 0" class="hidden lg:block md:block border-r-2"></div>
                <div class="timeline-box">
                    <ExperienceCard :experience="xp" />
                </div>
                <div v-if="index % 2 == 0" class="hidden lg:block md:block border-l-2"></div>

            </template>
        </div>
    </div>
</template>

<style scoped></style>