<template>
  <div class="flex flex-col w-full h-full gap-10 lg:p-10 p-5" data-aos="fade-in">
    <div class="flex w-full">
      <div
        class="hero w-full h-150 rounded-lg overflow-hidden shadow-md shadow-primary"
        style="
          background-image: url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400);
        "
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-full">
            <p class="mb-5 text-white">
              We prioritize conservation and sustainability in our sourcing strategies, choosing
              suppliers and products that meet strict environmental standards. This ensures your
              business helps support a healthier planet.
            </p>
            <!-- <button class="btn btn-primary text-base-100" @click="scrollToSection('designers')">
              Our Team
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-10 w-full items-center">
      <h1 class="text-3xl text-center w-full">What we offer</h1>
      <h2 class="text-center lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, ex nec vulputate
        porta, nisl dui mattis nisl, a imperdiet turpis ligula non nulla. Morbi congue magna libero,
        et finibus nisi lobortis in. Aenean maximus bibendum diam, nec pharetra risus molestie
        placerat. Mauris lobortis eleifend maximus.
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4"
        style="grid-auto-rows: 1fr"
      >
        <ServiceCard :serviceDetail="services" />
      </div>
      <h2 class="lg:text-3xl text-center lg:w-3/4 my-5 lg:my-10" data-aos="fade-up">
        Our dynamic pricing strategy is designed to seamlessly adapt to your unique budget and
        evolving logistics and supply chain needs, ensuring optimal efficiency and value.
      </h2>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import ServiceCard from '@/components/card/ServiceCard.vue'
import type { Service } from '@/types/service'
import { logisticsServices } from '@/data/services'
import { scrollToSection } from '@/functions/scrollToElement'
AOS.init()

export default defineComponent({
  methods: {
    scrollToSection(section: string) {
      scrollToSection(section)
    },
  },
  name: 'App',
  components: { ServiceCard },
  data() {
    return {
      services: logisticsServices as Service[],
    }
  },
})
</script>
<style lang=""></style>
