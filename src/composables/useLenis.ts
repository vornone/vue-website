import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis: Lenis | null = null

export function useLenis() {
  onMounted(() => {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      const raf = (time: number) => {
        lenis?.lenis?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  })

  onUnmounted(() => {
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })

  return {
    scrollTo: (target: string | HTMLElement | number, options?: any) => {
      lenis?.scrollTo(target, options)
    },
    scrollToTop: () => {
      lenis?.scrollTo(0)
    },
  }
}
