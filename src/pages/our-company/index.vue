<template lang="html">
  <div class="flex flex-col gap-5 lg:p-10 p-4 w-full items-center">
    <li class="lg:text-xl text-left lg:w-3/4 md:w-7/8 w-full" data-aos="fade-up">Our Philosophy</li>
    <ul
      class="list bg-base-100 rounded-box shadow-sm shadow-primary lg:w-3/4 md:w-7/8"
      data-aos="fade-up"
    >
      <li class="list-row">
        <div></div>
        <div>
          <div class="text-lg font-semibold text-primary">Our Value</div>
          <div class="text-sm opacity-60">
            GRS is committed to driving innovation, fostering collaboration, and supporting
            sustainable development. We are a platform that connects businesses, government bodies,
            and communities, helping them grow and thrive through effective strategies and insights.
          </div>
        </div>
      </li>
      <li class="list-row">
        <div></div>
        <div>
          <div class="text-lg font-semibold text-primary">Our Misssion</div>
          <div class="text-sm opacity-60">
            Our mission is to enhance market efficiency and sustainability by providing clear,
            actionable support to businesses and policymakers. We focus on creating streamlined
            value chains, encouraging sustainable practices, and boosting investment to strengthen
            the economy.
          </div>
        </div>
      </li>
    </ul>
    <li class="lg:text-xl text-left lg:w-3/4 w-full md:w-7/8" data-aos="fade-up">
      Construction and Design Group
    </li>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4 md:w-7/8"
      style="grid-auto-rows: 1fr"
      data-aos="fade-up"
    >
      <div
        class="card bg-base-100 w-full shadow-md shadow-primary hover:cursor-pointer hover:shadow-lg transition-shadow duration-100 ease-in-out justify-center align-center pt-5"
        v-for="(member, index) in subsidiaries"
        :key="member.name"
        v-on:click="goToUrl(member.website)"
      >
        <figure>
          <img
            :src="member.image"
            class="lg:w-40 lg:h-40 h-40 object-cover object-center rounded-2xl border-primary border-1 bg-white"
          />
        </figure>
        <div
          class="card-body lg:p-8 p-5 w-full text-center flex justify-center items-center lg:items-left lg:text-left"
        >
          <h2 class="card-title text-primary lg:w-full">
            {{ member.name }}
          </h2>
          <p class="text-sm opacity-60 lg:w-full">
            {{ member.type }}
          </p>
          <p class="w-full h-full">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
    <li class="lg:text-xl text-left lg:w-3/4 w-full md:w-7/8" data-aos="fade-up">Our Core Team</li>
    <div class="flex flex-col gap-5 w-full items-center">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4"
        style="grid-auto-rows: 1fr"
        data-aos="fade-up"
      >
        <div
          class="card bg-base-100 w-full shadow-sm shadow-primary lg:p-4 p-2"
          v-for="(member, index) in teamDetails"
          :key="member.name"
        >
          <figure>
            <img
              :src="member.image"
              class="h-50 w-50 object-cover rounded-full border-primary border-1 object-top"
            />
          </figure>
          <div class="card-body text-center items-center">
            <h2 class="card-title text-primary">
              {{ member.name }}
            </h2>
            <p class="text-sm opacity-60">
              {{ member.title }}
            </p>
            <p>
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()
export default {
  methods: {
    goToUrl(name: string) {
      window.location.href = name
    },
  },
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
      teamDetails: [
        {
          name: 'Jane Doe',
          title: 'CEO & Founder',
          url: 'construction-and-design',
          image: new URL('@/assets/team/jane_doe.jpg', import.meta.url).href,
          description: `As an investor and entrepreneur, Jane leads with a  strong foundation in business and commitment to sustainability, backed by a master's expertise in the field, while spearheading our company's mission as CEO & founder.`,
        },
        {
          name: 'John Doe',
          title: 'Business Development Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/john_doe.jpg', import.meta.url).href,
          description: `John Doe has a strong  diverse technical background. His experience working with NGO to provide technical and facilitation support to value chain key actors, coupled with a background in investment and trading, strategically propels our growth toward impactful outcomes.`,
        },
        {
          name: 'Michael Johnson',
          title: 'Trade Expert',
          url: 'construction-and-design',
          image: new URL('@/assets/team/michael_johnson.jpg', import.meta.url).href,
          description: `Our trade export and import expert seamlessly blends a strong communication background with branding expertise. Navigating the complexities of international trade, he ensures smooth transactions and fosters effective communication channels.`,
        },
        {
          name: 'David Anderson',
          title: 'Project Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/david_anderson.jpg', import.meta.url).href,
          description: `David Anderson is an a CC omplished architect with over a decade of experience in architectural design and business operations.`,
        },
        {
          name: 'Robert Williams',
          title: 'Operations Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/robert_williams.jpg', import.meta.url).href,
          description: `Robert Williams is an experienced operations manager with a proven track record in coordinating and managing complex projects.`,
        },
        {
          name: 'Emily Carter',
          title: 'Business Analyst',
          url: 'construction-and-design',
          image: new URL('@/assets/team/emily_carter.jpg', import.meta.url).href,
          description: `Emily Carter is a seasoned business analyst with a keen eye for detail and a passion for helping organizations make data-driven decisions.`,
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
