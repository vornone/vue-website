<template lang="">
  <div class="flex flex-col gap-5 lg:p-10 p-4 w-full items-center">
    <h1 class="text-3xl text-center w-full" data-aos="fade-up">Our Core Team</h1>
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
            class="h-50 w-50 object-cover rounded-full border-primary border-1"
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
</template>
<script lang="ts">
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()
export default {
  methods: {
    goToService(name: string) {
      this.$router.push('services/' + name)
    },
  },
  data() {
    return {
      teamDetails: [
        {
          name: 'Jane Doe',
          title: 'CEO & Founder',
          url: 'construction-and-design',
          image: new URL('@/assets/team/jane_doe.png', import.meta.url).href,
          description: `As an investor and entrepreneur, Jane leads with a  strong foundation in business and commitment to sustainability, backed by a master's expertise in the field, while spearheading our company's mission as CEO & founder.`,
        },
        {
          name: 'John Doe',
          title: 'Business Development Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/john_doe.png', import.meta.url).href,
          description: `John Doe has a strong  diverse technical background. His experience working with NGO to provide technical and facilitation support to value chain key actors, coupled with a background in investment and trading, strategically propels our growth toward impactful outcomes.`,
        },
        {
          name: 'Michael Johnson',
          title: 'Trade Expert',
          url: 'construction-and-design',
          image: new URL('@/assets/team/michael_johnson.png', import.meta.url).href,
          description: `Our trade export and import expert seamlessly blends a strong communication background with branding expertise. Navigating the complexities of international trade, he ensures smooth transactions and fosters effective communication channels.`,
        },
        {
          name: 'David Anderson',
          title: 'Project Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/david_anderson.png', import.meta.url).href,
          description: `David Anderson is an accomplished architect with over a decade of experience in architectural design and business operations.`,
        },
        {
          name: 'Robert Williams',
          title: 'Operations Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/robert_williams.png', import.meta.url).href,
          description: `Robert Williams is an experienced operations manager with a proven track record in coordinating and managing complex projects.`,
        },
        {
          name: 'Emily Carter',
          title: 'Business Analyst',
          url: 'construction-and-design',
          image: new URL('@/assets/team/emily_carter.png', import.meta.url).href,
          description: `Emily Carter is a seasoned business analyst with a keen eye for detail and a passion for helping organizations make data-driven decisions.`,
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
