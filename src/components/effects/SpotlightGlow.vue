<script setup lang="ts">
import { computed } from 'vue'
import { useMouse } from '@/composables/useMouse'

const { mouseX, mouseY, isTouch } = useMouse()

const style = computed(() => ({
  background: `radial-gradient(600px circle at ${mouseX.value}px ${mouseY.value}px,
    rgba(99, 102, 241, 0.07) 0%,
    transparent 70%)`
}))
</script>

<template>
  <div
    v-if="!isTouch"
    class="spotlight-overlay"
    :style="style"
    aria-hidden="true"
  />
</template>

<style scoped>
.spotlight-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
</style>
