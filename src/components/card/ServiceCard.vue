<template>
  <div
    class="card bg-base-100 w-full shadow-md shadow-primary"
    v-for="(service, index) in serviceDetail"
    :key="service.name"
  >
    <figure>
      <img
        :src="service.image"
        alt="Shoes"
        class="w-full lg:h-60 h-40 object-cover object-center"
      />
    </figure>
    <div class="card-body lg:p-8 p-5">
      <h2 class="card-title text-primary">
        {{ service.name }}
      </h2>
      <p class="opacity-60">
        {{ service.description }}
      </p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline" v-for="tag in service.tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Service } from '@/types/service'

export default defineComponent({
  name: 'ServiceCard',
  props: {
    serviceDetail: {
      type: Array as PropType<Service[]>, // Use the exported Service interface
      required: true,
    },
  },
  methods: {
    goToService(url: string): void {
      // Implement the navigation logic here
      window.location.href = url
    },
  },
})
</script>

<style scoped>
/* Add any custom styles here */
</style>
