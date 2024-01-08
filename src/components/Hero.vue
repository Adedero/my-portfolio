<script setup>
import { RouterLink } from 'vue-router'
import Dero from './Dero.vue'
</script>

<template>
    <section>
        <div class="hero-container animated">
            <h1 class="new-h1 hidden lg:block lg:absolute lg:left-0 lg:-top-5">front end developer</h1>
            <Dero />
            <div class="border top-border"></div>
            <div class="border right-border"></div>
            <div class="border bottom-border"></div>
            <div class="border left-border"></div>
        </div>

        <div class="intro">
            <p class="lg:text-right lg:w-[25rem] lg:-m-20 lg:ml-80">
                Hi! <br>
                I’m Adedero, a front end developer
                dedicated to making your designs
                a picture perfect reality.
                <br>
                If you can think it,
                I can build it!
            </p>
        </div>

        <div class="buttons flex items-center gap-5 lg:mt-16 lg:ml-[33rem]">
            <router-link to="/contact">
                <button class="hire-me">hire me</button>
            </router-link>
            
            <router-link to="/about">
                <button class="learn-more">learn more</button>
            </router-link>
            
        </div>
    </section>
</template>

<style scoped>


section {
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;
}

.hero-container {
    position: relative;
    padding: 0 2rem;
    max-width: 35rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.border {
    position: absolute;
    width: 2px;
    background-color: var(--secondary);
    border: 0;
    opacity: 0;
}

.top-border {
    top: 0;
    right: 0;
    height: 200px;
    transform: rotate(90deg);
    transform-origin: top right;
}

.right-border {
    height: 100px;
    right: 0;
    top: 0;
}

.bottom-border {
    bottom: 0;
    left: 0;
    height: 200px;
    transform: rotate(90deg);
    transform-origin: bottom left;
}

.left-border {
    height: 100px;
    left: 0;
    bottom: 0;
}

@keyframes animate-x {
    0% {height: 200px; opacity: 1;}
    50% {height: 420px; opacity: 1;}
    100% {height: 200px; opacity: 1;}
}

@keyframes animate-y {
    0% {height: 100px; opacity: 1;}
    50% {height: 170px; opacity: 1; }
    100% {height: 100px; opacity: 1;}
}

.hero-container .top-border {
    animation: animate-x 3s ease .8s 1 forwards;
}

.hero-container .right-border {
    animation: animate-y 3s ease .5s 1 forwards;
}

.hero-container .bottom-border {
    animation: animate-x 3s .8s ease 1 forwards;
}

.hero-container .left-border {
    animation: animate-y 3s ease .5s 1 forwards;
}

@keyframes fade {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-left {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-right {
    from {
        transform: translateX(50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.intro {
    font-family: Akurrat-Mono;
    font-size: 1.1rem;
    padding: 2rem 1rem 1rem 1rem;
    opacity: 0;
    animation: fade 1s cubic-bezier(0.215, 0.610, 0.355, 1) 3s 1 forwards;
}

.buttons {
    font-family: Akurrat-Mono;
    font-size: 1.1rem;
}

.hire-me {
    border: 2px solid var(--primary);
    padding: 0.4rem;
    width: 8rem;
    border-radius: 50rem;
    color: var(--primary);
    transition: .3s ease;
    opacity: 0;
    animation: slide-left 1s ease 2s 1 forwards;
}

.hire-me:hover {
    background-color: var(--primary);
    color: var(--background);
    font-weight: bolder;
    filter: drop-shadow(0 0 5px var(--primary))
}

.learn-more {
    color: var(--secondary);
    opacity: 0;
    animation: slide-right 1s ease 2.5s 1 forwards;
}

.learn-more:hover {
    filter: drop-shadow(0 0 5px var(--secondary))
}

@media (min-width: 1024px) {
    @keyframes animate-x {
    0% {height: 350px; opacity: 1;}
    50% {height: 800px; opacity: 1;}
    100% {height: 350px; opacity: 1;}
}

@keyframes animate-y {
    0% {height: 100px; opacity: 1;}
    50% {height: 255px; opacity: 1; }
    100% {height: 150px; opacity: 1;}
}
    .hero-container {
        min-width: 50rem;
        height: 16rem;
        margin-top: 2rem;
    } 

    @keyframes slide-top-new {
    from {transform: translateY(-50px); opacity: 0;}
    to {transform: translate(0); opacity: 1;}
  }
  .new-h1 {
    opacity: 0;
    animation: slide-top-new 1s ease 3s 1 forwards;
  }
}
</style>