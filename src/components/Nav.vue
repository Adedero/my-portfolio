<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useNavOpen } from '../stores/utilities.js'
import { links } from '../assets/data.js'
const nav = useNavOpen()


</script>

<template>
    <nav :class="['md:hidden', {'is-open': nav.isOpen}]" >
        <router-link
        @click="nav.isOpen = false"
        v-for="link, index in links"
        :key="index"
        :to="link.to"
        :class="nav.isOpen ? 'is-open': 'is-closed'">
            {{ link.name}} 
        </router-link>
    </nav>

    <div id="nav" class="hidden md:flex gap-5">
        <router-link
        v-for="link, index in links"
        :key="index"
        :to="link.to"
        class="text-lg lg:text-2xl">
            {{ link.name}} 
        </router-link>

    </div>
</template>

<style scoped>

@keyframes slide {
    from { transform: translateX(100px); opacity: 0;}
    to { transform: translateX(0); opacity: 1;}
}

@keyframes slide-back {
    from { transform: translateX(0); opacity: 1;}
    to { transform: translateX(100px); opacity: 0;}
}

nav a:first-of-type.is-open {
    animation: slide 1s cubic-bezier(0.23, 1, 0.320, 1) forwards 0.1s 1;
}

nav a:nth-of-type(2).is-open {
    animation: slide 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards 0.2s 1;
}

nav a:nth-of-type(3).is-open {
    animation: slide 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards 0.4s 1;
}

nav a:last-of-type.is-open {
    animation: slide 0.4s cubic-bezier(0.23, 1, 0.320, 1) forwards 0.6s 1; 
}



nav a:first-of-type.is-closed {
    animation: slide-back 0.4s cubic-bezier(0.23, 1, 0.320, 1) backwards 0.6s 1;
}

nav a:nth-of-type(2).is-closed {
    animation: slide-back 0.6s cubic-bezier(0.23, 1, 0.320, 1) backwards 0.4s  1;
}

nav a:nth-of-type(3).is-closed {
    animation: slide-back 0.8s cubic-bezier(0.23, 1, 0.320, 1) backwards 0.2s  1;
}

nav a:last-of-type.is-closed {
    animation: slide-back 1s cubic-bezier(0.23, 1, 0.320, 1) backwards 0.1s 1; 
}

nav  {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
    padding: 1rem;
    overflow: hidden;
    transform: translateX(100%);
    transition:  0.4s ease 1s;
    z-index: -1;
    height: 15rem;
    position: absolute;
    width: 0;
    opacity: 0;
    background-color: var(--background);
}

nav.is-open {
    transform: translate(0);
    transition:  0.4s ease;
    opacity: 1;
    z-index: 2;
    height: calc(100dvh - 4rem);
    width: 100%;
}


nav a {
  color: var(--secondary);
  font-family: Metropolis;
  font-size: 1.75rem;
  transition: color 0.3s, padding 0.3s;
  transform: translateX(100px);
  opacity: 0;
}

nav a:hover {
  color: var(--primary);
  filter: drop-shadow(0 0 15px var(--primary));
  padding-right: 1rem;
}

nav a.router-link-exact-active {
  color: var(--tertiary);
}

nav a.router-link-exact-active:hover {
  color: var(--primary);
}   

#nav {
    padding-right: 1rem;
}

#nav a {
  color: var(--secondary);
  font-family: Metropolis;
  display: block;
  transition: color 0.4s;
  position: relative;
}

#nav a:hover {
    color: var(--primary)
}

#nav a::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    background-color: var(--primary);
    bottom: 0;
    transition: width .4s;
}

#nav a:hover:before {
    width: 60%;
}

#nav a.router-link-exact-active {
  color: var(--tertiary);
}

#nav a.router-link-exact-active:hover {
  color: var(--primary);
} 
</style>