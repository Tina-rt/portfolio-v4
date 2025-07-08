<script lang="ts" setup>

const props = defineProps<{
    experience: Experience
}>();

</script>


<template>
    <div class="w-full  py-4  mt-5">
        <div class="xp-card-content">
            <!-- <div class="logo">
                    <img src="https://cdn-ilaggjd.nitrocdn.com/dBDcRuwsDBEgWdyvdnRDxfbIbjTNEeWw/assets/images/optimized/rev-00b88c2/neoshore.eu/wp-content/uploads/2024/03/logo-white-neoshore.png"
                        alt="Neoshore logo">
                </div> -->
            <div>
                <div class="font-bold text-xl text-white">{{ props.experience.title }}</div>
                <div class="italic text-sm text-accent">{{ props.experience.company }} | {{ props.experience.daterange
                }}</div>
                <p class="py-2">
                    {{ props.experience.description }}
                </p>
                <p class="flex gap-2 flex-wrap mt-3">
                    <span class="badge badge-info" v-for="sk in props.experience.skils">
                        {{ sk }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>
strong {
    font-weight: 400;
    /* background-color: var(--color-slate-100); */
    color: var(--color-accent);
    padding-inline: 4px;
}

p {
    text-align: justify;
}

/* .logo {
    aspect-ratio: 1/1;
    background-color: var(--color-secondary);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
} */

.xp-card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (max-width: 1000px) {
    .xp-card-content {
        display: flex;
        flex-direction: column;
    }

    .logo {
        width: 10rem;
    }
}
</style>