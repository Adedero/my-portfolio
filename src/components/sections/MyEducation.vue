<script setup>
import futo from '@/assets/images/futo-logo.jpg';
const education = [
  {
    id: 1,
    initials: 'FUTO',
    fullName: 'Federal University of Technology, Owerri',
    duration: '2018 - 2024',
    degree: 'B.Tech., Computer Science',
    location: 'Imo, Nigeria',
    schoolLogo: futo
  }
]
</script>

<template>
  <section id="education" class="mt-20">
    <SectionHeader text="Education" />

    <div class="mt-4 grid gap-2">
      <div v-for="item, index in education" :key="item.id">
        <VEducation
          :initials="item.initials"
          :full-name="item.fullName"
          :duration="item.duration"
          :location="item.location"
          :degree="item.degree"
          :schoolLogo="item.schoolLogo" />
       

        <hr v-if="index !== (education.length - 1)" class="my-4">
      </div>
    </div>
  </section>
</template>