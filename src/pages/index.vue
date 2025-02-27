<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import ServiceCard from '@/components/card/ServiceCard.vue'
import type { Service } from '@/types/service'
import { scrollToSection } from '@/functions/scrollToElement'
AOS.init()

export default defineComponent({
  methods: {
    scrollToSection(section: string) {
      scrollToSection(section)
    },
    goToUrl(name: string) {
      window.location.href = `/${name}`
    },
  },
  name: 'App',
  components: { ServiceCard },
})
</script>
<template>
  <div class="flex flex-col w-full h-full lg:gap-10 items-center" data-aos="fade-in">
    <div
      class="flex flex-col w-full items-center lg:h-150 h-full justify-center gap-5 px-3 lg:px-0"
    >
      <h2 class="text-center lg:w-1/2 w-3/4 text-sm">
        Presented by Green Route Cambodia Enterprise Co Ltd
      </h2>
      <h1 class="lg:text-6xl text-4xl text-center w-full font-bold text-primary">
        Strategic Planning & <br />Development Services
      </h1>
      <h2 class="text-center lg:w-1/2 text-sm">Sustainable Trade Solutions</h2>
      <button
        class="btn btn-soft btn-primary border-primary border-1"
        v-on:click="goToUrl('services')"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<style lang=""></style>
