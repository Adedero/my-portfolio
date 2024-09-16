<script setup>
import showToast from '@/utils/show-toast';
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const url = import.meta.env.VITE_URL;
</script>

<template>
  <header class="sticky h-20 z-10 top-0 flex items-center justify-between px-4 py-3 backdrop-blur-sm bg-inherit">
    <a :href="url" class="font-[Holimount] text-6xl">
      Adedero
    </a>

    <div class="flex items-center gap-5">
      <VDarkModeToggler />
      <a @click="showToast(toast)" href="/my-resume.pdf" download="Adedero_Cosmos_Resume">
        <VButton text="R&#233;sum&#233;" icon="pi pi-download" />
      </a>
    </div>
  </header>
</template>