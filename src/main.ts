import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from '@/functions/setLanguage'
import Lenis from 'lenis'

const app = createApp(App)

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
  infinite: false,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Make Lenis available globally
app.config.globalProperties.$lenis = lenis

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
