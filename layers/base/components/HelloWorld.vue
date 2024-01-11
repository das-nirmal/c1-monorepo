import { useNuxtApp } from 'nuxt/app';
<template>
  <p class="hello-msg">Hello from base layer!</p>
</template>

<style>
.hello-msg {
  font-family: "Mulish", "sans-serif";
}
</style>

<script setup>

const nuxtApp = useNuxtApp();
nuxtApp.$logger.info('PINOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO- ' + process.server)
</script>