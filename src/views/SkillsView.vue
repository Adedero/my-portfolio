<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavOpen } from '../stores/utilities.js'

const popup = ref(null)

const nav = useNavOpen()

function showPopup(event) {
    if (event.target.id === "") return
    const rect = event.currentTarget.getBoundingClientRect()
    popup.value.style.top = `${rect.top}px`
    popup.value.style.left = `${rect.left}px`
    popup.value.classList.add('show')
    popup.value.innerText = event.target.id
}

function hidePopup() {
    popup.value.classList.remove('show')
}

onMounted(() => {
    const cards = document.querySelectorAll('.cards-container > .card')
    cards.forEach(card => card.addEventListener('mouseenter', showPopup))
    cards.forEach(card => card.addEventListener('mouseleave', hidePopup))
})

onUnmounted(() => {
    const cards = document.querySelectorAll('.cards-container > .card')
    cards.forEach(card => card.removeEventListener('mouseenter', showPopup))
    cards.forEach(card => card.removeEventListener('mouseleave', hidePopup))
})
</script>

<template>
  <div :class="['container', nav.isOpen ? 'is-open' : '']">
    <h1 class="font-[Metropolis] text-[var(--primary)] absolute px-[1rem] text-[2.5rem]">skills<span class="text-[var(--secondary)]">.</span></h1>
    <Teleport to="body">
        <div class="popup" ref="popup"></div>
    </Teleport>
    <div class="cards-container">
        <div class="card"  id="HTML">
            <img src="../assets/icons/html.svg" alt="html" class="w-12 h-12 object-cover">
        </div>
        <div class="card" id="CSS">
            <img src="../assets/icons/css.svg" alt="css" class="w-12 h-12 object-cover">
        </div>
        <div class="card" id="JavaScript">
            <img src="../assets/icons/js.svg" alt="javascript" class="w-12 h-12 object-cover">
        </div>

        <div class="card" id="Tailwind CSS">
            <img src="../assets/icons/tailwind.svg" alt="tailwind" class="w-12 h-12 object-cover">
        </div>

        <div class="center card">
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

        <div class="card" id="Bootstrap">
            <img src="../assets/icons/bootstrap.svg" alt="bootstrap" class="w-12 h-12 object-cover">
        </div>

        <div class="card" id="Vue JS">
            <img src="../assets/icons/vue.svg" alt="vue" class="w-12 h-12 object-cover">
        </div>
        <div class="card" id="React JS">
            <img src="../assets/icons/react.svg" alt="react" class="w-12 h-12 object-cover">
        </div>
        <div class="card" id="Node">
            <img src="../assets/icons/node.svg" alt="node" class="w-12 h-12 object-cover">
        </div>
        
    </div>
    
  </div>
</template>

<style scoped>
@import 'animate.css/animate.min.css';
.cls-2 {
    fill: rgb(229, 229, 229);
}

.cls-1 {
    fill: rgb(229, 229, 229);
}

.container {
  margin-top: 1rem;
  opacity: 1;
  transition: margin 1s, opacity 2s;
  height: calc(100dvh - 5rem);
  min-height: calc(100dvh - 5rem);
  min-width: 100dvw !important;
  overflow-y: scroll;
  position: relative;
  padding: 1rem 1rem 6rem 1rem;
  display: grid;
  place-content: center;
}

.container.is-open {
  margin-top: 10rem;
  opacity: 0;
  transition: margin 1s, opacity 1s;
  min-height: 0;
  height: 0;
}

.popup {
    background-color: var(--primary);
    font-family: Akurrat-mono;
    font-weight: bolder;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    cursor: context-menu;
    user-select: none;
    transition: .3s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
}

.popup.show {
    z-index: 1;
    opacity: 1;
}

.cards-container {
    aspect-ratio: 1/1;
    width: 14rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    animation: rotate 2s ease 3s 1;
    margin-top: 2rem;
}

.card {
    background-color: var(--highlight);
    border-radius: 5px;
    aspect-ratio: 1/1;
    width: 4rem;
    display: grid;
    place-content: center;
    transition: filter .3s;
}

.card:hover {
    filter: drop-shadow(0 0 10px var(--primary))
}


.center svg {
    width: 3rem;
    transition: 1s;
    animation: pulse 0.2s ease 1s 1 forwards;
}

