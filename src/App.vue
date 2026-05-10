<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import TweaksPanel from '@/components/TweaksPanel.vue';
</script>

<template>
  <div class="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />
    <TweaksPanel />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
