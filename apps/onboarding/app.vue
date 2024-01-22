<template>
  <h1>Onboarding App</h1>
  <div>
    <HelloWorld/>
  </div>
  <div>
    <p>{{ msg }}</p>

    <button @click="handleClick">Make Api Call</button>
  </div>
</template>

<script setup>
import { getMessage } from 'test-package';
const msg = ref(getMessage());

async function handleClick() {
  const { data } = await useFetch('/api/hello');
  console.log("Response: ", data);
}

</script>