<script setup>
import showToast from '@/utils/show-toast';
import { useToast } from 'vue-toast-notification';

defineProps({
  title: { type: String, default: 'Project' },
  year: { type: [String, Number] },
  imageUrl: { type: String },
  githubUrl: { type: String },
  demoUrl: { type: String },
  description: { type: String },
  tools: { type: Array },
  isPrivate: { type: Boolean }
});


const toast = useToast();

</script>

<template>
  <div
    class="project-card">
    <div class="flex items-center gap-2 justify-between">
      <a :href="demoUrl" target="_blank" class="font-bold text-xl cursor-pointer hover:underline">{{ title }}</a>
      <p class="font-semibold text-sm">{{ year }}</p>
    </div>

    <div class="md:w-[60%] mt-2 transition-all">
      <div class="flex items-center gap-4 flex-wrap">
        <slot name="tools">
          <SkillIcon v-for="tool in tools" :key="tool" :title="tool" :icon="tool" size="30px" :show-title="false" />
        </slot>
      </div>

      <div class="mt-4">
        <slot name="description">
          <p class="text-sm">{{ description }}</p>
        </slot>
      </div>

      <div class="mt-4">
        <slot name="links">
          <div class="flex items-center gap-4">
            <VButton v-if="isPrivate" text="Code" icon="pi pi-lock" outlined size="small" @click="showToast(toast, 'The code for this project is private', 'warning')" />
            <a v-else :href="githubUrl" target="_blank">
              <VButton text="Code" icon="pi pi-github" outlined size="small" />
            </a>

            <a :href="demoUrl" target="_blank">
              <VButton text="Live" icon="pi pi-caret-right" size="small" />
            </a>
          </div>
        </slot>
      </div>
    </div>

    <div class="image-container hidden md:block">
      <img :src="imageUrl" :alt="title || 'logo'" class="w-full h-full object-cover object-top">
    </div>
  </div>
</template>

<style scoped>
.project-card {
  @apply opacity-0 translate-y-20 blur-md transition-all duration-300 ease-in border rounded-lg px-5 py-4 overflow-hidden relative cursor-context-menu select-none shadow-sm hover:bg-slate-200 dark:hover:bg-slate-800
}

.project-card.in-view {
  @apply opacity-100 translate-y-0 blur-none
}

.image-container {
  @apply absolute overflow-hidden transition-all w-full h-full border shadow bg-slate-300 dark:bg-slate-800 rounded-xl top-0 left-0 -z-[1] translate-x-[40%] translate-y-[25%] scale-[0.6]
}

.project-card:hover {
  .image-container {
    @apply -rotate-[5deg]
  }
}

</style>