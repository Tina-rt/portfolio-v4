<template>
  <div class="bg-base-200 p-4 rounded-2xl">

    <div class="flex gap-6 items-center">
      <div class="avatar">
        <div class="w-30 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="text-xl">Hey, I'm Tina 👋</div>
        <div class="italic font-light text-sm">Fullstack developer</div>
        <div class="font-light opacity-60  flex items-center gap-1">
          <Icon name="material-symbols:location-on" />
          <div>Madagascar</div>
        </div>
      </div>
    </div>
    <div class="p-2 pt-4 mt-6 text-xl">
      I'm a <span class="text-accent-content bg-accent px-1">fullstack developer</span> based in Madagascar. I can
      create
      web
      application with
      <span class="text-accent">NuxtJs</span> and <span class="text-accent">NodeJs</span>.
    </div>

    <div class="w-fit m-auto mt-10 my-3">
      <div class="btn btn-primary">
        <a href="Tina-CV.pdf" target="_blank">

          <icon name="ic:round-file-download" /> Download my resume
        </a>
      </div>
    </div>
    <div class="mt-5 flex gap-2 m-auto w-fit text-neutral-300">
      <a class="link text-xl" href="mailto:rtinahubert@gmail.com">
        <icon size="30" name="mynaui:envelope" />
      </a>
      <a href="https://github.com/Tina-rt/">
        <icon size="30" name="mdi:github" />
      </a>
      <a href="https://www.linkedin.com/in/tina-rt/">
        <icon size="30" name="mdi:linkedin" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>