np<script setup>
import { onMounted } from 'vue';
import ofriend from '@/assets/images/ofriend.png';
import ofriendWaitlist from '@/assets/images/ofriend-waitlist.png';
import portfolio from '@/assets/images/portfolio.png';
import jesusLabs from '@/assets/images/jesus-labs.png';
import solarCare from '@/assets/images/solar-care.png';
import soltracker from '@/assets/images/soltracker.png';
import cscPortal from '@/assets/images/csc-portal.png';
import twentiesConnect from '@/assets/images/twenties-connect.png';

const projects = [
  {
    id: 1,
    title: 'Twenties Connect',
    year: 2025,
    tools: ['HTML', 'CSS', 'Tailwind CSS', 'Javascript'],
    imageUrl: twentiesConnect,
    demoUrl: 'https://twenties-connect.vercel.app',
    githubUrl: 'https://github.com/Adedero/twenties-connect',
    isPrivate: false,
    description: 'The website was built to publicize the upcoming Twenties Connect Youth Event which is scheduled to hold sometime in 2025. Built with an array of simple tools, the website features a colorful, but not overwhelming design that is meant to attract and grab one\'s attention.'
  },
  {
    id: 2,
    title: 'Ofriend Edu',
    year: 2024,
    tools: ['Tailwind CSS', 'Javascript', 'Vue.Js', 'React.Js', 'Nuxt.Js', 'Node.Js', 'Express.Js', 'MongoDB', 'PostgreSQL', 'Sequelize'],
    imageUrl: ofriend,
    demoUrl: 'https://ofriend.vercel.app/onboarding/signup',
    githubUrl: 'https://github.com/Adedero/ofriend-client',
    isPrivate: false,
    description: 'I developed the Ofriend Educational Module, a comprehensive learning platform that integrates a social media and isPrivate chat system for enhanced student interaction and collaboration. The platform also includes an extensive eLibrary, providing easy access to academic resources. Designed for scalability, security, and user engagement, this project highlights my ability to lead and execute complex, multi-feature platforms that serve educational institutions with seamless performance and user-friendly interfaces.'
  },
  {
    id: 3,
    title: 'Ofriend Waitlist',
    year: 2024,
    tools: ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'Node.Js', 'Express.Js', 'EJS', 'SQLite', 'Sequelize'],
    imageUrl: ofriendWaitlist,
    demoUrl: 'https://ofriend-waitlist-75a3.onrender.com',
    githubUrl: '',
    isPrivate: true,
    description: 'This waitlist boasts a simple yet stylish design. I designed and built it to be SEO friendly, so most of its content is server-side generated (SSG), making use of EJS: a templating engine for Node.Js. Also, the webiste uses a simple SQLite database which handles the backend data and the persistence of cookie sessions to track vistors.'
  },
  {
    id: 4,
    title: 'Student Result Portal',
    year: 2023,
    tools: ['Tailwind CSS', 'Javascript', 'Vue.Js', 'Node.Js', 'Express.Js', 'MongoDB'],
    imageUrl: cscPortal,
    demoUrl: 'https://futo-csc-portal.vercel.app',
    githubUrl: 'https://github.com/Adedero/futo-csc-department-portal',
    isPrivate: false,
    description: 'This result portal was created for the Department of Computer Science, Federal University of Technology, Owerri as one of the projects I undertook during my final year as an undergaduate. It is a proprietary web app with accounts for students, lecturers and an admin panel. Results can be entered or uploaded by lecturers and viewd by the students. The app also provides a way to manage student activities within the department .'
  },
  {
    id: 5,
    title: 'My Portfolio',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Javascript'],
    imageUrl: portfolio,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    isPrivate: false,
    description: 'Built using Tailwind CSS and Vue, my personal portfolio showcases my development skills and projects in a modern, responsive design. It highlights my expertise in creating intuitive, fast-loading, and aesthetically pleasing websites while maintaining clean and modular code. The portfolio serves as both a personal brand and a testament to my full-stack development capabilities.'
  },
  {
    id: 6,
    title: 'Jesus Labs',
    year: 2024,
    tools: ['HTML', 'CSS', 'Javascript'],
    imageUrl: jesusLabs,
    demoUrl: 'https://jesus-labs.vercel.app',
    githubUrl: 'https://github.com/Adedero/jesus_labs',
    isPrivate: false,
    description: 'I contributed to the development of the JesusLabs NFT platform, which enables users to mint, buy, and sell NFTs. The platform was designed to offer a seamless experience with blockchain integration, ensuring secure transactions and digital ownership. My work focused on optimizing the user interface to ensure scalability and high performance, bringing digital assets to a broader audience.'
  },
  {
    id: 7,
    title: 'SolarCare',
    year: 2024,
    tools: ['Tailwind CSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: solarCare,
    demoUrl: 'https://solarcare.vercel.app/',
    githubUrl: 'https://github.com/Adedero/solar-panel-diagnosis-system',
    isPrivate: false,
    description: 'I created SolarCare as an undergraduate project. It is a self-diagnosing system for solar panels which helps users find and fix problems with their solar panels.'
  },
  {
    id: 8,
    title: 'SolTracker',
    year: 2024,
    tools: ['Tailwind CSS', 'SCSS', 'Vue.Js', 'Express.Js', 'Node.Js', 'MongoDB'],
    imageUrl: soltracker,
    demoUrl: 'https://soltracker-futo.vercel.app/',
    githubUrl: 'https://github.com/Adedero/soltracker',
    isPrivate: false,
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
  <section id="projects" class="section mt-20">
    <SectionHeader text="Projects" />

    <div class="mt-4">
      <div class="grid gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>