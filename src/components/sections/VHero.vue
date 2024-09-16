<script setup>
import adedero from '@/assets/images/adedero.png'
</script>

<template>
  <section id="home" class="section w-full md:h-[calc(100dvh-5rem)] md:grid md:place-content-center">
    <div class="w-full flex flex-col items-center justify-between gap-5 md:flex-row md:-mt-10 ">
      <div class="flex flex-col gap-2 items-center md:order-2">
        <VImage :src="adedero" alt="adedero" image-class="max-w-[22rem] rounded-full" />
        <div class="flex items-center gap-2">
          <VSocialLink href="https://github.com/Adedero" icon="pi pi-github" title="Github" />
          <VSocialLink href="https://www.linkedin.com/in/cosmos-junior-180320b6" icon="pi pi-linkedin"
            title="Linkedin" />
          <VSocialLink href="https://wa.me/2348069775012?text=I'm%20interested%20in%20building%20a%20web%20app."
            icon="pi pi-whatsapp" title="Whatsapp" />
          <VSocialLink href="tel:+2348069775012" target="_self" icon="pi pi-phone" title="Telephone" />
          <VSocialLink href="mailto:cosmosjunior0495@gmail.com" icon="pi pi-envelope" title="Email" />
        </div>
      </div>

      <div class="text-center md:text-left md:order-1">
        <h1 class="text-6xl font-bold">ad<span>&#233;</span>der<span>&#7885;</span></h1>

        <p class="mt-2 text-lg">Full-Stack Developer & Web Engineer</p>

        <p class="mt-1 flex items-center justify-center md:justify-normal gap-2 text-sm">
          <svg width="15px" height="15px" fill="currentColor" version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="1052 796 200 200" enable-background="new 1052 796 200 200" xml:space="preserve">
            <g>
              <path d="M1151.998,921.75c-4.129,0-8.17-0.771-12.01-2.292l-50.167-19.888c0,11.08,0,27.65,0,32.066
                c0,15.562,27.836,28.174,62.178,28.174s62.181-12.612,62.181-28.174v-32.067l-50.172,19.889
                C1160.168,920.979,1156.127,921.75,1151.998,921.75z" />
              <path d="M1248.592,867.082l-87.989-34.878c-5.526-2.19-11.681-2.19-17.208,0l-87.988,34.878c-2.057,0.815-3.407,2.804-3.407,5.016
                c0,2.213,1.351,4.201,3.407,5.017l12.317,4.882v34.925c-2.736,1.865-4.533,5.007-4.533,8.568c0,3.262,1.508,6.171,3.863,8.071
                l-3.751,18.007c-0.503,2.416,0.108,4.931,1.666,6.845c1.557,1.915,3.894,3.026,6.361,3.026h4.449c2.468,0,4.804-1.111,6.361-3.026
                c1.557-1.914,2.168-4.429,1.666-6.845l-3.752-18.007c2.356-1.9,3.864-4.81,3.864-8.071c0-3.562-1.797-6.703-4.533-8.568v-30.303
                l63.729,25.264c5.708,2.263,12.063,2.263,17.771,0l87.709-34.768c2.057-0.815,3.407-2.804,3.407-5.017
                C1252,869.886,1250.649,867.897,1248.592,867.082z" />
            </g>
          </svg>
          <span>B.Tech., Computer Science</span>
        </p>

        <p class="mt-1 flex items-center justify-center md:justify-normal gap-2 text-sm">
          <svg width="15px" height="15px" viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <path fill="currentColor" d="M256,0C139.563,0,45.172,94.406,45.172,210.828S210.875,512,256,512c45.109,0,210.828-184.75,210.828-301.172
                S372.438,0,256,0z M256,307.594c-53.453,0-96.766-43.328-96.766-96.766c0-53.453,43.313-96.766,96.766-96.766
		            c53.438,0,96.766,43.313,96.766,96.766C352.766,264.266,309.438,307.594,256,307.594z" />
            </g>
          </svg>
          <span>Abuja, Nigeria</span>
        </p>

        <hr class="max-w-60 my-4 mx-auto md:mx-0">

        <div>
          <p>Hi, there! 👋</p>
          <p>I'm <span class="bg-slate-200 dark:bg-slate-800 py-1 px-2 rounded">Adedero Cosmos</span>, but you can call
            me <i>Dero</i>.</p>
          <p>I'm deeply in love with <span class="bg-slate-200 dark:bg-slate-800 py-0.5 px-1 rounded">web
              development</span>, and I have a passion for crafting unique and engaging web
            experiences.</p>
          <p class="text-rose-500">If you can think it, we can build it together!</p>
        </div>

        <div class="w-full flex flex-wrap items-center justify-center gap-3 mt-6 md:justify-normal">
          <a href="#about-me">
            <VButton text="Learn More" outlined button-class="w-36" />
          </a>
          <VButton text="R&#233;sum&#233;" icon="pi pi-download" button-class="w-36" />
        </div>
      </div>
    </div>
  </section>
</template>