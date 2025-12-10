<template>
  <div class="flex flex-col gap-4 lg:p-10 p-4 items-center">
    <li class="p-4 pb-2 text-lg opacity-60 tracking-wide lg:w-3/4 md:w-full">
      Our Valued Partners
    </li>
    <ul
      class="list bg-base-100 rounded-box shadow-md lg:p-10 p-4 shadow-primary lg:w-3/4"
      data-aos="fade-up"
    >
      <li
        v-for="partner in partnerDetail"
        :key="partner.name"
        class="list-row animate__animated animate__fadeIn"
      >
        <div>
          <img
            class="size-10 rounded-box bg-white border-1 object-cover"
            :src="partner.image"
            :alt="partner.name"
          />
        </div>
        <div>
          <div class="text-lg font-semibold uppercase">{{ partner.name }}</div>
          <div class="text-sm opacity-60">{{ partner.type }}</div>
        </div>
        <div class="list-col-wrap text-md w-full">
          <p>{{ partner.description }}</p>
          <a class="link link-primary" :href="partner.website" target="_blank">
            Visit {{ partner.name }} Website
          </a>
        </div>
      </li>
    </ul>
    <li class="p-4 pb-2 text-lg opacity-60 tracking-wide lg:w-3/4 md:w-full">
      Our Valued Subsidiaries
    </li>
    <ul
      class="list bg-base-100 rounded-box shadow-md lg:p-10 p-4 shadow-primary lg:w-3/4"
      data-aos="fade-up"
    >
      <li
        v-for="subsidiary in subsidiaries"
        :key="subsidiary.name"
        class="list-row animate__animated animate__fadeIn"
      >
        <div>
          <img
            class="size-10 rounded-box bg-white border-1 object-cover"
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
</template>
<script lang="ts">
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()

export default {
  data() {
    return {
      subsidiaries: [
        {
          name: '7Lines Development',
          type: 'Architectural Design Firm',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `We specialize in architecture and interior design that merges aesthetic appeal with
                  sustainable functionality. Our team works globally, delivering projects that meet high
                  standards of practicality and cost-efficiency. From master planning to advanced 3D
                  visualization, we ensure each design reflects our distinctive Mid-Century style and aligns
                  with client visions.`,
        },
        {
          name: 'Vase Home',
          type: 'Interior Decor Design Studio',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `Specializing in contemporary aesthetics, Vase Home offers uniquely designed furniture and art pieces that blend form and function. Our high-quality, innovative designs cater to art lovers and decorators, enhancing any space with elegance and modern charm.`,
        },
        {
          name: 'Sea-Shell Development',
          type: 'Construction Firm',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `Specializing in residential and commercial developments, we focus on sustainability and modern design to exceed market expectations. Our projects, from boreys to expansive real estate ventures, are crafted to foster thriving communities and reshape skylines.`,
        },
        {
          name: 'Sea-Shell  Resort',
          type: 'Cafe and Resort',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `The Sea-ShellCafé and Resort, stands as a tranquil retreat from city life, featuring a café, seating kiosks, and a distinctive tree bar set beside a picturesque pond and canal. This initiative is part of a larger scheme that seamlessly integrates architecture and interior design to foster a calming, natural ambiance. The master plan meticulously outlines the space's functional zones and landscaping, emphasizing spatial organization to optimize the visitor experience. Each aspect is designed with a commitment to high standards, practicality, and aesthetic appeal.`,
        },
      ],
      partnerDetail: [
        {
          name: 'INSTITUTE FOR RESEARCH AND RURAL DEVELOPMENT',
          type: 'Research Institute',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `Working with IRD amplifies our efforts in rural development and research. Their expertise in rural challenges and solutions supports our mission to deploy technology and data analytics for rural upliftment, enhancing our impact on these communities.`,
        },
        {
          name: 'Chamber of Commerce  ',
          type: 'Nonprofit organization',
          image: new URL('@/assets/logos/mock-logo.jpg', import.meta.url).href,
          website: '',
          description: `Their Mission is to empower the business community  by providing a robust platform for networking, advocacy, and professional growth.  CC is dedicated to fostering an inclusive environment where diverse talents converge to create innovative solutions and drive economic su CC ess. They aim to support every member in reaching their full potential through collaborative opportunities and strategic partnerships.`,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
