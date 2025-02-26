<template>
  <div class="flex flex-col gap-5 lg:p-10 p-4">
    <h1 data-aos="fade-up" class="lg:text-lg text-center w-full">
      We're committed to excellence across a variety of domains. Our services are designed to meet
      the diverse needs of our clients, ensuring quality, efficiency, and innovation. Click on any
      of the images below to learn more about our specific offerings and how we can assist in
      achieving your objectives.
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="(service, index) in serviceDetail"
        :key="service.name"
        class="card bg-base-100 w-full shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
        :class="{ 'shadow-primary': true }"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        :data-aos-delay="index * 200"
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
      serviceDetail: [
        {
          name: 'Design and Construction',
          type: 'Architectural Design Firm',
          url: 'construction-and-design',
          image:
            'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800',
          website: 'https://aoarchitectsdesign.com/',
          description: `We specialize in architecture and interior design that merges aesthetic appeal with
                  sustainable functionality.`,
        },
        {
          name: 'Information Technology',
          type: 'Interior Decor Design Studio',
          url: 'information-technology',
          image:
            'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800',
          website: 'https://aoarchitectsdesign.com/',
          description: `Empowering Innovation with Expert IT Consulting and Comprehensive Training Services.`,
        },
        {
          name: 'Logistics and Supply Chain',
          type: 'Cafe and Resort',
          url: 'logistics-and-supply-chain',
          image:
            'https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?auto=format&fit=crop&w=800',
          website: 'https://umbrelladevelopment.com/',
          description: `We provide customized solutions to match your business's unique needs.`,
        },
      ],
    }
  },
}
</script>
