<script setup>
import showToast from '@/utils/show-toast';
import { useToast } from 'vue-toast-notification';

const toast = useToast();
const url = import.meta.env.VITE_URL
</script>

<template>
  <footer class="mt-10 border-t px-4 pt-3 pb-8 flex flex-wrap items-center gap-5 justify-between">
    <div class="flex items-center gap-3 flex-wrap">
      <a :href="url" class="font-[Holimount] text-6xl">
        Adedero
      </a>
      <p class="text-sm mt-2 flex items-center gap-1">
        <span>&copy; {{ new Date().getFullYear() }}. Made by Adedero with</span>
        <a href="https://vuejs.org/" target="_blank" class="flex items-center gap-1 hover:underline">
          <span>Vue.js</span>
          <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
            <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E" />
          </svg>
        </a>
      </p>
    </div>


    <div class="flex items-center gap-2">
      <VDarkModeToggler class="mr-10" />
      <VSocialLink href="https://github.com/Adedero" icon="pi pi-github" title="Github" />
      <VSocialLink href="https://www.linkedin.com/in/cosmos-junior-180320b6" icon="pi pi-linkedin" title="Linkedin" />
      <VSocialLink href="https://wa.me/2348069775012?text=I'm%20interested%20in%20building%20a%20web%20app."
        icon="pi pi-whatsapp" title="Whatsapp" />
      <VSocialLink href="tel:+2348069775012" target="_self" icon="pi pi-phone" title="Telephone" />
      <VSocialLink href="mailto:cosmosjunior0495@gmail.com" icon="pi pi-envelope" title="Email" />
    </div>

    <div class="w-full flex items-center gap-4 md:justify-end text-sm flex-wrap">
      <a href="#home" class="hover:underline">Home</a>
      <a href="#about-me" class="hover:underline">About</a>
      <a href="#tech" class="hover:underline">Technologies</a>
      <a href="#projects" class="hover:underline">Projects</a>
      <a href="#experience" class="hover:underline">Experience</a>
      <a href="#education" class="hover:underline">Education</a>
      <a @click="showToast(toast)" href="/my-resume.pdf" download="Adedero_Cosmos_Resume" class="hover:underline">R&#233;sum&#233;</a>
    </div>
  </footer>
</template>