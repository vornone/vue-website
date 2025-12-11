<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import ServiceCard from '@/components/card/ServiceCard.vue'
import type { Service } from '@/types/service'
import { scrollToSection } from '@/functions/scrollToElement'
import Partners from '@/components/partners/Partners.vue'
import { indexServices, importDetails, exportDetails } from '@/data/indexPage'

AOS.init()

export default defineComponent({
  methods: {
    scrollToSection(section: string) {
      scrollToSection(section)
    },
    goToUrl(name: string) {
      window.location.href = `/${name}`
    },
  },
  name: 'App',
  components: { ServiceCard, Partners, Icon },
  data() {
    return {
      services: indexServices,
      importDetails: importDetails,
      exportDetails: exportDetails,
      navigationMenu: [
        { name: 'Home', section: 'home' },
        { name: 'Services', section: 'services' },
        { name: 'About', section: 'about' },
        { name: 'Contact', section: 'contact' },
      ],
    }
  },
})
</script>
<template>
  <div
    class="absolute lg:top-10 top-0 z-[-1] lg:h-screen min-h-200 w-full bg-no-repeat bg-center opacity-20 bg-contain bg-100"
    style="background-image: url('/kh.svg')"
  ></div>
  <div
    class="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(106,143,106,1)_0,rgba(106,143,106,0.2)_50%,rgba(0,163,255,0)_100%)] light:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(98,175,97,1)_0,rgba(106,143,106,0.2)_50%,rgba(0,163,255,0)_100%)]"
  ></div>
  <div class="flex flex-col items-center w-full h-full px-5 pb-20" data-aos="fade-in">
    <div
      class="flex flex-col items-center w-full lg:h-50dvh lg:h-170 h-150 lg:gap-10"
      data-aos="fade-in"
    >
      <div
        class="z-10 flex flex-col items-center justify-center w-full h-full gap-5 lg:h-170 lg:px-0"
      >
        <h2 class="w-3/4 text-center lg:w-1/2 lg:text-lg">
          Presented by Green Road Solution Enterprise Co Ltd
        </h2>
        <h1 class="w-full text-3xl font-bold text-center lg:text-7xl text-primary">
          Strategic Planning & <br />Development Services
        </h1>
        <h2 class="text-center lg:w-1/2 lg:text-lg">Sustainable Trade Solutions</h2>
        <button
          class="btn btn-soft btn-primary border-primary border-1 light:hover:text-white hover:shadow-xl shadow-primary"
          v-on:click="goToUrl('services')"
        >
          Learn More
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center w-full lg:w-3/4 lg:gap-25 gap-25">
      <div class="flex flex-col items-center w-full gap-10">
        <h1 class="text-xl font-bold">Trusted by top companies</h1>
        <transition
          enter-active-class="transition-opacity ease-in-out duration-1500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <Partners class="opacity-50" />
        </transition>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="w-full overflow-hidden rounded-lg shadow-md hero h-150 shadow-primary"
          style="
            background-image: url(https://images.unsplash.com/photo-1527908147823-068bba50c255?auto=format&fit=crop&w=2400);
          "
        >
          <div class="hero-overlay"></div>
          <div class="text-center hero-content text-neutral-content">
            <div class="flex flex-col items-center w-full">
              <h1 class="text-3xl font-bold text-white">DEFINING THE GLOBAL ECONOMY</h1>
              <p class="py-6 text-white lg:w-2/3">
                An interconnected system where sustainability, innovation, and ethical business
                practices drive long-term su CC ess. By promoting responsible trade, advanced
                technology, and data-driven solutions, we contribute to a more resilient and
                inclusive global marketplace that balances economic growth with environmental and
                social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full p-0" data-aos="fade-up">
        <div class="flex flex-col-reverse gap-10 p-0 lg:flex-row-reverse lg:gap-20">
          <img
            src="https://images.unsplash.com/photo-1589895257704-697b5d525c94?auto=format&fit=crop&w=800"
            loading="lazy"
            class="object-cover w-full rounded-lg shadow-md lg:w-1/2 h-50 lg:h-100 shadow-primary md:h-100"
          />
          <div class="w-full">
            <h1 class="text-2xl font-bold text-primary">
              Driving Sustainable Innovation Across Industries
            </h1>
            <p class="py-6">
              At Green Road Solution Enterprise, our mission is to lead by example in the global
              shift towards sustainability. With a foundation deeply rooted in conservation, we are
              dedicated to transforming the business landscape through environmentally responsible
              practices and ethical sourcing. Our commitment extends across various sectors,
              including export-import, logistics, IoT development and production, data analytics,
              and consulting solutions, showcasing our versatility and dedication to making a
              positive impact.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-5" data-aos="fade-up">
        <h1 class="text-2xl font-bold text-primary">Our Capabilities</h1>
        <p class="lg:w-2/3">
          Our capabilities include a global network for fast, efficient delivery and local expertise
          for smooth trade compliance. We offer customized import/export solutions, prioritize
          sustainable sourcing, and ensure transparent pricing with no hidden fees. Our competitive
          rates provide high-quality, eco-friendly products tailored to your business needs.
        </p>
        <div
          class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          style="grid-auto-rows: 1fr"
        >
          <div
            class="w-full shadow-sm card card-compact shadow-primary bg-base-100"
            v-for="service in services"
            :key="service.name"
          >
            <div class="card-body">
              <Icon :icon="service.icon" class="w-10 h-10 text-primary" />
              <h2 class="card-title">{{ service.name }}</h2>
              <p class="opacity-60">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col items-center w-full gap-5" data-aos="fade-in">
        <h1 class="text-xl font-bold text-center lg:text-3xl">
          At GRS we’re proud to oversee a diverse range of subsidiaries. Each one plays a crucial
          role in our mission to deliver exceptional value across different sectors.
        </h1>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col w-full gap-5" data-aos="fade-up">
        <h1 class="text-2xl font-bold text-primary">Universal Export and Import</h1>
        <p class="lg:w-2/3">
          Our mission is to continually grow our operations, providing an expanding range of
          solutions tailored to your needs. We strive to enhance our offerings, ensuring you have a
          CC ess to diverse and innovative options that support your business’s su CC ess.
        </p>
        <div
          class="flex flex-col items-center w-full gap-5 md:flex-row lg:flex-row"
          data-aos="fade-in"
        >
          <ul
            class="w-full shadow-sm list bg-base-100 rounded-box shadow-primary"
            data-aos="fade-up"
          >
            <li class="p-4 pb-2 tracking-wide text-md">What we Import to Cambodia</li>
            <li class="list-row" v-for="item in importDetails" :key="item.name">
              <div></div>
              <div>
                <div class="flex mb-2 text-lg font-semibold text-primary">
                  <div class="flex items-center gap-2">
                    <Icon :icon="item.icon" class="w-5 h-5" />{{ item.name }}
                  </div>
                </div>
                <div class="flex flex-col" v-for="list in item.importList" :key="list.name">
                  <p class="mb-1 text-sm opacity-60">{{ list.name }}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul
            class="w-full shadow-sm list bg-base-100 rounded-box shadow-primary"
            data-aos="fade-up"
          >
            <li class="p-4 pb-2 text-sm tracking-wide">What we export from Cambodia</li>
            <li class="list-row" v-for="item in exportDetails" :key="item.name">
              <div></div>
              <div>
                <div class="flex mb-2 text-lg font-semibold text-primary">
                  <div class="flex items-center gap-2">
                    <Icon :icon="item.icon" class="w-5 h-5" />{{ item.name }}
                  </div>
                </div>
                <div class="flex flex-col" v-for="list in item.importList" :key="list.name">
                  <p class="mb-1 text-sm opacity-60">{{ list.name }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full p-0" data-aos="fade-up">
          <div class="flex flex-col-reverse gap-10 p-0 lg:flex-row-reverse lg:gap-20">
            <img
              src="https://images.unsplash.com/photo-1644614827935-e54e9ba8f23a?auto=format&fit=crop&w=800"
              loading="lazy"
              class="object-cover w-full rounded-lg shadow-md lg:w-1/2 h-50 lg:h-100 shadow-primary md:h-100"
            />
            <div class="w-full">
              <h1 class="text-2xl font-bold text-primary">
                The Importance of Modern Khmer Antiquities
              </h1>
              <p class="py-6">
                The significance of modern Khmer antiquities lies in their role in preserving
                Cambodia’s cultural heritage, while addressing ethical concerns around sourcing
                actual antiquities. These modern recreations adhere to a nuanced understanding of
                the dos and don’ts in cultural representation, ensuring respect and a CC uracy.
                Technological advances and knowledge of historical craftsmanship enable precise
                reproductions without risking original artifacts or sites. This approach safeguards
                Cambodia’s historical legacy, allowing it to educate and inspire without
                compromising the integrity of its ancient heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="flex flex-col items-center w-full gap-5">
        <h1 class="font-bold text-center lg:text-4xl md:text-4xl">
          Green Road Solution Enterprise Co Ltd
        </h1>
        <div>
          <button
            class="btn btn-primary btn-soft border-1 border-primary hover:shadow-xl shadow-primary light:hover:text-white"
            v-on:click="goToUrl('contact')"
          >
            Connect with us <Icon icon="material-symbols:arrow-right-alt-rounded" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
