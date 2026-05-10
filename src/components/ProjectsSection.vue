<script setup lang="ts">
import { useRouter } from 'vue-router';
import { projects } from '@/data/projects';

const router = useRouter();

const goToDetail = (id: string) => {
  router.push(`/projects/${id}`);
};
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="projects-header scroll-reveal">
        <div>
          <p class="section-label">作品</p>
          <h2 class="section-title">精选项目</h2>
        </div>
      </div>
      <div class="section-divider"></div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card scroll-reveal"
          @click="goToDetail(project.id)"
        >
          <div class="project-cover">
            <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
            <div class="cover-badge">{{ project.badge }}</div>
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                class="project-tag"
              >
                {{ tag }}
              </span>
            </div>
            <div class="project-links">
              <a
                v-for="(link, index) in project.links"
                :key="index"
                :href="link.href"
                class="project-link"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
