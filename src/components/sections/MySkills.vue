<script setup>
import { onMounted } from 'vue';

const skills = {
  languages: [
    'Javascript', 'Typescript', 'HTML', 'CSS', 'PHP'
  ],
  frameworks: [
    'Node.Js', 'Vue.Js', 'Nuxt.Js', 'Next.Js', 'Quasar', 'Astro.Js', 'Alpine.Js'
  ],
  libraries: [
    'React.Js', 'jQuery', 'Tailwind CSS','SCSS', 'Bootstrap'
  ],
  databases: [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  ],
  devTools: [
    'Git', 'Github', 'VS Code', 'WebStorm', 'Windows', 'Linux'
  ]
}

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        const icons = entry.target.querySelectorAll('.skill-icon');
        icons.forEach((icon, index) =>{
          icon.style.animationDelay = `${index * 0.2}s`;
          icon.classList.add('in-view')
        });

        observer.unobserve(entry.target)
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const boxes = document.querySelectorAll('.skill-box');
  boxes.forEach(box => observer.observe(box))
})
</script>

<template>
  <section id="skills" class="section mt-20">
    <SectionHeader text="Skills" />
    <div class="mt-4">
      <div>
        <h1 class="font-semibold text-xl">Languages</h1>
        <hr class="my-3">
      </div>

      <div class="skill-box">
        <SkillIcon v-for="lang in skills.languages" :key="lang" :icon="lang" :title="lang" />
      </div>
    </div>

    <div class="mt-9">
      <div>
        <h1 class="font-semibold text-xl">Frameworks</h1>
        <hr class="my-3">
      </div>

      <div class="skill-box">
        <SkillIcon v-for="f in skills.frameworks" :key="f" :icon="f" :title="f" />
      </div>
    </div>

    <div class="mt-9">
      <div>
        <h1 class="font-semibold text-xl">Libraries</h1>
        <hr class="my-3">
      </div>

      <div class="skill-box">
        <SkillIcon v-for="l in skills.libraries" :key="l" :icon="l" :title="l" />
      </div>
    </div>

    <div class="mt-9">
      <div>
        <h1 class="font-semibold text-xl">Databases</h1>
        <hr class="my-3">
      </div>

      <div class="skill-box">
        <SkillIcon v-for="d in skills.databases" :key="d" :icon="d" :title="d" />
      </div>
    </div>

    <div class="mt-9">
      <div>
        <h1 class="font-semibold text-xl">Dev Tools</h1>
        <hr class="my-3">
      </div>

      <div class="skill-box">
        <SkillIcon v-for="tool in skills.devTools" :key="tool" :icon="tool" :title="tool" />
      </div>
    </div>
  </section>
</template>

<style>
.skill-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.5rem;
  opacity: 0;
  transition: all 0.6s ease-in;
}

.skill-box.in-view {
  @apply opacity-100
}
</style>