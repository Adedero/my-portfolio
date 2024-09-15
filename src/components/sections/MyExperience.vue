<script setup>
import mountainCrest from '@/assets/images/mountain-crest.jpg';
import ofriend from '@/assets/images/ofriend-logo.png';
import avatar from '@/assets/images/avatar.png';

const experiences = [
  {
    id: 1,
    company: 'Ofriend',
    duration: '2024 - Present',
    jobTitle: 'Chief Technology Officer (CTO)',
    location: 'Lagos, Nigeria',
    companyLogo: ofriend,
    description: "At Ofriend, I spearheaded the development of the Ofriend Educational Module, an all-in-one platform designed to enhance the learning experience. Additionally, I managed all technology-related activities, ensuring seamless integration of various systems, optimizing performance, and guiding the company's technical strategy to align with business goals.",
    activities: [
      'Architected and deployed the entire platform from the ground up.',
      'Led cross-functional teams in product development, technology integration, and operations.',
      'Ensured high system performance, security, and scalability, keeping the platform ready for future growth.',
      'Oversaw the technical direction and managed all infrastructure and development efforts to meet business objectives.'
    ],
  },
  {
    id: 2,
    company: "Mountain Crest High School",
    duration: "2023 - 2024",
    jobTitle: "ICT Staff",
    location: "Imo, Nigeria",
    companyLogo: mountainCrest,
    description: "As an ICT Staff member at Mountain Crest High School, I was responsible for teaching web development to students, providing them with essential skills in building and maintaining websites. My role focused on empowering students with a strong foundation in HTML, CSS, JavaScript, and basic backend technologies, preparing them for future careers in tech.",
    activities: [
      'Delivered engaging and practical web development lessons to high school students.',
      'Created hands-on projects that allowed students to build functional websites from scratch.',
      'Guided students in understanding both front-end and back-end development concepts.',
      'Provided mentorship and support to encourage students\' growth and interest in technology.',
    ],
  },
  {
    id: 3,
    company: 'Freelancer',
    duration: '2020 - Present',
    jobTitle: 'Full Stack Developer',
    location: 'Abuja, Nigeria',
    description: 'I started out as a freelance, taking on various web development projects for clients with whom I collaborated to design and develop custom web applications that meet their unique business needs. I manage the entire development lifecycle, from initial concept and architecture to deployment and optimization, ensuring seamless integration between the front-end and back-end.',
    activities: [
      'Worked with various clients to design and develop web applications, including e-commerce platforms, content management systems, and social media platforms.',
      'Built responsive, user-friendly front-end interfaces using frameworks like Vue.js and React.',
      'Developed and optimized robust back - end systems using Node.js, Express, and more.',
      'Designed and implemented databases using MySQL, PostgreSQL, and MongoDB, ensuring data integrity and scalability.',
      'Provided technical consultation to help clients achieve their business goals with efficient and scalable solutions.',
      'Managed projects independently, ensuring timely delivery and high-quality work.',
      'Collaborated with team members to address any technical challenges and ensure the smooth progression of the projects.',
      'Provided regular updates and support to clients, addressing their concerns and providing guidance on best practices.'
    ],
    companyLogo: avatar
  }
]
</script>

<template>
  <section id="experience" class="mt-20">
    <SectionHeader text="Experience" />

    <div class="mt-4 grid gap-2">
      <div v-for="item, index in experiences" :key="item.id">
        <VExperience
          :company="item.company"
          :duration="item.duration"
          :job-title="item.jobTitle"
          :location="item.location"
          :description="item.description"
          :activities="item.activities"
          :company-logo="item.companyLogo" />
        
          <hr v-if="index !== (experiences.length - 1)" class="my-4">
      </div>
    </div>
  </section>
</template>