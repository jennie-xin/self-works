<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '@/data/projects';
import ImageLightbox from './ImageLightbox.vue';

const route = useRoute();
const router = useRouter();

const goBackToProjects = () => {
  router.push('/').then(() => {
    setTimeout(() => {
      const el = document.querySelector('#projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  });
};

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});

const lightboxSrc = ref('');
const lightboxVisible = ref(false);

const openLightbox = (src: string) => {
  lightboxSrc.value = src;
  lightboxVisible.value = true;
};

const closeLightbox = () => {
  lightboxVisible.value = false;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && lightboxVisible.value) {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div v-if="project" class="detail-page">
    <div class="detail-hero">
      <img :src="project.image" :alt="project.title" class="detail-cover" />
      <div class="detail-hero-overlay">
        <h1 class="detail-title">{{ project.title }}</h1>
        <div class="detail-tags">
          <span v-for="(tag, i) in project.tags" :key="i" class="detail-tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <div class="container detail-body">
      <section class="detail-section">
        <h2 class="detail-heading">项目简介</h2>
        <p class="detail-desc">{{ project.fullDescription || project.description }}</p>
      </section>

      <section v-if="project.gallery?.length" class="detail-section">
        <h2 class="detail-heading">图片画廊</h2>
        <div class="gallery-grid">
          <div
            v-for="(item, index) in project.gallery"
            :key="index"
            class="gallery-item"
            @click="openLightbox(item.src)"
          >
            <img :src="item.src" :alt="item.alt" loading="lazy" />
            <div class="gallery-overlay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section v-if="project.video" class="detail-section">
        <h2 class="detail-heading">演示视频</h2>
        <div class="video-wrapper">
          <video controls :poster="project.video.poster" preload="metadata">
            <source :src="project.video.src" type="video/mp4" />
            您的浏览器不支持视频播放
          </video>
        </div>
      </section>

      <section v-if="project.techStack?.length" class="detail-section">
        <h2 class="detail-heading">技术栈</h2>
        <div class="tech-list">
          <div v-for="(tech, index) in project.techStack" :key="index" class="tech-card">
            <span class="tech-name">{{ tech.name }}</span>
            <span class="tech-desc">{{ tech.desc }}</span>
          </div>
        </div>
      </section>

      <section class="detail-section">
        <h2 class="detail-heading">相关链接</h2>
        <div class="detail-links">
          <a
            v-for="(link, index) in project.links"
            :key="index"
            :href="link.href"
            class="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
          <button class="btn btn-primary" @click="goBackToProjects">返回项目列表</button>
        </div>
      </section>
    </div>

    <ImageLightbox
      :src="lightboxSrc"
      :visible="lightboxVisible"
      @close="closeLightbox"
    />
  </div>

  <div v-else class="detail-not-found">
    <div class="container">
      <h2>项目未找到</h2>
      <p>抱歉，您访问的项目不存在。</p>
      <button class="btn btn-primary" @click="router.push('/')">返回首页</button>
    </div>
  </div>
</template>
