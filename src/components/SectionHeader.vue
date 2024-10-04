<script setup>
defineProps({
  text: { type: String }
})
</script>

<template>
  <h1 class="text-4xl font-bold">{{ text }}</h1>
</template>