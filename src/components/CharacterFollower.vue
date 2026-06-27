<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useMouse } from '@/composables/useMouse'

const { smoothX, smoothY, mouseX, mouseY, isTouch, isIdle } = useMouse()

const el = ref<HTMLElement | null>(null)
let rafId: number | null = null

const charX = ref(0)
const charY = ref(0)

function tick() {
  charX.value += (smoothX.value - charX.value) * 0.04
  charY.value += (smoothY.value - charY.value) * 0.04

  const dx = mouseX.value - charX.value
  const dy = mouseY.value - charY.value
  const dist = Math.sqrt(dx * dx + dy * dy) || 1
  const maxEye = 4
  const eyeX = (dx / dist) * maxEye
  const eyeY = (dy / dist) * maxEye * 0.6

  const headRotate = (dx / window.innerWidth) * 15

  if (el.value) {
    el.value.style.setProperty('--cx', `${charX.value - 50}px`)
    el.value.style.setProperty('--cy', `${charY.value - 60}px`)
    el.value.style.setProperty('--eye-x', `${eyeX}px`)
    el.value.style.setProperty('--eye-y', `${eyeY}px`)
    el.value.style.setProperty('--head-rotate', `${headRotate}deg`)
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (isTouch.value) return
  charX.value = window.innerWidth * 0.8
  charY.value = window.innerHeight * 0.6
  tick()
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    v-if="!isTouch"
    ref="el"
    class="character-follower"
    :class="{ idle: isIdle }"
  >
    <!-- Developer character SVG -->
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body / Torso -->
      <g class="char-body">
        <!-- Hoodie body -->
        <path d="M30 65 Q50 60 70 65 L75 110 Q50 115 25 110 Z" fill="#3b4a6b" stroke="#2d3a54" stroke-width="1"/>
        <!-- Hoodie collar -->
        <path d="M38 65 Q50 58 62 65" fill="none" stroke="#4a5d80" stroke-width="2" stroke-linecap="round"/>
        <!-- Left arm -->
        <path d="M30 70 Q20 85 28 100" fill="none" stroke="#3b4a6b" stroke-width="8" stroke-linecap="round"/>
        <!-- Right arm -->
        <path d="M70 70 Q80 85 72 100" fill="none" stroke="#3b4a6b" stroke-width="8" stroke-linecap="round"/>
        <!-- Laptop -->
        <rect x="28" y="95" width="44" height="3" rx="1.5" fill="#a0aec0"/>
        <rect x="32" y="85" width="36" height="12" rx="2" fill="#1a202c" stroke="#4a5568" stroke-width="0.5"/>
        <!-- Screen glow -->
        <rect x="34" y="87" width="32" height="8" rx="1" fill="#63b3ed" opacity="0.3"/>
        <!-- Code lines on screen -->
        <line x1="36" y1="89" x2="48" y2="89" stroke="#68d391" stroke-width="0.8" opacity="0.8"/>
        <line x1="36" y1="91" x2="56" y2="91" stroke="#fc8181" stroke-width="0.8" opacity="0.6"/>
        <line x1="36" y1="93" x2="52" y2="93" stroke="#90cdf4" stroke-width="0.8" opacity="0.7"/>
      </g>

      <!-- Head group (rotates) -->
      <g class="char-head" style="transform-origin: 50px 50px; transform: rotate(var(--head-rotate, 0deg))">
        <!-- Hair back -->
        <ellipse cx="50" cy="38" rx="20" ry="22" fill="#1a202c"/>
        <!-- Face -->
        <ellipse cx="50" cy="42" rx="16" ry="18" fill="#fbd38d"/>
        <!-- Hair front -->
        <path d="M34 35 Q40 25 50 24 Q60 25 66 35 Q63 30 50 28 Q37 30 34 35Z" fill="#1a202c"/>
        <!-- Glasses frame -->
        <rect x="38" y="38" width="10" height="8" rx="3" fill="none" stroke="#4a5568" stroke-width="1.2"/>
        <rect x="52" y="38" width="10" height="8" rx="3" fill="none" stroke="#4a5568" stroke-width="1.2"/>
        <line x1="48" y1="42" x2="52" y2="42" stroke="#4a5568" stroke-width="1"/>
        <!-- Eyes (move with mouse) -->
        <g class="char-eyes" style="transform: translate(var(--eye-x, 0px), var(--eye-y, 0px))">
          <circle cx="43" cy="42" r="2" fill="#1a202c"/>
          <circle cx="57" cy="42" r="2" fill="#1a202c"/>
          <!-- Eye highlights -->
          <circle cx="44" cy="41" r="0.7" fill="white" opacity="0.8"/>
          <circle cx="58" cy="41" r="0.7" fill="white" opacity="0.8"/>
        </g>
        <!-- Mouth -->
        <path d="M45 52 Q50 54 55 52" fill="none" stroke="#c53030" stroke-width="1.2" stroke-linecap="round"/>
        <!-- Ears -->
        <ellipse cx="34" cy="42" rx="3" ry="4" fill="#fbd38d"/>
        <ellipse cx="66" cy="42" rx="3" ry="4" fill="#fbd38d"/>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.character-follower {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 50;
  will-change: transform;
  transform: translate(var(--cx, 0px), var(--cy, 0px));
  transition: opacity 0.3s;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}

.character-follower.idle {
  animation: char-idle-bounce 3s ease-in-out infinite;
}

@keyframes char-idle-bounce {
  0%, 100% { transform: translate(var(--cx), var(--cy)) translateY(0); }
  50% { transform: translate(var(--cx), var(--cy)) translateY(-6px); }
}

@media (max-width: 768px) {
  .character-follower { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .character-follower { display: none; }
}
</style>
