<script setup>
import { onMounted } from 'vue'
import { useNavOpen } from '../stores/utilities.js'

import AboutMeFirst from '../components/AboutMeFirst.vue'
import AboutMeSecond from '../components/AboutMeSecond.vue'


const nav = useNavOpen()

onMounted(() => {
    setTimeout(() => {
        document.querySelector("#section2").scrollIntoView({ behavior: 'smooth' })
    }, 3500);
})
</script>

<template>
  <div :class="['container', nav.isOpen ? 'is-open' : '']">
    <section id="section1">
        <AboutMeFirst />
    </section>
    <section id="section2">
        <AboutMeSecond />
    </section>
  </div>
</template>

<style scoped>

.container {
  margin-top: 1rem;
  opacity: 1;
  transition: margin 1s, opacity 2s;
  height: calc(100dvh - 5rem);
  min-height: calc(100dvh - 5rem);
  width: 100dvw !important;
  overflow-y: scroll;
  position: relative;
}

.container.is-open {
  margin-top: 10rem;
  opacity: 0;
  transition: margin 1s, opacity 1s;
  min-height: 0;
  height: 0;
}

section {
    width: 100%;
    height: 100%;
    min-height: calc(100dvh - 5rem);
    overflow-y: scroll;
}

@media (min-width: 1024px) { 
 /*  */
}
  
</style>
