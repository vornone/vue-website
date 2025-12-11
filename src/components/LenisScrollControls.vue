<template>
  <div class="flex gap-4">
    <!-- Scroll to Top Button -->
    <button
      @click="scrollToTop"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      ↑ Scroll to Top
    </button>

    <!-- Scroll to Element Button -->
    <button
      @click="scrollToElement"
      class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
    >
      ↓ Scroll to Section
    </button>

    <!-- Smooth Scroll Speed Control -->
    <div class="flex items-center gap-2">
      <label for="speed" class="text-sm font-medium">Speed:</label>
      <input
        id="speed"
        type="range"
        min="0.5"
        max="3"
        step="0.1"
        :value="scrollSpeed"
        @change="updateScrollSpeed"
        class="w-32"
      />
      <span class="text-sm">{{ scrollSpeed.toFixed(1) }}x</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import type Lenis from 'lenis'

const lenis = inject<Lenis>('lenis')
const scrollSpeed = ref(1.2)

const scrollToTop = () => {
  lenis?.scrollTo(0, { duration: 2 })
}

const scrollToElement = () => {
  const element = document.getElementById('target-section')
  if (element) {
    lenis?.scrollTo(element, { duration: 2 })
  }
}

const updateScrollSpeed = (event: Event) => {
  const target = event.target as HTMLInputElement
  scrollSpeed.value = parseFloat(target.value)

  if (lenis) {
    // Re-initialize Lenis with new duration
    const newDuration = 2.4 / parseFloat(target.value)
    // You can store this in a store or update it as needed
  }
}
</script>
