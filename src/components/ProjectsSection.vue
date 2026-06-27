<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'
import { useTilt } from '@/composables/useTilt'

const router = useRouter()
const cardRefs = ref<HTMLElement[]>([])
let cleanups: (() => void)[] = []

const goToDetail = (id: string) => {
  router.push(`/projects/${id}`)
}

const setCardRef = (el: any, index: number) => {
  if (el) cardRefs.value[index] = el
}

onMounted(() => {
  cardRefs.value.forEach(card => {
    cleanups.push(useTilt(card, { max: 8, scale: 1.02 }))
  })

  gsap.from('.projects-header', {
    y: 30, opacity: 0, duration: 0.6,
    scrollTrigger: { trigger: '.projects-header', start: 'top 85%' }
  })

  gsap.from(cardRefs.value, {
    y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
    scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
    onComplete: () => {
      cardRefs.value.forEach(card => {
        gsap.set(card, { clearProps: 'transform,opacity' })
      })
    }
  })
})

onUnmounted(() => {
  cleanups.forEach(fn => fn())
  ScrollTrigger.getAll().forEach(st => st.kill())
})
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="projects-header">
        <div>
          <p class="section-label">作品</p>
          <h2 class="section-title">精选项目</h2>
        </div>
      </div>
      <div class="section-divider"></div>

      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          :ref="(el) => setCardRef(el, index)"
          class="project-card glow-card"
          @click="goToDetail(project.id)"
        >
          <div class="project-cover">
            <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span
                v-for="(tag, idx) in project.tags"
                :key="idx"
                class="project-tag"
              >
                {{ tag }}
              </span>
            </div>
            <div class="project-links">
              <a
                v-for="(link, idx) in project.links"
                :key="idx"
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
