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
      subsidiaries: [] as import('@/data/company').Subsidiary[],
      partnerDetail: [] as import('@/data/company').PartnerDetail[],
    }
  },
  created() {
    import('@/data/company').then((m) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.subsidiaries = m.subsidiaries as unknown as typeof m.subsidiaries
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.partnerDetail = m.partnerDetail as unknown as typeof m.partnerDetail
    })
  },
}
</script>

<style scoped></style>
