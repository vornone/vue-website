<template>
  <div class="flex flex-col gap-5 lg:p-10 p-4 items-center">
    <h1 data-aos="fade-up" class="lg:text-lg text-center lg:w-1/2">
      We're committed to excellence across a variety of domains. Our services are designed to meet
      the diverse needs of our clients, ensuring quality, efficiency, and innovation. Click on any
      of the images below to learn more about our specific offerings and how we can assist in
      achieving your objectives.
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4" data-aos="fade-up">
      <div
        v-for="(service, index) in serviceDetail"
        :key="service.name"
        class="card bg-base-100 w-full shadow-sm shadow-primary outline-primary lg:p-4 p-2 hover:shadow-lg hover:outline-1 transition-all duration-100 ease-in-out overflow-hidden hover:cursor-pointer box-border outline-offset-0"
        :class="{ 'shadow-primary': true }"
      >
        <figure>
          <img :src="service.image" :alt="service.name" class="w-full h-50 object-cover" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ service.name }}
          </h2>
          <p class="opacity-60">
            {{ service.description }}
          </p>
          <div class="card-actions justify-end">
            <div class="btn btn-primary text-base-100" @click="goToService(service.url)">
              Go to service
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'
import { serviceCategories } from '@/data/services/serviceCategories'

export default {
  mounted() {
    AOS.init()
  },
  methods: {
    goToService(name) {
      this.$router.push('services/' + name)
    },
  },
  data() {
    return {
      serviceDetail: serviceCategories,
    }
  },
}
</script>
