<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import ServiceCard from '@/components/card/ServiceCard.vue'
import type { Service } from '@/types/service'
import { scrollToSection } from '@/functions/scrollToElement'
import Partners from '@/components/partners/Partners.vue'
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
      services: [
        {
          icon: 'hugeicons:internet',
          name: 'Global Network, Local Expertise',
          image: 'construction-and-design',
          description:
            'We use our worldwide network to deliver goods quickly and efficiently. Our local knowledge helps us smoothly handle trade regulations, offering you a straightforward experience.',
          url: '/services/construction-and-design',
          tags: [],
        },
        {
          icon: 'hugeicons:book-02',
          name: 'Customized Solutions',
          image: 'information-technology',
          description:
            'We provide customized solutions to match your business’s unique needs. Our team collaborates with you closely, whether you’re importing or exporting, to achieve your goals accurately.',
          tags: [],
          url: '/services/information-technology',
        },
        {
          icon: 'hugeicons:leaf-01',
          name: 'Sustainable Sourcing',
          image: 'information-technology',
          description:
            'We prioritize conservation and sustainability in our sourcing strategies, choosing suppliers and products that meet strict environmental standards. This ensures your business helps support a healthier planet.',
          tags: [],
          url: '/services/information-technology',
        },
        {
          icon: 'hugeicons:save-money-dollar',
          name: 'Transparent Pricing',
          image: 'information-technology',
          description:
            'Our pricing is clear and fair, with a transparent approach that avoids hidden fees, guaranteeing you get great value. Our competitive prices match the high-quality, sustainable products we provide.',
          tags: [],
          url: '/services/information-technology',
        },
      ],
      importDetails: [
        {
          icon: 'hugeicons:delivery-box-01',
          name: 'Consumer Goods',
          description: '',
          importList: [
            {
              icon: 'hugeicons:vegetarian-food',
              name: 'Process Foods',
            },
            {
              icon: 'hugeicons:meat',
              name: 'Electronics',
            },
            {
              name: 'Vehicles and Parts',
            },
          ],
        },
        {
          icon: 'hugeicons:first-aid-kit',
          name: 'Pharmaceutical',
          description: '',
          importList: [
            {
              name: ' Nutritional Supplements',
            },
            {
              name: 'Veterinary Pharmaceuticals',
            },
            {
              name: 'Over-the-Counter Medications',
            },
          ],
        },
        {
          icon: 'hugeicons:ai-brain-02',
          name: 'Machinery and Equipment',
          description: '',
          importList: [
            {
              name: ' Textile Machinery',
            },
            {
              name: 'Construction Machinery',
            },
            {
              name: 'Agricultural Equipment',
            },
          ],
        },
      ],
    }
  },
})
</script>
<template>
  <div
    class="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(106,143,106,1)_0,rgba(106,143,106,0.2)_50%,rgba(0,163,255,0)_100%)]"
  ></div>
  <div class="flex flex-col w-full h-full items-center pb-20 px-5">
    <div class="flex flex-col w-dvw lg:h-50dvh h-170 lg:gap-10 items-center" data-aos="fade-in">
      <div
        class="flex flex-col w-full items-center lg:h-150 h-full justify-center gap-5 lg:px-0 z-10"
      >
        <h2 class="text-center lg:w-1/2 w-3/4 text-lg">
          Presented by Green Route Cambodia Enterprise Co Ltd
        </h2>
        <h1 class="lg:text-7xl text-3xl text-center w-full font-bold text-primary">
          Strategic Planning & <br />Development Services
        </h1>
        <h2 class="text-center lg:w-1/2 text-lg">Sustainable Trade Solutions</h2>
        <button
          class="btn btn-soft btn-primary border-primary border-1 light:hover:text-white hover:shadow-xl shadow-primary"
          v-on:click="goToUrl('services')"
        >
          Learn More
        </button>
      </div>
    </div>
    <div class="flex flex-col lg:w-3/4 items-center lg:gap-25 gap-25 w-full">
      <div class="flex flex-col w-full items-center gap-10">
        <h1 class="text-xl font-bold">Trusted by top companies</h1>
        <Partners class="opacity-50" />
      </div>
      <div class="flex w-full p-0" data-aos="fade-up">
        <div class="flex lg:flex-row-reverse flex-col-reverse lg:gap-20 gap-10 p-0">
          <img
            src="https://images.unsplash.com/photo-1589895257704-697b5d525c94?auto=format&fit=crop&w=800"
            class="rounded-lg shadow-md lg:w-1/2 w-full h-50 lg:h-100 object-cover shadow-primary"
          />
          <div class="w-full">
            <h1 class="text-2xl font-bold text-primary">
              Driving Sustainable Innovation Across Industries
            </h1>
            <p class="py-6">
              At Green Route Cambodia Enterprise, our mission is to lead by example in the global
              shift towards sustainability. With a foundation deeply rooted in conservation, we are
              dedicated to transforming the business landscape through environmentally responsible
              practices and ethical sourcing. Our commitment extends across various sectors,
              including export-import, logistics, IoT development and production, data analytics,
              and consulting solutions, showcasing our versatility and dedication to making a
              positive impact.
            </p>
            <button class="btn btn-primary text-base-100">Learn More</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5 w-full" data-aos="fade-up">
        <h1 class="text-2xl font-bold text-primary">Our Capabilities</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5" style="grid-auto-rows: 1fr">
          <div
            class="card card-compact shadow-sm shadow-primary bg-base-100 w-full"
            v-for="service in services"
          >
            <div class="card-body">
              <Icon :icon="service.icon" class="h-10 w-10 text-primary" />
              <h2 class="card-title">{{ service.name }}</h2>
              <p class="opacity-60">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col gap-5 w-full items-center" data-aos="fade-in">
        <h1 class="text-2xl text-center">
          At GRC we’re proud to oversee a diverse range of subsidiaries. Each one plays a crucial
          role in our mission to deliver exceptional value across different sectors.
        </h1>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col gap-5 w-full" data-aos="fade-up">
        <h1 class="text-2xl font-bold text-primary">What we import to Cambodia</h1>
        <p>
          Our goal is to continuously expand our operations, offering an ever-growing array of
          options to meet your needs.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5" style="grid-auto-rows: 1fr">
          <div
            class="card card-compact shadow-sm shadow-primary bg-base-100 w-full"
            v-for="importItem in importDetails"
          >
            <div class="card-body">
              <Icon :icon="importItem.icon" class="h-10 w-10 text-primary" />
              <h2 class="card-title">{{ importItem.name }}</h2>
              <p class="opacity-60">
                {{ importItem.description }}
              </p>
              <ul v-for="item in importItem.importList" class="list-inside">
                <li class="opacity-60">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex w-full">
        <div
          class="hero w-full lg:h-150 rounded-lg overflow-hidden shadow-md shadow-primary"
          style="
            background-image: url(https://images.unsplash.com/photo-1644614827935-e54e9ba8f23a?auto=format&fit=crop&w=2400);
          "
        >
          <div class="hero-overlay"></div>
          <div class="hero-content text-neutral-content text-center items-center w-full">
            <div class="w-full flex flex-col items-center gap-5">
              <h1 class="text-2xl font-bold text-white">
                The Importance of Modern Khmer Antiquities
              </h1>
              <p class="mb-5 text-white w-3/4 text-sm">
                The significance of modern Khmer antiquities lies in their role in preserving
                Cambodia’s cultural heritage, while addressing ethical concerns around sourcing
                actual antiquities. These modern recreations adhere to a nuanced understanding of
                the dos and don’t in cultural representation, ensuring respect and accuracy.
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
      <div class="flex flex-col gap-5 w-full items-center">
        <h1 class="lg:text-4xl font-bold text-center">Green Route Cambodia Enterprise Co Ltd</h1>
        <div>
          <button
            class="btn btn-primary btn-soft border-1 border-primary hover:shadow-xl shadow-primary light:hover:text-white"
          >
            Connect with us <Icon icon="material-symbols:arrow-right-alt-rounded" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
