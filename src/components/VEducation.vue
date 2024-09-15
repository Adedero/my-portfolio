<script setup>
defineProps({
  initials: { type: String },
  fullName: { type: String },
  duration: { type: String },
  location: { type: String },
  degree: { type: String },
  schoolLogo: { type: String }
});
</script>

<template>
  <div>
    <div class="flex items-center gap-2 justify-between">
      <div class="flex items-center gap-2">
        <img v-if="schoolLogo" :src="schoolLogo" :alt="initials" class="w-8 aspect-square rounded-full object-cover" />
        <h1 class="text-xl font-bold">{{ initials }}</h1>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="pi pi-calendar" style="font-size: 0.8rem"></span>
        <span>{{ duration }}</span>
      </div>
    </div>

    <div class="text-sm mt-2 flex items-center gap-2 justify-between">
      <h1>{{ fullName }}</h1>
      <div class="flex items-center gap-2">
        <span class="pi pi-map-marker" style="font-size: 0.8rem"></span>
        <span>{{ location }}</span>
      </div>
    </div>

    <div class="mt-2 flex items-center gap-2">
      <span class="pi pi-graduation-cap"></span>
      <span class="font-semibold text-lg">{{ degree }}</span>
    </div>
  </div>
</template>