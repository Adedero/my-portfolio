<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark() || true;
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <input @change="toggleDark()" type="checkbox" id="dark-mode-toggler" class="hidden">
    <label for="dark-mode-toggler" style="font-size: 1.1rem;" :class="isDark ? 'pi pi-moon' : 'pi pi-sun'" class="aspect-square cursor-pointer p-2 rounded bg-slate-200 dark:bg-slate-800"></label>
  </div>
</template>