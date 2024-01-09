<script setup>
import { useNavOpen } from '../stores/utilities.js'
import Hero from '../components/Hero.vue'
import Socials from '../components/Socials.vue'
const nav = useNavOpen()

</script>

<template>
  <div :class="['container', nav.isOpen ? 'is-open' : '']">
    <div class="title text-center">
      <h1 class="old-h1 lg:hidden">front end developer</h1>
      <Hero />
    </div>
    <Socials />
    <h1 class="welcome hidden md:block">welcome</h1>
  </div>
</template>

<style scoped>

.container {
  margin-top: 1rem;
  opacity: 1;
  transition: margin 1s, opacity 2s;
  min-height: calc(100dvh - 5rem);
  min-width: 100dvw !important;
  padding-bottom: 2rem;
  position: relative;
}

.container.is-open {
  margin-top: 10rem;
  opacity: 0;
  transition: margin 1s, opacity 1s;
  min-height: 0;
  height: 0;
}

.title {
  color: var(--white);
  font-family: Metropolis;
  font-size: 2rem;
  width: inherit;
}

.old-h1 {
  opacity: 0;
  animation: slide-top 1s ease 1s 1 forwards;
}

@keyframes slide-top {
  from {transform: translateY(-50px); opacity: 0;}
  to {transform: translate(0); opacity: 1;}
}

@keyframes slide-across {
  0% {transform: translateX(0); opacity: 1;}
  50% {transform: translateX(100%); opacity: 1;}
  100% {transform: translateX(0); opacity: 1;}
}

.welcome {
  position: absolute;
  color: var(--tertiary);
  font-size: 7rem;
  font-family: Metropolis;
  bottom: 0;
  left: 0;
  z-index: 0;
  line-height: 0;
  opacity: 0;
  animation: slide-across 2s cubic-bezier(0.215, 0.610, 0.355, 1) 1s 1 forwards;
}

@media (min-width: 1024px) { 
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    order: 2;
  }
}
  
</style>
