<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main class="w-full h-full md:flex md:justify-center">
        <div class="picture hidden p-5 md:block md:shrink-0 animate_animated animate_fadeInUp">
            <div class="image-container rounded-full p-3">
                <img id="my-pic-1" class="w-40 h-40 rounded-full object-cover lg:w-[25rem] lg:h-[25rem]" src="../assets/my_pic_2.jpg" alt="my_pic">
            </div>
        </div>

        <div class="about-me lg:w-[45rem]">
            <h1>hey there! i'm adedero<span class="text-[var(--secondary)]">,</span></h1>
            <div class="full-text">
                <p>
                    A front-end developer on a mission to make the web a more enchanting place. <br> <br>

                    With 5 years of navigating the coding cosmos, I've transformed coffee-fueled ideas into dazzling digital experiences. I don't just write code; I compose symphonies of pixels that dance and sing on the screen. User interfaces aren't just interfaces to me; they're canvases waiting for an artistic touch. <br> <br>

                    What fuels my code engine? Passion, curiosity, and an insatiable appetite for innovation. I believe in pushing boundaries, experimenting with the latest tech trends, and turning challenges into opportunities for growth. <br> <br>

                    Collaboration is my secret sauce. I thrive in dynamic teams, where creativity sparks, and brilliant ideas collide. The more minds, the merrier! <br> <br>

                    Outside the tech realm, you might catch me exploring design galaxies, debating the future of front-end at meetups, or simply sipping on a cup of inspiration from design blogs.
                </p>
            </div>
            <div class="buttons mt-5">
                <a href="/adedero-resume.pdf" download="adedero-cosmos-cv.pdf">download CV</a>

                <router-link to="/projects">
                    my projects
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M18 6H9M18 6V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
            </div>
        </div>

    </main>
</template>

<style scoped>
@import 'animate.css/animate.min.css';

main {
    font-family: Metropolis;
}

.about-me {
    padding: 0 1rem 1rem 1rem;
}

.about-me > h1 {
    color: var(--primary);
    font-size: 2rem;
}

.full-text {
    color: var(--white);
    font-family: Akurrat-mono;
    height: calc(100dvh - 14rem);
    overflow-y: scroll;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.buttons > a:first-of-type {
    font-family: Akurrat-mono;
    padding: 0.5rem 1rem;
    color: var(--background);
    font-weight: bolder;
    background-color: var(--primary);
    border-radius: 999px;
    transition: .3s;
}

.buttons > a:first-of-type:hover {
    filter: drop-shadow(0 0 8px var(--primary))
}

.buttons > a:last-of-type {
    font-family: Akurrat-mono;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    padding: 0.5rem 1rem;
    color: var(--tertiary);
    transition: .3s;
}

.buttons > a:last-of-type > svg > path {
    stroke: var(--tertiary);
}

.buttons > a:last-of-type:hover {
    filter: drop-shadow(0 0 5px var(--tertiary))
}



@media (min-width: 1024px) { 
    .about {
        line-height: 5rem;
    }
}
</style>