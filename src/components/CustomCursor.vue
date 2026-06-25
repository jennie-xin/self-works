<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useMouse } from '@/composables/useMouse'

const { mouseX, mouseY, smoothX, smoothY, isTouch } = useMouse()
const isHover = ref(false)
let rafId: number | null = null
const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

function tick() {
  if (dot.value) {
    dot.value.style.transform = `translate(${mouseX.value}px, ${mouseY.value}px)`
  }
  if (ring.value) {
    ring.value.style.transform = `translate(${smoothX.value}px, ${smoothY.value}px) scale(${isHover.value ? 1.6 : 1})`
  }
  rafId = requestAnimationFrame(tick)
}

function onOver(e: Event) {
  const t = e.target as HTMLElement
  if (t.closest('a, button, [role="button"], .project-card, input, textarea')) {
    isHover.value = true
  }
}

function onOut() { isHover.value = false }

onMounted(() => {
  if (isTouch.value) return
  tick()
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  document.removeEventListener('mouseover', onOver)
  document.removeEventListener('mouseout', onOut)
})
</script>

<template>
  <template v-if="!isTouch">
    <div ref="dot" class="cursor-dot" />
    <div ref="ring" class="cursor-ring" />
  </template>
</template>

<style scoped>
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: var(--text-1);
}

.cursor-ring {
  width: 32px;
  height: 32px;
  margin: -16px 0 0 -16px;
  border-radius: 50%;
  border: 1.5px solid var(--text-2);
  opacity: 0.5;
  transition: transform 0.15s ease, opacity 0.2s;
}

@media (max-width: 768px), (pointer: coarse) {
  .cursor-dot, .cursor-ring { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .cursor-dot, .cursor-ring { display: none; }
}
</style>
