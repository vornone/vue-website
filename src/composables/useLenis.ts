import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis: Lenis | null = null

export function useLenis() {
  onMounted(() => {
    if (!lenis) {
      lenis = new Lenis()

      const raf = (time: number) => {
        lenis?.raf(time)
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
    scrollTo: (target: string | HTMLElement | number, options?: unknown) => {
      lenis?.scrollTo(target, options as unknown as never)
    },
    scrollToTop: () => {
      lenis?.scrollTo(0)
    },
  }
}
