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
    description: 'I developed the Ofriend Educational Module, a comprehensive learning platform that integrates a social media and private chat system for enhanced student interaction and collaboration. The platform also includes an extensive eLibrary, providing easy access to academic resources. Designed for scalability, security, and user engagement, this project highlights my ability to lead and execute complex, multi-feature platforms that serve educational institutions with seamless performance and user-friendly interfaces.'
  },
  {
    id: 2,
    title: 'My Portfolio',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Javascript'],
    imageUrl: portfolio,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    description: 'Built using Tailwind CSS and Vue, my personal portfolio showcases my development skills and projects in a modern, responsive design. It highlights my expertise in creating intuitive, fast-loading, and aesthetically pleasing websites while maintaining clean and modular code. The portfolio serves as both a personal brand and a testament to my full-stack development capabilities.'
  },
  {
    id: 3,
    title: 'Jesus Labs',
    year: 2024,
    tools: ['HTML', 'CSS', 'Javascript'],
    imageUrl: jesusLabs,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    description: 'I contributed to the development of the JesusLabs NFT platform, which enables users to mint, buy, and sell NFTs. The platform was designed to offer a seamless experience with blockchain integration, ensuring secure transactions and digital ownership. My work focused on optimizing the user interface to ensure scalability and high performance, bringing digital assets to a broader audience.'
  },
  {
    id: 4,
    title: 'SolarCare',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: solarCare,
    demoUrl: 'https://solarcare.vercel.app/',
    githubUrl: 'https://github.com/Adedero/solar-panel-diagnosis-system',
    description: 'I created SolarCare as an undergraduate project. It is a self-diagnosing system for solar panels which helps users find and fix problems with their solar panels.'
  },
  {
    id: 5,
    title: 'SolTracker',
    year: 2024,
    tools: ['Tailwind CSS', 'SCSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: soltracker,
    demoUrl: 'https://soltracker-futo.vercel.app/',
    githubUrl: 'https://github.com/Adedero/soltracker',
    description: 'SolTracker continuously monitors solar panel performance, providing real-time data and alerts to optimize energy output. Designed for ease of use and reliability, SolarCare helps maintain peak solar panel efficiency while reducing the need for manual inspections.'
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