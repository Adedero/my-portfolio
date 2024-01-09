<script setup>
import { useNavOpen } from '../stores/utilities.js'

import ContactMeIcons from '../components/ContactMeIcons.vue'
const nav = useNavOpen()
</script>

<template>
  <div :class="['container', nav.isOpen ? 'is-open' : '']">
    <div class="heading p-[1rem] text-center md:text-left">
        <h1 class="animate_flipIn text-[5rem] font-[Metropolis] text-[var(--primary)] md:text-[6rem]">get in <br> touch<span class="text-[var(--secondary)]">.</span></h1>

        <p class="animate_fadeInDown font-[Akurrat-mono] text-[var(--white)] text-lg">let's start something together!</p>
    </div>

    <div class="social-icons">
        <ContactMeIcons />
    </div>
    <div class="svg-box hidden lg:flex lg:items-center lg:justify-center h-40 w-40">
        <svg viewBox="0 0 110.91 61">
        <g id="Layer_1-2" data-name="Layer 1">
            <g>
            <circle class="cls-1" cx="97.32" cy="47.41" r="13.59"/>
            <polygon class="cls-2" points="18.9 29.98 0 61 37.8 61 18.9 29.98"/>
            <polygon class="cls-2" points="25.36 18.83 51.82 61 75.42 61 37.14 0 25.36 18.83"/>
            </g>
        </g>
        </svg>
    </div>
  </div>
</template>

<style scoped>
@import 'animate.css/animate.min.css';

.container {
  margin-top: 1rem;
  opacity: 1;
  transition: margin 1s, opacity 2s;
  height: calc(100dvh - 5rem);
  min-height: calc(100dvh - 5rem);
  min-width: 100dvw !important;
  overflow-y: scroll;
  position: relative;
  padding: 1rem 1rem 2rem 1rem;
}

.container.is-open {
  margin-top: 10rem;
  opacity: 0;
  transition: margin 1s, opacity 1s;
  min-height: 0;
  height: 0;
}

@keyframes initial-fade {
    from {opacity: 0;}
    to {opacity: 1;}
}

.heading {
    line-height: 5.5rem;
}

.heading > h1 {
    opacity: 0;
    animation:
        flipInX 1s ease 0.7s 1,
        initial-fade 1.2s ease 0.7s 1 forwards;
}

.heading > p {
    opacity: 0;
    animation:
        fadeInDown 1s ease 0.7s 1,
        initial-fade 1s ease 0.7s 1 forwards;
}

.social-icons {
    display: grid;
    place-content: center;
    padding-top: 4.5rem;
}

@media (min-width: 768px) {
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        padding-bottom: 7rem;
    }

    .social-icons {
        padding-top: 0;
    }

    .svg-box {
        opacity: 0;
        animation: slideFromTop 1s ease-out 2s 1 forwards;
    }

    .cls-1 {
        fill: var(--secondary)
    }

    .cls-2 {
        fill: var(--primary)
    }

    @keyframes slideFromTop {
       from { transform: translateY(-100px); opacity: 0;}
       to { transform: translateY(0); opacity: 1} 
    }
}
@media (min-width: 1024px) { 
    .container {
        justify-content: space-evenly;
    }
}
  
</style>
