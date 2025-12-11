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
      subsidiaries: [] as import('@/data/company').Subsidiary[],
      teamDetails: [] as import('@/data/company').TeamMember[],
    }
  },
  created() {
    import('@/data/company').then((m) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.subsidiaries = m.subsidiaries as unknown as typeof m.subsidiaries
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.teamDetails = m.teamDetails as unknown as typeof m.teamDetails
    })
  },
}
</script>
<style lang=""></style>
