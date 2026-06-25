import Lenis from 'lenis'
import gsap from 'gsap'
import { onMounted, onUnmounted } from 'vue'

let lenis: Lenis | null = null

export function useLenis() {
  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    lenis?.destroy()
    lenis = null
  })

  return { lenis }
}
