<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Star {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  speed: number
}

const stars = ref<Star[]>([])
let nextId = 0
let rafId: number | null = null
let spawnTimer: ReturnType<typeof setTimeout> | null = null

function getRandomStart() {
  const side = Math.floor(Math.random() * 4)
  const w = window.innerWidth
  const h = window.innerHeight
  switch (side) {
    case 0: return { x: Math.random() * w, y: -20, angle: 60 + Math.random() * 60 }
    case 1: return { x: w + 20, y: Math.random() * h * 0.5, angle: 150 + Math.random() * 40 }
    case 2: return { x: Math.random() * w, y: h + 20, angle: 240 + Math.random() * 60 }
    default: return { x: -20, y: Math.random() * h * 0.5, angle: -30 + Math.random() * 60 }
  }
}

function spawn() {
  const s = getRandomStart()
  stars.value.push({
    id: nextId++,
    x: s.x,
    y: s.y,
    angle: s.angle,
    scale: 0.5 + Math.random() * 0.8,
    speed: 3 + Math.random() * 5,
  })
  spawnTimer = setTimeout(spawn, 600 + Math.random() * 2500)
}

function animate() {
  const w = window.innerWidth
  const h = window.innerHeight
  stars.value = stars.value
    .map(s => ({
      ...s,
      x: s.x + Math.cos(s.angle * Math.PI / 180) * s.speed,
      y: s.y + Math.sin(s.angle * Math.PI / 180) * s.speed,
    }))
    .filter(s => s.x > -100 && s.x < w + 100 && s.y > -100 && s.y < h + 100)
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  spawn()
  animate()
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (spawnTimer) clearTimeout(spawnTimer)
})
</script>

<template>
  <svg class="shooting-stars" aria-hidden="true">
    <defs>
      <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#667eea" stop-opacity="0" />
        <stop offset="100%" stop-color="#667eea" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect
      v-for="star in stars"
      :key="star.id"
      :width="24 * star.scale"
      height="1.5"
      fill="url(#star-grad)"
      :transform="`translate(${star.x}, ${star.y}) rotate(${star.angle})`"
    />
  </svg>
</template>

<style scoped>
.shooting-stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
</style>
