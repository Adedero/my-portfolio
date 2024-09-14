<script setup>
import { onMounted } from 'vue';
import ofriend from '@/assets/images/ofriend.png'
import portfolio from '@/assets/images/portfolio.png';
import jesusLabs from '@/assets/images/jesus-labs.png';
import solarCare from '@/assets/images/solar-care.png';
import soltracker from '@/assets/images/soltracker.png';

const projects = [
  {
    id: 1,
    title: 'Ofriend Edu',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Javascript', 'Nuxt.Js', 'Node.Js', 'Express.Js', 'MongoDB', 'PostgreSQL', 'Sequelize'],
    imageUrl: ofriend,
    demoUrl: 'https://ofriend.io',
    githubUrl: 'https://github.com/Adedero/ofriend-client',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam et arcu scelerisque faucibus. Sed vel ex quis neque consequat efficitur.'
  },
  {
    id: 2,
    title: 'My Portfolio',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Javascript'],
    imageUrl: portfolio,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam et arcu scelerisque faucibus. Sed vel ex quis neque consequat efficitur.'
  },
  {
    id: 3,
    title: 'JesusLabs',
    year: 2024,
    tools: ['HTML', 'CSS', 'Javascript'],
    imageUrl: jesusLabs,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam et arcu scelerisque faucibus. Sed vel ex quis neque consequat efficitur.'
  },
  {
    id: 4,
    title: 'SolarCare',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: solarCare,
    demoUrl: 'https://solarcare.vercel.app/',
    githubUrl: 'https://github.com/Adedero/solar-panel-diagnosis-system',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam et arcu scelerisque faucibus. Sed vel ex quis neque consequat efficitur.'
  },
  {
    id: 5,
    title: 'SolTracker',
    year: 2024,
    tools: ['Tailwind CSS', 'SCSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: soltracker,
    demoUrl: 'https://soltracker-futo.vercel.app/',
    githubUrl: 'https://github.com/Adedero/soltracker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam et arcu scelerisque faucibus. Sed vel ex quis neque consequat efficitur.'
  }
]

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target)
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => observer.observe(card));
});
</script>

<template>
  <section id="projects" class="mt-20">
    <SectionHeader text="Projects" />

    <div class="mt-4">
      <div class="grid gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project-title="project.title"
          :year="project.year"
          :tools="project.tools"
          :imageUrl="project.imageUrl"
          :demo-url="project.demoUrl"
          :github-url="project.githubUrl"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>