<script setup>
import { onMounted } from 'vue';

const links = [
  { title: 'Home', href: "home" },
  { title: 'About', href: "about-me" },
  { title: 'Skills', href: "skills" },
  { title: 'Projects', href: "projects" },
  { title: 'Experience', href: "experience" },
  { title: 'Education', href: 'education' }
]

const activateLink = (links, link) => {
  links.forEach(activeLink => activeLink.classList.remove('active'));
  link.classList.add('active');
}

onMounted(() => {
  const links = document.querySelectorAll('.nav');
  //links.forEach(link => link.onclick = () => activateLink(links, link));

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.dataset.link === entry.target.id) {
            activateLink(links, link);
          }
        })
      } else {
        //
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section));
});
</script>

<template>
  <nav class="fixed z-10 top-1/2 right-5 -translate-y-1/2 hidden lg:block">
    <div class="grid">
      <a v-for="link, index in links" :key="link.title" :data-link="link.href" :href="`#${link.href}`" class="nav">
        <div class="link">
          <span class="transition">{{ link.title }}</span>
          <div
            class="nav-div w-fit p-1 border-2 rounded-full aspect-square flex items-center justify-center">
            <div class="nav-dot w-2.5 aspect-square rounded-full "></div>
          </div>
        </div>

        <div v-if="index !== links.length - 1" class="line h-8 w-[2px] ml-auto -translate-x-2.5"></div>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  .link {
    @apply flex items-center justify-end gap-1 text-slate-400 dark:text-slate-600 transition;
    
    .nav-div {
      @apply border-slate-300 dark:border-slate-700 transition;
  
      .nav-dot {
        @apply bg-slate-300 dark:bg-slate-700 transition
      }
    }
  }

  .line {
    @apply bg-slate-300 dark:bg-slate-700 transition
  }

  &:hover {
    .link {
      @apply text-slate-500 dark:text-slate-400;

      span {
        @apply -translate-x-2
      }
  
      .nav-div {
        @apply border-slate-500 dark:border-slate-400;
  
        .nav-dot {
          @apply bg-slate-500 dark:bg-slate-400
        }
      }
    }
  }
}

.nav.active {
  .link {
    @apply text-rose-500 dark:text-white;
    .nav-div {
      @apply border-rose-500 dark:border-slate-200;
  
      .nav-dot {
        @apply bg-rose-500 dark:bg-rose-500
      }
    }
  }

  .line {
    @apply bg-rose-500 dark:bg-slate-200
  }
}
</style>