<template>
  <div className="flex flex-col gap-4 lg:p-10 p-4">
    <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">Our Valued Partners</li>
    <ul
      class="list bg-base-100 rounded-box shadow-md lg:p-10 p-4 shadow-primary"
      data-aos="fade-up"
    >
      <li
        v-for="partner in partnerDetail"
        :key="partner.name"
        class="list-row animate__animated animate__fadeIn"
      >
        <div>
          <img
            class="size-10 rounded-box bg-white border-1"
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
    <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">Our Valued Subsidiaries</li>
    <ul
      class="list bg-base-100 rounded-box shadow-md lg:p-10 p-4 shadow-primary"
      data-aos="fade-up"
    >
      <li
        v-for="subsidiary in subsidiaries"
        :key="subsidiary.name"
        class="list-row animate__animated animate__fadeIn"
      >
        <div>
          <img
            class="size-10 rounded-box bg-white border-1"
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
      partnerDetail: [
        {
          name: 'CAMBODIAN INSTITUTE FOR RESEARCH AND RURAL DEVELOPMENT (CIRD)',
          type: 'Research Institute',
          image: new URL('@/assets/logos/cird.jpg', import.meta.url).href,
          website: 'https://aoarchitectsdesign.com/',
          description: `Working with CIRD amplifies our efforts in rural development and research. Their expertise in rural challenges and solutions supports our mission to deploy technology and data analytics for rural upliftment, enhancing our impact on these communities.`,
        },
        {
          name: 'MINISTRY OF AGRICULTURE, FORESTRY AND FISHERIES (MAFF)',
          type: 'Government Agency',
          image: new URL('@/assets/logos/maff.jpg', import.meta.url).href,
          website: 'https://aoarchitectsdesign.com/',
          description: `This partnership strengthens our agricultural initiatives, enabling access to the latest agronomic research and sustainable farming practices. MAFF's support helps us integrate cutting-edge technologies into Cambodia's agriculture sector, promoting efficiency and sustainability.`,
        },
        {
          name: 'MINISTRY OF COMMERCE (MOC)',
          type: 'Government Agency',
          image: new URL('@/assets/logos/moc.jpg', import.meta.url).href,
          website: 'https://umbrelladevelopment.com/',
          description: `Partnering with the Ministry of Commerce enhances our ability to navigate and influence the trade and commerce landscape towards sustainability. The MoC's support is instrumental in facilitating our export-import activities, ensuring they align with national trade policies and standards. This partnership enables us to advocate for and implement sustainable business practices across international trade channels, amplifying our commitment to environmentally responsible commerce.`,
        },
        {
          name: 'Canadian Chamber of Commerce in Cambodia (CanCham)',
          type: 'Nonprofit organization',
          image: new URL('@/assets/logos/cancham.png', import.meta.url).href,
          website: 'https://umbrelladevelopment.com/',
          description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus tortor ac augue porta ultrices. Proin vestibulum velit nec est venenatis volutpat. Mauris risus ex, dignissim ac tincidunt vitae, eleifend vitae metus. Vivamus sed est orci. Mauris felis tellus, venenatis et suscipit ac, elementum eget metus. .`,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
