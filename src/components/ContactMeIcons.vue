<script setup>
import { ref } from 'vue'

const email = ref('cosmosadederojr@gmail.com')
const copiedText = ref('click to copy.')

let hover = ref(false)

function copyText() {
    navigator.clipboard.writeText(email.value);
    copiedText.value = 'copied to clipboard.'
    setTimeout(() => {
        hover.value = false;
        copiedText.value = 'click to copy.'
    }, 2000);
}

</script>

<template>
    <div class="icons-container">
        <p class="clipboard font-[Akurrat-mono]" v-if="hover">
            <span>{{ email }}</span>
            <br>{{ copiedText }}
        </p>

        <span class="span flex items-center gap-3 cursor-pointer" @click="copyText" @mouseenter="hover=true" @mouseleave="hover=false">
            <svg id="gmail" viewBox="0 0 216 216">
                <path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498 L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616 l49.374-39.276V156z"/>
            </svg>
            <p>gmail</p>
        </span>

        <a class="flex items-center gap-3" href="https://facebook.com/cosmos.junior.355/" target="_blank">
            <svg id="fb" viewBox="0 0 24 24">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
            </svg>
            <p>facebook</p>
        </a>

        <a class="flex items-center gap-3" href="https://facebook.com/cosmos.junior.355/" target="_blank">
            <svg id="in" viewBox="-143 145 512 512">
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
            </svg>
            <p>linkedin</p>
        </a>

        <a class="flex items-center gap-3" href="https://wa.me/+2348069775012/" target="_blank">
            <svg id="wa" viewBox="0 0 32 32">
                <path d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32c0.1,0,0.3,0,0.4-0.1 l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23
                c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8
                c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7
                c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9
                l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"/>
            </svg>
            <p>whatsapp</p>
        </a>
            

        
    </div>
</template>

<style scoped>

.icons-container {
    font-family: Metropolis;
    letter-spacing: 0.3rem;
    color: var(--white);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.clipboard {
    letter-spacing: 0;
    font-size: 0.8rem;
    font-weight: bolder;
    position: absolute;
    top: -2.5rem;
    left: 3.2rem;
    background-color: var(--primary);
    color: var(--background);
    border-radius: 4px;
    padding: 0.1rem 0.5rem;
    width: max-content;
}

@keyframes run-in {
    0% { transform: translateX(-60px); opacity: 1; }
    25% { transform: translateX(60px); opacity: 1; }
    50% { transform: translateX(-30px); opacity: 1; }
    75% { transform: translateX(0px); opacity: 1; }
    100% { transform: translateX(0px); opacity: 1; }
}

@keyframes move-out {
    0% { transform: translateX(0) }
    100% { transform: translateX(10px) }
}

.span {
    opacity: 0;
    animation: run-in 1.5s ease 1.4s 1 forwards;
}

a:first-of-type {
    opacity: 0;
    animation: run-in 1.5s ease 1.6s 1 forwards;
}

a:nth-of-type(2) {
    opacity: 0;
    animation: run-in 1.5s ease 1.8s 1 forwards;
}

a:nth-of-type(3) {
    opacity: 0;
    animation: run-in 1.5s ease 2.0s 1 forwards;
}

a > p, .span > p{
    transition: .2s ease;
}

a:hover > p {
    animation: move-out .2s ease 1 forwards;
    transition: .2s ease;
}

.span:hover p {
    animation: move-out .2s ease 1 forwards;
    color: var(--primary);
    transition: .2s ease;
}

svg {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
}


#gmail {
    fill: var(--primary);
}

#fb {
    fill: var(--tertiary);
}

#in {
    width: 2.3rem;
    height: 2.3rem;
    fill: var(--secondary);
}

#wa {
    width: 2.2rem;
    height: 2.2rem;
    fill: var(--white);
}
    
</style>