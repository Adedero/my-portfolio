<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <div class="md:flex items-center justify-between">
    <Header />
    <Nav />
  </div>
  
  
  <RouterView />
</template>

<style scoped>
</style>

