<template>
  <div class="flex flex-col gap-5 lg:p-10 p-4 w-full" data-aos="fade-in">
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row lg:gap-20">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="lg:text-3xl text-xl md:text-2xl font-regular">
            {{ $t('contact') }} <strong class="font-bold">GRC Enterprise </strong>
            {{ $t('today') }}:
          </h1>
          <p class="py-6">
            Contact Green Route Cambodia Enterprise for innovative, sustainable solutions across
            various sectors. Our expertise in conservation, ethical sourcing, and cutting-edge
            technologies ensures impactful, environmentally responsible outcomes for your business
            needs.
          </p>
          <ul>
            <li>
              <div class="flex items-top gap-2">
                <Icon icon="line-md:map-marker-radius" class="text-primary min-h-5 min-w-5 mb-2" />
                <p class="text-sm text-left">{{ $t('address') }}</p>
              </div>
            </li>
            <li>
              <div class="flex items-top gap-2">
                <Icon icon="line-md:phone" class="text-primary h-5 w-5 mb-2" />
                <p class="text-sm">+855 23 45 67 89 / +855 23 45 67 89</p>
              </div>
            </li>
            <li>
              <div class="flex items-top gap-2">
                <Icon icon="line-md:email-plus" class="text-primary h-5 w-5 mb-2" />
                <p class="text-sm link">
                  <a href="mailto:info@grc-enterprise.com">info@grc-enterprise.com</a>
                </p>
              </div>
            </li>
          </ul>
          <p class="py-6"></p>
        </div>
        <div
          class="card bg-base-100 w-full max-w-sm shrink-0 lg:shadow-2xl shadow-sm md:shadow-lg shadow-primary"
        >
          <div class="card-body">
            <fieldset class="fieldset">
              <label class="fieldset-label text-primary font-bold">Name</label>
              <input type="email" class="input" placeholder="Name" />
              <label class="fieldset-label text-primary font-bold">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="fieldset-label text-primary font-bold">your {{ $t('message') }}</label>
              <textarea class="textarea" placeholder="Message"></textarea>
              <button class="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<style lang=""></style>
