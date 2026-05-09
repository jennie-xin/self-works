<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '@/composables/useTheme';
import { navLinks } from '@/data/navs';

const { toggle, isDark } = useTheme();

const mobileMenuOpen = ref(false);



const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        Shaun<span>.dev</span>
      </a>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click="closeMobileMenu">{{ link.label }}</a>
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
        @click="closeMobileMenu"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>
