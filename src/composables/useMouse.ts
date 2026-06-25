import { ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const smoothX = ref(0)
const smoothY = ref(0)
const normalizedX = ref(0)
const normalizedY = ref(0)
const isTouch = ref(false)
const isIdle = ref(false)

let rafId: number | null = null
let idleTimer: ReturnType<typeof setTimeout> | null = null
let initialized = false

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor
}

function tick() {
  smoothX.value = lerp(smoothX.value, mouseX.value, 0.08)
  smoothY.value = lerp(smoothY.value, mouseY.value, 0.08)
  rafId = requestAnimationFrame(tick)
}

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  normalizedX.value = (e.clientX / window.innerWidth) * 2 - 1
  normalizedY.value = (e.clientY / window.innerHeight) * 2 - 1
  isIdle.value = false

  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(() => { isIdle.value = true }, 2000)
}

function onTouchStart() {
  isTouch.value = true
  if (rafId) cancelAnimationFrame(rafId)
  rafId = null
}

function init() {
  if (initialized) return
  initialized = true

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('touchstart', onTouchStart, { once: true })
  tick()
}

export function useMouse() {
  init()
  return {
    mouseX,
    mouseY,
    smoothX,
    smoothY,
    normalizedX,
    normalizedY,
    isTouch,
    isIdle,
  }
}
