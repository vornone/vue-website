<template>
  <div class="flex flex-col w-full h-full gap-10 lg:p-10 p-4" data-aos="fade-in">
    <div class="flex w-full">
      <div
        class="hero w-full h-150 rounded-lg overflow-hidden shadow-md shadow-primary"
        style="
          background-image: url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2400);
        "
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-full">
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
    <div class="flex flex-col gap-10 w-full">
      <h1 class="text-3xl text-center w-full">What we offer</h1>
      <h2 class="text- text-center w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, ex nec vulputate
        porta, nisl dui mattis nisl, a imperdiet turpis ligula non nulla. Morbi congue magna libero,
        et finibus nisi lobortis in. Aenean maximus bibendum diam, nec pharetra risus molestie
        placerat. Mauris lobortis eleifend maximus.
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style="grid-auto-rows: 1fr">
        <ServiceCard :serviceDetail="services" />
      </div>
      <div class="divider"></div>
      <h1 class="text-3xl text-center w-full" id="designers" data-aos="fade-up">Our Designers</h1>
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
      </ul>
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
            'We have directly proposal masterplan project for our client. As our expertise aligns with our clients’ needs for flexibility of design, scalability and accuracy of cost estimation, and in-depth knowledge of real estate development trends.',
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet luctus magna, porta dictum enim dapibus et. Aliquam volutpat iaculis porttitor. Aenean quis rhoncus nunc. Nullam vitae urna arcu. Mauris sapien nisi, hendrerit eget dignissim sed, pretium nec ligula.',
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
