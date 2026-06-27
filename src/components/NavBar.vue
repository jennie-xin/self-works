<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { navLinks } from '@/data/navs'

const router = useRouter()
const { toggle, isDark } = useTheme()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const isDetailPage = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 100 }

const updateRoute = () => {
  isDetailPage.value = router.currentRoute.value.path.startsWith('/projects/')
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateRoute()
  router.afterEach(updateRoute)
})
onUnmounted(() => { window.removeEventListener('scroll', onScroll) })

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
      }, 500);
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

const goBackToProjects = () => {
  closeMobileMenu();
  navigateTo('#projects');
};
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click.prevent="goHome">
        ZhouXin<span>.dev</span>
      </a>

      <ul class="nav-links">
        <li v-if="isDetailPage">
          <a href="#projects" @click.prevent="goBackToProjects" class="nav-back-link">← 返回项目</a>
        </li>
        <template v-else>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click.prevent="navigateTo(link.href)">{{ link.label }}</a>
          </li>
        </template>
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
        v-if="isDetailPage"
        href="#projects"
        @click.prevent="goBackToProjects"
      >
        ← 返回项目
      </a>
      <template v-else>
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="navigateTo(link.href)"
        >
          {{ link.label }}
        </a>
      </template>
    </div>
  </nav>
</template>
