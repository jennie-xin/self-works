<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { info } from '@/data/self'
import SpotlightGlow from '@/components/effects/SpotlightGlow.vue'
import ColourfulText from '@/components/effects/ColourfulText.vue'

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })
  tl.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
    .from('.hero-name', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-role-badge', { y: 24, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero-bio', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero-actions', { y: 16, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('.hero-avatar', { scale: 0.8, opacity: 0, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.5')
})
</script>

<template>
  <section id="hero" class="hero-section">
    <SpotlightGlow />
    <div class="container" style="position: relative; z-index: 2;">
      <div class="hero-grid">
        <div class="hero-content">
          <p class="hero-eyebrow">你好，我是</p>
          <h1 class="hero-name">
            <ColourfulText :text="info.name" />
          </h1>
          <div class="hero-role-badge" v-if="info.role">
            <span class="status-dot"></span>
            {{ info.role }}
          </div>
          <p class="hero-bio">
            {{ info.desc }}
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">查看项目</a>
          </div>
        </div>

        <div class="hero-avatar">
          <div class="avatar-ring"></div>
          <img class="avatar-img" src="../assets/author.jpg" alt="杨权">
        </div>
      </div>
    </div>
  </section>
</template>
