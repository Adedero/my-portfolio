<script setup>
import mountainCrest from '@/assets/images/mountain-crest.jpg';
import ofriend from '@/assets/images/ofriend-logo.png';
import avatar from '@/assets/images/avatar.png';

const experiences = [
  {
    id: 1,
    company: 'Ofriend',
    duration: '2024 - Present',
    jobTitle: 'Chief Technology Officer, CTO',
    location: 'Lagos, Nigeria',
    jobDescription: "Lorem Ipsum",
    companyLogo: ofriend
  },
  {
    id: 2,
    company: "Mountain Crest",
    duration: "2023 - 2024",
    jobTitle: "ICT Staff",
    location: "Imo, Nigeria",
    companyLogo: mountainCrest,
    jobDescription: "Lorem Ipsum"
  },
  {
    id: 3,
    company: 'Freelancer',
    duration: '2020 - Present',
    jobTitle: 'Full Stack Developer',
    location: 'Abuja, Nigeria',
    jobDescription: 'Lorem Ipsum',
    companyLogo: avatar
  }
]
</script>

<template>
  <section id="projects" class="mt-20">
    <SectionHeader text="Experience" />

    <div class="mt-4 grid gap-2">
      <div v-for="item, index in experiences" :key="item.id">
        <VExperience
          :company="item.company"
          :duration="item.duration"
          :job-title="item.jobTitle"
          :location="item.location"
          :job-description="item.jobDescription"
          :company-logo="item.companyLogo" />
        
          <hr v-if="index !== (experiences.length - 1)" class="my-4">
      </div>
    </div>
  </section>
</template>