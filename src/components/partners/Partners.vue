<template lang="html">
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    aria-label="Partner logos carousel"
  >
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll opacity-70"
    >
      <li v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="filter light:invert grayscale" />
      </li>
    </ul>
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll opacity-70"
      aria-hidden="true"
    >
      <li v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="filter light:invert grayscale" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { partnerLogos } from '@/data/partners'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Partners',
  data() {
    return {
      logos: partnerLogos,
    }
  },
}
</script>

<style>
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 25s linear infinite;
}
</style>
