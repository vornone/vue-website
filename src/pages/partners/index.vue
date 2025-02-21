<template>
  <div class="flex flex-col gap-4 lg:p-10 p-4">
    <li className="p-4 pb-2 text-sm opacity-60 tracking-wide">Our Valued Partners</li>
    <ul class="list bg-base-100 rounded-box shadow-md shadow-lg lg:p-10 p-4 shadow-base-300">
      <li
        v-for="partner in partnerDetail"
        :key="partner.name"
        class="list-row animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <div>
          <img
            class="size-10 rounded-box bg-white border-1"
            :src="partner.image"
            :alt="partner.name"
          />
        </div>
        <div>
          <div class="text-xl font-semibold uppercase">{{ partner.name }}</div>
          <div class="text-md opacity-60">{{ partner.type }}</div>
        </div>
        <div class="list-col-wrap text-md w-full">
          <p>{{ partner.description }}</p>
          <a class="link link-primary" :href="partner.website" target="_blank">
            Visit {{ partner.name }} Website
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()

export default {
  data() {
    return {
      partnerDetail: [
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
    }
  },
}
</script>

<style scoped></style>
