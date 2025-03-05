<template lang="html">
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    aria-label="Partner logos carousel"
  >
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll opacity-60"
    >
      <li v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="filter light:invert" />
      </li>
    </ul>
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll opacity-60"
      aria-hidden="true"
    >
      <li v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="filter light:invert" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      logos: [
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/facebook.svg',
          alt: 'Facebook',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/disney.svg',
          alt: 'Disney',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/airbnb.svg',
          alt: 'Airbnb',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/apple.svg',
          alt: 'Apple',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/spark.svg',
          alt: 'Spark',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/samsung.svg',
          alt: 'Samsung',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/quora.svg',
          alt: 'Quora',
        },
        {
          src: 'https://github.com/cruip/cruip-tutorials/raw/main/logo-carousel/sass.svg',
          alt: 'Sass',
        },
      ],
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
