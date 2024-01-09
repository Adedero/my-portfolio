<template>
    <main class="w-full h-full md:flex md:items-center md:justify-center  md:pb-20 lg:pb-12 lg:pl-0 lg:gap-10">
        <div class="picture p-5 flex flex-col items-center justify-center animate_animated animate_fadeInUp md:order-2 md:shrink-0">
            <div class="image-container rounded-full p-3">
                <img id="my-pic-1" class=" w-72 h-72 md:w-80 md:h-80 rounded-full object-cover lg:w-[25rem] lg:h-[25rem]" src="../assets/my_pic.jpg" alt="my_pic">
            </div>
        </div>

        <div class="about p-5 flex flex-col items-center justify-center md:order-1 md:items-start">
            <p class="animate_animated animate_fadeInLeft lg:text-2xl">a little bit</p>
            <h1 class="animate_animated animate_fadeInRight text-center md:text-left lg:text-[6rem]">about me<span class="text-[var(--secondary)]">.</span></h1>
        </div>
        
    </main>
</template>

<style scoped>
@import 'animate.css/animate.min.css';

main {
    font-family: Metropolis;
}

.picture {
    opacity: 0;
    animation: fadeInUp 1s ease .5s 1 forwards;
}

.image-container {
    border: 3px solid var(--white);
}


#my-pic-1 {
    filter: grayscale();
    transition: 0.2s;
} 

#my-pic-1:hover {
    transform: scale(110%);
    filter: grayscale(0);
}

.about {
    line-height: 3.5rem;
}

.about > p {
    opacity: 0;
    color: var(--white);
    animation: fadeInLeft 1.5s ease 1 .5s forwards;
}

.about > h1 {
    opacity: 0;
    color: var(--primary);
    font-size: 5rem;
    animation: fadeInRight 1.2s ease 1 .5s forwards;
}

@media (min-width: 1024px) { 
    .about {
        line-height: 5rem;
    }
}
</style>