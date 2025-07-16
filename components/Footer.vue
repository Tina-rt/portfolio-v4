<template>
    <div class=" footer">
        <div class="text-4xl">So, let's work together</div>
        <div class="flex  items-center gap-5">
            <a href="mailto:rtinahubert@gmail.com" class="flex gap-1 items-center ">
                <icon name="uil:envelope" size="20" />
                <span>Email me</span>
            </a>
            -
            <a href="https://www.linkedin.com/in/tina-rt/" class="flex gap-1 items-center ">
                <icon name="uil:linkedin" size="20" />
                <span>My Linkedin</span>
            </a>
            <!-- <div class="flex gap-2 items-center ">
                <icon name="uil:phone" size="20" />
                <span>+261 34 77 628 54</span>
            </div> -->
        </div>

    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
}
</style>

<script lang="ts" setup></script>