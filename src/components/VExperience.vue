<script setup>
defineProps({
  company: { type: String },
  duration: { type: String },
  location: { type: String },
  jobTitle: { type: String },
  description: { type: String },
  activities: { type: Array },
  companyLogo: { type: String }
});
</script>

<template>
  <div>
    <div class="flex items-center gap-2 justify-between">
      <div class="flex items-center gap-2">
        <img v-if="companyLogo" :src="companyLogo" :alt="company" class="w-8 aspect-square rounded-full object-cover" />
        <h1 class="text-xl font-bold">{{ company }}</h1>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="pi pi-calendar" style="font-size: 0.8rem"></span>
        <span>{{ duration }}</span>
      </div>
    </div>

    <div class="mt-2 flex items-center gap-2 justify-between">
      <h1 class="font-semibold">{{ jobTitle }}</h1>
      <div class="flex items-center gap-2 text-sm">
        <span class="pi pi-map-marker" style="font-size: 0.8rem"></span>
        <span>{{ location }}</span>
      </div>
    </div>

    <div class="mt-2">
      <div>{{ description }}</div>

      <div class="mt-2">
        <p class="font-medium">Key contributions:</p>
        <ul class="grid gap-2">
          <li v-for="item in activities" :key="item">&mdash; {{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>