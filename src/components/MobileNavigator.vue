<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const nav = ref(null);
const visible = ref(false);

const links = [
  { title: 'Home', icon: 'home', href: "home" },
  { title: 'About', icon: 'about', href: "about-me" },
  { title: 'Skills', icon: 'skills', href: "skills" },
  { title: 'Projects', icon: 'projects', href: "projects" },
  { title: 'Experience', icon: 'experience', href: "experience" },
  { title: 'Education', icon: 'education', href: 'education' }
]

const activateLink = (links, link) => {
  links.forEach(activeLink => activeLink.classList.remove('active'));
  link.classList.add('active');
}

const hide = () => visible.value = false;
//const show = () => visible.value = true;
const toggle = () => visible.value = !visible.value;

onClickOutside(nav, () => hide());
const onresize = () => hide();

onMounted(() => {
  window.addEventListener("resize", onresize);

  const links = document.querySelectorAll('.mobile-nav');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.dataset.link === entry.target.id) {
            activateLink(links, link);
          }
        })
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section));
});

onUnmounted(() => window.removeEventListener("resize", onresize));
</script>

<template>
  <nav ref="nav" class="fixed z-10 bottom-10 right-5 flex flex-col items-center gap-3 lg:hidden">
    <div class="menu" :class="{ 'visible': visible }">
      <div class="w-full h-full p-2 grid gap-2">
        <a v-for="link in links" :key="link.title" :data-link="link.href" :href="`#${link.href}`" class="mobile-nav">
          <NavIcon :icon="link.icon" />
          <span>{{ link.title }}</span>
        </a>
      </div>
    </div>

    <div>
      <button type="button"
        @click="toggle"
        class="menu-btn "
        :class="{ 'active': visible }">
        <span style="font-size: 1.5rem" class="pi pi-plus"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.mobile-nav {
 @apply flex flex-col items-center justify-center text-xs font-semibold border rounded-lg opacity-80 dark:opacity-50 hover:opacity-100 dark:hover:opacity-100 border-slate-800 dark:border-white border-opacity-20 bg-white bg-opacity-70 hover:bg-opacity-90 dark:bg-opacity-10 backdrop-blur-md transition-all
}

.mobile-nav.active {
  @apply opacity-100 text-rose-500 bg-opacity-100 
}

.menu {
  @apply transition-all duration-300 overflow-hidden bg-slate-950 dark:bg-white bg-opacity-50 dark:bg-opacity-10 backdrop-blur-[4px] w-24 h-0 rounded-2xl
}
.menu.visible {
  @apply h-[26rem] dark:border dark:border-slate-500
}

.menu-btn {
  @apply bg-rose-500 hover:bg-rose-600 transition-all text-white w-12 grid place-content-center aspect-square rounded-full
}

.menu-btn.active {
  @apply rotate-[45deg]
}

</style>