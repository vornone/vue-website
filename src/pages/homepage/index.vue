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
            <button class="btn btn-primary text-base-100" @click="scrollToSection('designers')">
              Our Team
            </button>
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
      <!-- <div class="divider"></div>
      <h1 class="text-3xl text-center w-full" id="designers" data-aos="fade-up">Our Developers</h1>
      <h2 data-aos="fade-up" class="text- text-center w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, ex nec vulputate
        porta, nisl dui mattis nisl, a imperdiet turpis ligula non nulla. Morbi congue magna libero,
        et finibus nisi lobortis in. Aenean maximus bibendum diam, nec pharetra risus molestie
        placerat. Mauris lobortis eleifend maximus.
      </h2>
      <ul class="list bg-base-100 rounded-box shadow-md shadow-primary" data-aos="fade-up">
        <li
          v-for="subsidiary in subsidiaries"
          :key="subsidiary.name"
          class="list-row animate__animated animate__fadeIn"
        >
          <div>
            <img
              class="size-10 rounded-box bg-white border-1"
              :src="subsidiary.image"
              :alt="subsidiary.name"
            />
          </div>
          <div>
            <div class="text-lg font-semibold uppercase">{{ subsidiary.name }}</div>
            <div class="text-sm opacity-60">{{ subsidiary.type }}</div>
          </div>
          <div class="list-col-wrap text-md w-full">
            <p>{{ subsidiary.description }}</p>
            <a class="link link-primary" :href="subsidiary.website" target="_blank">
              Visit {{ subsidiary.name }} Website
            </a>
          </div>
        </li>
      </ul> -->
      <h2 class="lg:text-3xl text-center w-full my-5 lg:my-10" data-aos="fade-up">
        We offer a flexible pricing strategy designed to fit your specific budget and IT needs.
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
import { scrollToSection } from '@/functions/scrollToElement'
import { homepageSubsidiaries, homepageServices } from '@/data/homepage'
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
      subsidiaries: homepageSubsidiaries,
      services: homepageServices as Service[],
    }
  },
})
</script>
<style lang=""></style>
