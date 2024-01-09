<script setup>
import { ref } from 'vue'

const primary = 'rgb(170, 255, 10)'
const secondary = 'rgb(255, 21, 237)'
const white = 'rgb(229, 229, 229)'
const tertiary = 'rgb(63, 217, 255)'
const red = '#FF158B'
const yellow = '#FFDD01'

const themes = [
{
    '--primary': primary,
    '--secondary': secondary,
    '--white': white,
    '--tertiary': tertiary
},
{
    '--primary': tertiary,
    '--secondary': white,
    '--white': primary,
    '--tertiary': secondary
},
{
    '--primary': red,
    '--secondary': yellow,
    '--white': white,
    '--tertiary': primary
},
]

const span = ref(null)

let count = ref(JSON.parse(localStorage.getItem('count')) || 0)

function initialTheme() {
    const themeObj = themes[count.value]
    for (let keys in themeObj) {
        document.body.style.setProperty(keys, themeObj[keys])
    }
}

initialTheme()
  
function checkCount() {
    count.value ++
    if (count.value === 3) {
        count.value = 0
        localStorage.setItem('count', count.value)
    }
    localStorage.setItem('count', count.value)
    location.reload()
}


</script>

<template>
    <div class="text flex">
        <div class="h1">
            <h1>dero</h1>
            <h1>dero</h1>
            <h1>dero</h1>
        </div>
        
        <span class="animate__animated animate_bounce" @click="checkCount" ref="span">.</span>
    </div>
</template>

<style scoped>
@import 'animate.css/animate.min.css';

@keyframes flip-y {
    0% {transform: translateY(0px); opacity: 0;}
    10% {transform: translateY(0px); opacity: 1;}
    20% {transform: translateY(-12rem); opacity: 1;}
    30% {transform: translateY(-12rem); opacity: 1;}
    40% {transform: translateY(-12rem); opacity: 1;}
    50% {transform: translateY(-24rem); opacity: 1;}
    60% {transform: translateY(-24rem); opacity: 1;}
    70% {transform: translateY(-24rem); opacity: 1;}
    100% {transform: translateY(0rem); opacity: 1;}
}

@keyframes appear {
    from {opacity: 0;}
    to {opacity: 1;}
}

.text {
    height: 12rem;
    overflow: hidden;
    font-size: 8rem;
    user-select: none;
    display: flex;
    justify-content: center;
}

.h1 {
    opacity: 0;
    animation: flip-y 2s ease 1 1s forwards;
}

.h1 h1:first-of-type {
    color: var(--primary);
}

.h1 h1:nth-of-type(2) {
    color: var(--secondary);
}

.h1 h1:last-of-type {
    color: var(--tertiary);
}

.text span {
    color: var(--secondary);
    cursor: pointer;
    opacity: 0;
    animation:
        appear 1s ease 1 0.5s forwards,
        bounce 1s 4s 1 forwards;
    transition: filter .2s;
}

.text span:hover {
    filter: drop-shadow(0 0 5px var(--secondary))
}

@media (min-width: 1024px) {
    @keyframes flip-y {
    0% {transform: translateY(0px); opacity: 0;}
    10% {transform: translateY(0px); opacity: 1;}
    20% {transform: translateY(-18rem); opacity: 1;}
    30% {transform: translateY(-18rem); opacity: 1;}
    40% {transform: translateY(-18rem); opacity: 1;}
    50% {transform: translateY(-36rem); opacity: 1;}
    60% {transform: translateY(-36rem); opacity: 1;}
    70% {transform: translateY(-36rem); opacity: 1;}
    100% {transform: translateY(0rem); opacity: 1;}
}
    .text {
        font-size: 12rem;
        height: 20rem;
    } 
}
</style>