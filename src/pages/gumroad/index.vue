<template>
  <div class="flex flex-col gap-5 lg:p-10 p-4 w-full" data-aos="fade-in">
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row lg:gap-20">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="lg:text-3xl text-xl md:text-2xl font-regular">
            <strong class="font-bold">Starting Gumroad Journey </strong>
          </h1>
          <p class="py-6">
            Hello There, My name is Yuki ! A few months ago, I started designing a simple website for a local business. Midway through, they shifted priorities, so the project was pulled. Since we had worked together closely before, I didn’t take a deposit—no hard feelings.
            <br /><br />
Rather than leaving it unfinished, I decided to complete it as a minimal, fully functional template. It’s now ready to use for anyone looking for a clean, simple starting point—ideal for learners, developers, or anyone who wants to save time building a basic site from scratch.
            <br /><br />
I made it completely free available for anyone who wants to explore or adapt it. Optional support is welcomed if you’d like to show appreciation, but it’s not required. But I would be glad if you donwload it from gumroad instead of pulling from my github repository. Have a good one!
          </p>
          <a
  href="https://panhavorn.gumroad.com/l/atktdw"
  target="_blank"
  rel="noopener noreferrer"
>
  <button class="btn btn-primary">
    Get the Template
  </button>
</a>
<div class="tooltip ml-5 " data-tip="where are you going? This is the demo..">
  <button class="btn shadow-xs shadow-primary">Go to demo</button>
</div>
          <p class="py-6"></p>
        </div>
        <div
          class="card bg-base-100 w-full max-w-xl shrink-0 lg:shadow-2xl shadow-sm md:shadow-lg shadow-primary p-0"
        >
          <div class="card-body">
            <img
              src="@/assets/img/gumroad.jpg"
              alt="Gumroad Template"
              class="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style lang=""></style>
