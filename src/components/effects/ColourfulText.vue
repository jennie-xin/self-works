<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{ text: string }>()

const colors = [
  '#667eea', '#764ba2', '#f093fb', '#4fd1c5',
  '#fc8181', '#f6e05e', '#68d391', '#63b3ed',
]

const tick = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const chars = computed(() =>
  props.text.split('').map((char, i) => ({
    char: char === ' ' ? ' ' : char,
    color: colors[(i + tick.value) % colors.length],
  }))
)

onMounted(() => {
  interval = setInterval(() => { tick.value++ }, 400)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <span class="colourful-text">
    <span
      v-for="(c, i) in chars"
      :key="i"
      class="colourful-char"
      :style="{ color: c.color, animationDelay: `${i * 0.05}s` }"
    >{{ c.char }}</span>
  </span>
</template>

<style scoped>
.colourful-text {
  display: inline;
}
.colourful-char {
  display: inline-block;
  transition: color 0.5s ease;
  animation: char-pulse 2.5s ease-in-out infinite;
}
@keyframes char-pulse {
  0%, 100% { filter: brightness(1); transform: scale(1); }
  50% { filter: brightness(1.2); transform: scale(1.03); }
}
</style>
