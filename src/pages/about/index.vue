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
<script>
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()
export default {
  methods: {
    goToService(name) {
      this.$router.push('services/' + name)
    },
  },
  data() {
    return {
      teamDetails: [
        {
          name: 'Nivicheta Chamreoun',
          title: 'CEO & Founder',
          url: 'construction-and-design',
          image: new URL('@/assets/team/nivicheta_chamreoun.png', import.meta.url).href,
          description: `As an investor and entrepreneur, Nivicheta leads with a  strong foundation in business and commitment to sustainability, backed by a master's expertise in the field, while spearheading our company's mission as CEO & founder.`,
        },
        {
          name: 'David Stevenson',
          title: 'Business Development Manager',
          url: 'construction-and-design',
          image: new URL('@/assets/team/david_stevenson.png', import.meta.url).href,
          description: `David has a strong  diverse technical background. His experience working with NGO to provide technical and facilitation support to value chain key actors, coupled with a background in investment and trading, strategically propels our growth toward impactful outcomes.`,
        },
        {
          name: 'Michael Smith',
          title: 'Trade Expert',
          url: 'construction-and-design',
          image: new URL('@/assets/team/michael_smith.png', import.meta.url).href,
          description: `Our trade export and import expert seamlessly blends a strong communication background with branding expertise. Navigating the complexities of international trade, he ensures smooth transactions and fosters effective communication channels.`,
        },
        {
          name: 'Pheaktravisal Vanna',
          title: 'The Umbrella, Project Owner',
          url: 'construction-and-design',
          image: new URL('', import.meta.url).href,
          description: `Pheaktravisal is an accomplished architect with over a decade of experience in architectural design and business operations.He excels in creating high-fidelity architectural project representations. As a member of the Business Network International Committee, he helps drive collaboration and strategic growth. He is now leading the investment on the new residential project, The Umbrella.`,
        },
        {
          name: 'Muniroth Nou',
          title: 'AO Architects, Principle Architect',
          url: 'construction-and-design',
          image: new URL('', import.meta.url).href,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, nunc in dignissim pulvinar, diam purus congue sem, et elementum tellus orci nec eros. Proin in eros efficitur, lacinia nisi sed, aliquam lorem. Nunc eu nisi congue, congue massa et, aliquet velit.`,
        },
        {
          name: 'Rachny Im',
          title: 'KehaHome, Co-Founder',
          url: 'construction-and-design',
          image: new URL('', import.meta.url).href,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, nunc in dignissim pulvinar, diam purus congue sem, et elementum tellus orci nec eros. Proin in eros efficitur, lacinia nisi sed, aliquam lorem. Nunc eu nisi congue, congue massa et, aliquet velit.`,
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
