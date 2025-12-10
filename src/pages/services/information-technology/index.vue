<template>
  <div class="flex flex-col w-full h-full gap-10 lg:p-10 p-5" data-aos="fade-in">
    <div class="flex w-full">
      <div
        class="hero w-full h-150 rounded-lg overflow-hidden shadow-md shadow-primary"
        style="
          background-image: url(https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?auto=format&fit=crop&w=2400);
        "
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-full flex flex-col items-center justify-center w-1/2">
            <p class="mb-5 text-white">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt volutpat nisl
              a blandit. Cras id diam maximus, consectetur arcu eget, venenatis nisl. Nunc
              malesuada, enim et mattis vestibulum, justo diam iaculis sem, sed scelerisque ipsum ex
              non leo. Sed luctus nulla quis est fringilla maximus.
            </p>
            <button class="btn btn-primary text-base-100" @click="scrollToSection('designers')">
              Our Developers
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
      services: [
        {
          name: 'SharePoint Solutions',
          description:
            'Expertise in SharePoint deployment, custom development, and workflow optimization.',
          image:
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
          url: 'https://example.com/service1',
          tags: ['IT', 'Solution'],
        },
        {
          name: 'Application Development',
          description:
            'Custom applications designed to meet unique business needs, enhancing functionality and user engagement.',
          image:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'IT', 'Programming'],
        },
        {
          name: 'Network Security',
          description:
            'Robust security measures to protect network integrity and prevent data breaches.',
          image:
            'https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Programming', 'Network', 'Security'],
        },
        {
          name: 'Data Analytics and BI',
          description:
            'Transforming raw data into actionable insights using advanced analytics and business intelligence tools.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Solution'],
        },
        {
          name: 'Cloud Services',
          description: 'Assistance with cloud migration, management, and optimization.',
          image:
            'https://images.unsplash.com/photo-1605907126332-53b63528ce99?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Security', 'Network', 'Programming'],
        },
        {
          name: 'Cybersecurity Enhancements',
          description:
            'Comprehensive security assessments and solutions to safeguard digital assets.',
          image:
            'https://images.unsplash.com/photo-1590065707046-4fde65275b2e?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Security', 'Programming', 'Network'],
        },
        {
          name: 'Systems Integration',
          description:
            'Seamless integration of various IT systems and software to improve workflow and efficiency.',
          image:
            'https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Engineering', 'Network', 'Security'],
        },
        {
          name: 'Managed IT Services',
          description:
            'Full-service IT management, including monitoring, support, and maintenance.',
          image:
            'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['IT', 'Programming', 'Security'],
        },
        // Add more services as needed
      ] as Service[], // Explicitly type the array
    }
  },
})
</script>
<style lang=""></style>
