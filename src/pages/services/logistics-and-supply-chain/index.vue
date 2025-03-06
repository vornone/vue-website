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
      <!-- <h2 class="text-center lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, ex nec vulputate
        porta, nisl dui mattis nisl, a imperdiet turpis ligula non nulla. Morbi congue magna libero,
        et finibus nisi lobortis in. Aenean maximus bibendum diam, nec pharetra risus molestie
        placerat. Mauris lobortis eleifend maximus.
      </h2> -->
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
      subsidiaries: [
        {
          name: 'AO Architects',
          type: 'Architectural Design Firm',
          image: new URL('@/assets/logos/ao_logo.png', import.meta.url).href,
          website: 'https://aoarchitectsdesign.com/',
          description: `We specialize in architecture and interior design that merges aesthetic appeal with
                  sustainable functionality. Our team works globally, delivering projects that meet high
                  standards of practicality and cost-efficiency. From master planning to advanced 3D
                  visualization, we ensure each design reflects our distinctive Cambodian style and aligns
                  with client visions.`,
        },
        {
          name: 'Keha Home',
          type: 'Interior Decor Design Studio',
          image: new URL('@/assets/logos/keha_logo.png', import.meta.url).href,
          website: 'https://aoarchitectsdesign.com/',
          description: `Specializing in contemporary aesthetics, Keha Home offers uniquely designed furniture and art pieces that blend form and function. Our high-quality, innovative designs cater to art lovers and decorators, enhancing any space with elegance and modern charm.`,
        },
        {
          name: 'Umbrella Development',
          type: 'Construction Firm',
          image: new URL('@/assets/logos/umbrella_development_logo.png', import.meta.url).href,
          website: 'https://umbrelladevelopment.com/',
          description: `Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.`,
        },
        {
          name: 'The Umbrella Cafe and Resort',
          type: 'Cafe and Resort',
          image: new URL('@/assets/logos/umbrella_development_logo.png', import.meta.url).href,
          website: 'https://umbrelladevelopment.com/',
          description: `Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.`,
        },
      ],
      services: [
        {
          name: 'Customized Solutions',
          description: `We provide customized solutions to match your business's unique needs. Our team collaborates with you closely, whether you're importing or exporting, to achieve your goals accurately.`,
          image:
            'https://images.unsplash.com/photo-1601897690942-bcacbad33e55?auto=format&fit=crop&w=800',
          url: 'https://example.com/service1',
          tags: ['Solution'],
        },
        {
          name: 'Global Network, Local Expertise',
          description:
            'We use our worldwide network to deliver goods quickly and efficiently. Our local knowledge helps us smoothly handle trade regulations, offering you a straightforward experience.',
          image:
            'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800',
          url: 'https://example.com/service1',
          tags: ['Networking', 'Solution'],
        },
        {
          name: 'Transparent Pricing',
          description:
            'Our pricing is clear and fair, with a transparent approach that avoids hidden fees, guaranteeing you get great value. Our competitive prices match the high-quality, sustainable products we provide.',
          image:
            'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800',
          url: 'https://example.com/service1',
          tags: ['Solution'],
        },
        // Add more services as needed
      ] as Service[], // Explicitly type the array
    }
  },
})
</script>
<style lang=""></style>
