<template>
  <div>
    <h1 class="text-2xl">Skills</h1>
    <div class="flex  gap-1 flex-wrap p-2">
      <skills-tile :icon-path="nuxtLogo" title="Nuxt"></skills-tile>
      <skills-tile :icon-path="vuejslogo" title="Vue"></skills-tile>
      <skills-tile :icon-path="typescriptlogo" title="Typescript"></skills-tile>
      <skills-tile :icon-path="pythonlogo" title="Python"></skills-tile>
      <skills-tile :icon-path="nodejslogo" title="Node Js"></skills-tile>
      <skills-tile :icon-path="mysqllogo" title="MySQL"></skills-tile>
      <skills-tile :icon-path="dockerlogo" title="Docker"></skills-tile>
      <skills-tile :icon-path="capacitorlogo" title="Capacitor"></skills-tile>

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

</script>

<style></style>