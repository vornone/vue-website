<template>
  <div class="flex flex-col w-full h-full gap-10 lg:p-10 p-4 items-center" data-aos="fade-in">
    <div class="flex w-full">
      <div
        class="hero w-full h-150 rounded-lg overflow-hidden shadow-md shadow-primary"
        style="
          background-image: url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2400);
        "
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-full lg:w-1/2">
            <p class="mb-5 text-white">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt volutpat nisl
              a blandit. Cras id diam maximus, consectetur arcu eget, venenatis nisl. Nunc
              malesuada, enim et mattis vestibulum, justo diam iaculis sem, sed scelerisque ipsum ex
              non leo. Sed luctus nulla quis est fringilla maximus.
            </p>
            <button class="btn btn-primary text-base-100" @click="scrollToSection('designers')">
              Our Designers
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-10 lg:w-3/4 items-center">
      <h1 class="text-3xl text-center w-full">What we offer</h1>
      <h2 class="text-center lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, ex nec vulputate
        porta, nisl dui mattis nisl, a imperdiet turpis ligula non nulla. Morbi congue magna libero,
        et finibus nisi lobortis in. Aenean maximus bibendum diam, nec pharetra risus molestie
        placerat. Mauris lobortis eleifend maximus.
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style="grid-auto-rows: 1fr">
        <ServiceCard :serviceDetail="services" />
      </div>
      <div class="divider"></div>
    </div>
    <h2 class="lg:text-3xl text-center w-full my-5 lg:my-10" data-aos="fade-up">
      Ensuring it fits your budget while meeting your specific construction and design requirements.
    </h2>
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
          name: 'Master Plan Design',
          description:
            'Our creative process encompasses multiple phases, combining space, geometry, and artistry. We aim to establish the needs and foundations necessary for creating a livable space using specific solutions and ingenuity.',
          image:
            'https://images.unsplash.com/photo-1524666037164-2f32a6c1dfea?auto=format&fit=crop&w=800',
          url: 'https://example.com/service1',
          tags: ['Design', 'Construction'],
        },
        {
          name: 'Architectural Design',
          description:
            'We have directly proposal masterplan project for our client. As our expertise aligns with our clients’ needs for flexibility of design, scalability and a CC uracy of cost estimation, and in-depth knowledge of real estate development trends.',
          image:
            'https://images.unsplash.com/photo-1614595737766-4d7e1fd1406f?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Construction'],
        },
        {
          name: 'Interior Design',
          description:
            'Our approach to refine material selection, up-to-date catalog and close engagement with local and international supplier help guide us and our client into a interior space that is full of unique features.',
          image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Construction'],
        },
        {
          name: '3D Visualization and Virtual Reality',
          description:
            'We help create visual images and vr representations of our architectural designs, which are crucial parts of our design process. These representations allow designer, contractor and clients to clearly see and understand a project before it is built.',
          image:
            'https://images.unsplash.com/photo-1617802690658-1173a812650d?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Construction'],
        },
        {
          name: '3d Animation',
          description:
            'We assist our clients in producing informative, educational, and insightful media. This content is designed to effectively engage and attract potential investors and customers, providing them with valuable information and understanding of our clients’ offerings and market position',
          image:
            'https://images.unsplash.com/photo-1616344787023-a1829b69beea?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Construction'],
        },
        {
          name: 'Interior Decor Fitting Out',
          description:
            'we specialize in transforming spaces with tailored design solutions. We offer high-quality materials, craftsmanship, and seamless installations, creating functional, aesthetic environments for residential, commercial, and office spaces.',
          image:
            'https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?auto=format&fit=crop&w=800',
          url: 'https://example.com/service2',
          tags: ['Design', 'Fitting Out', 'Construction'],
        },
        // Add more services as needed
      ] as Service[], // Explicitly type the array
    }
  },
})
</script>
<style lang=""></style>
