<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from '@/composables/useTheme';
import { navLinks } from '@/data/navs';

const router = useRouter();
const { toggle, isDark } = useTheme();

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const navigateTo = (href: string) => {
  closeMobileMenu();
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  } else {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
};

const goHome = () => {
  closeMobileMenu();
  router.push('/');
};
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click.prevent="goHome">
        Shaun<span>.dev</span>
      </a>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click.prevent="navigateTo(link.href)">{{ link.label }}</a>
        </li>
      </ul>

      <div class="nav-end">
        <button
          class="theme-toggle"
          @click="toggle"
          aria-label="切换主题"
        >
          {{ isDark() ? '☀️' : '🌙' }}
        </button>

        <button
          class="hamburger"
          :class="{ open: mobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="mobile-drawer" :class="{ open: mobileMenuOpen }">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click.prevent="navigateTo(link.href)"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>