.inner {
    aspect-ratio: 1/1;
    width: 3rem;
    background-color: white;
    border-radius: 9999px;
}

.card:first-of-type {
    opacity: 0;
    animation:
        top-left 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.3s 1 forwards,
        squeeze-top-left 2s ease 3s 1;
}

.card:nth-of-type(2) {
    opacity: 0;
    animation:
        top 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.7s 1 forwards,
        squeeze-top 2s ease 3s 1;
}

.card:nth-of-type(3) {
    opacity: 0;
    animation:
        top-right 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.4s 1 forwards,
        squeeze-top-right 2s ease 3s 1;
}

.card:nth-of-type(4) {
    opacity: 0;
    animation:
        left 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.9s 1 forwards,
        squeeze-left 2s ease 3s 1;;
}

.card:nth-of-type(6) {
    opacity: 0;
    animation:
        right 0.5s cubic-bezier(0.23, 1, 0.320, 1) 2s 1 forwards,
        squeeze-right 2s ease 3s 1;;

}

.card:nth-of-type(7) {
    opacity: 0;
    animation:
        bottom-left 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.5s 1 forwards,
        squeeze-bottom-left 2s ease 3s 1;
}

.card:nth-of-type(8) {
    opacity: 0;
    animation:
        bottom 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.8s 1 forwards,
        squeeze-bottom 2s ease 3s 1;
}

.card:nth-of-type(9) {
    opacity: 0;
    animation:
        bottom-right 0.5s cubic-bezier(0.23, 1, 0.320, 1) 1.6s 1 forwards,
        squeeze-bottom-right 2s ease 3s 1;
}

@keyframes pulse {
    0% { transform: scale(100%);}
    50% { transform: scale(130%);}
    100% { transform: scale(100%);}
}

@keyframes top-left {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(-2rem, -2rem); opacity: 1;}
}

@keyframes bottom-left {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(-2rem, 2rem); opacity: 1;}
}

@keyframes top-right {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(2rem, -2rem); opacity: 1;}
}

@keyframes bottom-right {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(2rem, 2rem); opacity: 1;}
}

@keyframes top {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(0, -2rem); opacity: 1;}
}

@keyframes bottom {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(0, 2rem); opacity: 1;}
}

@keyframes left {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(-2rem, 0); opacity: 1;}
}

@keyframes right {
    from { transform: translate(0, 0); opacity: 0; }
    to { transform: translate(2rem, 0); opacity: 1;}
}

@keyframes rotate {
    0% {transform: rotate(0deg);}
    20% {transform: rotate(90deg);}
    50% { transform: rotate(-90deg);}
    100% {transform: rotate(1440deg);}
}

@keyframes squeeze-top-left {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-1rem, -1rem); }
    80% { transform: translate(-1rem, -1rem); }
    100% { transform: translate(-2rem, -2rem); }
}

@keyframes squeeze-bottom-left {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-1rem, 1rem); }
    80% { transform: translate(-1rem, 1rem); }
    100% { transform: translate(-2rem, 2rem); }
}

@keyframes squeeze-top-right {
    0% { transform: translate(0, 0); }
    50% { transform: translate(1rem, -1rem); }
    80% { transform: translate(1rem, -1rem); }
    100% { transform: translate(2rem, -2rem); }
}

@keyframes squeeze-bottom-right {
    0% { transform: translate(0, 0); }
    50% { transform: translate(1rem, 1rem); }
    80% { transform: translate(1rem, 1rem); }
    100% { transform: translate(2rem, 2rem); }
}

@keyframes squeeze-top {
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, -1rem); }
    80% { transform: translate(0, -1rem); }
    100% { transform: translate(0, -2rem); }
}

@keyframes squeeze-bottom {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-0, 1rem); }
    80% { transform: translate(0, 1rem); }
    100% { transform: translate(-0, 2rem); }
}

@keyframes squeeze-left {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-1rem, 0); }
    80% { transform: translate(-1rem, 0); }
    100% { transform: translate(-2rem, 0); }
}

@keyframes squeeze-right {
    0% { transform: translate(0, 0); }
    50% { transform: translate(1rem, 0); }
    80% { transform: translate(1rem, 0); }
    100% { transform: translate(2rem, 0); }
}

@media (min-width: 768px) {
    .cards-container {
        width: 20rem;
    }
    
    .card {
        width: 5rem;
    }
}
  
</style>
