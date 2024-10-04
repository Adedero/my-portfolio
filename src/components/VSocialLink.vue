<script setup>
defineProps({
  href: { type: String },
  title: { type: String },
  target: { type: String, default: '_blank' },
  text: { type: String },
  icon: { type: String }
});

const baseClass = 'cursor-pointer p-2 rounded bg-slate-200 dark:bg-slate-800'

</script>

<template>
  <a v-if="href" :title="title" :href="href" :target="target" :class="[baseClass, 'grid place-content-center']">
    <span :class="icon" style="font-size: 1.1rem;"></span>
  </a>

  <span v-else :title="title" style="font-size: 1.1rem;" :class="[icon, baseClass]"></span>
</template>