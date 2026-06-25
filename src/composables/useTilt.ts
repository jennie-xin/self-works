import { ref } from 'vue'

interface TiltOptions {
  max?: number
  scale?: number
  speed?: number
}

export function useTilt(elOrOptions?: HTMLElement | TiltOptions, opts?: TiltOptions): any {
  if (elOrOptions instanceof HTMLElement) {
    return bindTilt(elOrOptions, opts || {})
  }
  return reactiveTilt(elOrOptions || {})
}

function bindTilt(el: HTMLElement, options: TiltOptions) {
  const { max = 15, scale = 1.02, speed = 400 } = options
  el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`

  function onMove(e: MouseEvent) {
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -max
    const rotateY = (x - 0.5) * max
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    el.style.transition = `transform ${speed * 0.25}ms ease`
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  function onLeave() {
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`
  }

  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)
  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}

function reactiveTilt(options: TiltOptions) {
  const { max = 15, scale = 1.02, speed = 400 } = options
  const tiltStyle = ref<Record<string, string>>({})

  function onMouseMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -max
    const rotateY = (x - 0.5) * max
    tiltStyle.value = {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: `transform ${speed * 0.25}ms ease`,
    }
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  function onMouseLeave() {
    tiltStyle.value = {
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
      transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`,
    }
  }

  return { tiltStyle, onMouseMove, onMouseLeave }
}
