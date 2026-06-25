<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import TweaksPanel from '@/components/TweaksPanel.vue'
import CharacterFollower from '@/components/CharacterFollower.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import { useLenis } from '@/composables/useLenis'

useLenis()
</script>

<template>
  <div class="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="page-wipe" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />
    <TweaksPanel />
    <CharacterFollower />
    <CustomCursor />
  </div>
</template>

<style scoped>
.page-wipe-enter-active,
.page-wipe-leave-active {
  transition: clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}
.page-wipe-enter-from {
  clip-path: inset(0 0 100% 0);
  opacity: 0;
}
.page-wipe-enter-to,
.page-wipe-leave-from {
  clip-path: inset(0 0 0 0);
  opacity: 1;
}
.page-wipe-leave-to {
  clip-path: inset(100% 0 0 0);
  opacity: 0;
}
</style>
