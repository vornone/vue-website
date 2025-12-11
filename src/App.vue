<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/tailwind.css'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, watch } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import grsLogo from '@/assets/logos/grs-logo.png'
import { setLanguage } from '@/functions/setLanguage'

type SupportedLocale = 'en' | 'kh'

const selectedLocale = ref<SupportedLocale>('en')
const isDarkTheme = ref(false)

const navigationMenu = ref([
  { name: 'Our Company', path: '/our-company' },
  { name: 'Partners', path: '/partners' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
])

const servicesMenu = ref([
  { name: 'Construction & Design', path: '/services/construction-and-design', icon: 'mdi-light:home' },
  { name: 'Information Technology', path: '/services/information-technology', icon: 'mdi-light:content-save' },
  { name: 'Logistics & Supply Chain', path: '/services/logistics-and-supply-chain', icon: 'mdi-light:truck' },
])

const handleLanguageChange = () => {
  setLanguage(selectedLocale.value)
}

AOS.init()
const route = useRoute()

const isNotFound = computed(() => {
  return route.name === '/[...catchAll]'
})

const pageTitle = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  if (segments.length > 2) {
    return segments[segments.length - 2]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }
  if (segments.length === 0 || route.path === '/') return ''
  return segments[segments.length - 1]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
})

const isCurrentRoute = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
    ? 'underline underline-offset-4 decoration-2 decoration-primary'
    : ''
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dim' : 'emerald')
  localStorage.setItem('theme', isDarkTheme.value ? 'dim' : 'emerald')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const savedLocale = localStorage.getItem('locale') as SupportedLocale

  if (savedLocale && (savedLocale === 'en' || savedLocale === 'kh')) {
    selectedLocale.value = savedLocale
  }

  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dim'
  } else {
    isDarkTheme.value = true
    localStorage.setItem('theme', 'dim')
  }

  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dim' : 'emerald')
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header></header>
    <div class="sticky top-0 px-4 shadow-md navbar bg-base-100 z-99 light:shadow-sm">
      <div class="gap-2 navbar-start">
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            class="theme-controller"
            :checked="isDarkTheme"
            @change="toggleTheme"
          />
          <svg
            class="w-5 h-5 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
          <svg
            class="w-5 h-5 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
        </label>
        <a href="/"
          ><img
            :src="grsLogo"
            alt="GRS-logo"
            class="h-10 ml-2 transition-shadow duration-300 ease-in-out rounded-lg shadow-xs lg:h-12 lg:ml-10 hover:cursor-pointer hover:shadow-lg shadow-primary"
        /></a>
      </div>
      <div class="navbar-end lg:flex">
        <ul class="hidden menu menu-horizontal lg:flex">
          <li v-for="item in navigationMenu" :key="item.path">
            <a v-if="item.name !== 'Services'" :href="item.path" :class="isCurrentRoute(item.path)">{{ item.name }}</a>
            <div v-else class="dropdown dropdown-hover dropdown-center">
              <a :href="item.path" :class="isCurrentRoute(item.path) + ' flex items-center'"
                >{{ item.name }} <span><Icon icon="mdi-light:chevron-down" class="w-5 h-5" /></span
              ></a>
              <ul class="shadow menu menu-sm dropdown-content w-52 bg-base-100 rounded-box">
                <li v-for="service in servicesMenu" :key="service.path">
                  <a :href="service.path" :class="isCurrentRoute(service.path)">
                    <Icon :icon="service.icon" class="w-5 h-5" />{{ service.name }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <select
          defaultValue="en"
          className="select select-primary lg:w-25 w-30 lg:ml-10 font-semibold"
          id="language"
          v-model="selectedLocale"
          @change="handleLanguageChange"
        >
          <option value="en">English</option>
          <option value="kh">ភាសាខ្មែរ</option>
        </select>

        <div class="w-10 p-0 ml-2 drawer drawer-end lg:hidden">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer" class="btn btn-ghost btn-circle drawer-button">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg></div
            ></label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="min-h-full p-4 menu bg-base-100 text-base-content w-80">
              <li v-for="item in navigationMenu" :key="item.path">
                <a v-if="item.name !== 'Services'" :href="item.path" :class="isCurrentRoute(item.path)">{{ item.name }}</a>
                <div v-else>
                  <a :href="item.path" :class="isCurrentRoute(item.path)">{{ item.name }}</a>
                  <ul class="p-2">
                    <li v-for="service in servicesMenu" :key="service.path">
                      <a :href="service.path" :class="isCurrentRoute(service.path)">
                        <Icon :icon="service.icon" class="w-5 h-5" />{{ service.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!isNotFound && pageTitle"
      class="flex items-center w-full h-15 bg-primary align-center"
      data-aos="fade-in"
    >
      <div class="container flex items-center mx-auto align-center">
        <div class="flex items-center w-full align-center">
          <h1 class="w-full text-xl font-bold text-center lg:text-3xl text-base-100">
            {{ pageTitle }}
          </h1>
        </div>
      </div>
    </div>
    <main class="flex items-center flex-grow w-full h-full mx-auto">
      <RouterView></RouterView>
    </main>

    <footer
      class="p-10 rounded footer footer-horizontal footer-center bg-base-200 bg-opacity-10 text-base-content"
    >
      <nav class="grid grid-cols-2 gap-4 lg:grid-cols-6" v-motion-fade-visible>
        <a class="link link-hover" href="/">Home</a>
        <a v-for="item in navigationMenu" :key="item.path" class="link link-hover" :href="item.path">{{ item.name }}</a>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4" v-motion-fade-visible>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {{ new Date().getFullYear() }} - All right reserved by Green Road Solution
          Enterprise
        </p>
      </aside>
    </footer>
  </div>
</template>
