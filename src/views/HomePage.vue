<script setup lang="ts">
import { onMounted } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
  });

  const nav = document.querySelector('.navbar');

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 100 && nav) {
        (nav as HTMLElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else if (nav) {
        (nav as HTMLElement).style.boxShadow = 'none';
      }
    },
    { passive: true }
  );
});
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>
