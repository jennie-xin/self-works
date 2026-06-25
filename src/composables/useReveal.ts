import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface RevealOptions {
  selector: string
  trigger: string
  from?: gsap.TweenVars
  start?: string
  stagger?: number
}

export function useReveal(configs: RevealOptions[]) {
  const triggers: ScrollTrigger[] = []

  onMounted(() => {
    configs.forEach(({ selector, trigger, from, start, stagger }) => {
      const tween = gsap.from(selector, {
        scrollTrigger: {
          trigger,
          start: start || 'top 80%',
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: stagger || 0,
        ...from,
      })

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger)
      }
    })
  })

  onUnmounted(() => {
    triggers.forEach(t => t.kill())
  })
}
