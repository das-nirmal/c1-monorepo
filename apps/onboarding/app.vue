<template>
  <h1>Onboarding App</h1>
  <div>
    <HelloWorld/>
  </div>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup>
  import { getMessage } from 'lib-test';
  const msg = ref (getMessage());
</script>