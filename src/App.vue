<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/tailwind.css' // Import the Tailwind CSS file
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import grcLogo from '@/assets/logos/grc_logo_frame.png'

AOS.init()
const route = useRoute()

const isNotFound = computed(() => {
  return route.name === '/[...catchAll]'
})

const pageTitle = computed(() => {
  const segments = route.path.split('/').filter(Boolean) // Remove empty segments
  if (segments.length === 0 || route.path === '/') return '' // Return empty string for root path
  return segments[segments.length - 1]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
})

// Theme state
const isDarkTheme = ref(false)

// Function to toggle theme
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dim' : 'emerald')
  localStorage.setItem('theme', isDarkTheme.value ? 'dim' : 'emerald')
}

// Load theme preference from localStorage on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dim'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header></header>
    <div className="navbar bg-base-100 shadow-md px-4 z-99 sticky top-0">
      <div className="navbar-start gap-2">
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input
            type="checkbox"
            class="theme-controller"
            :checked="isDarkTheme"
            @change="toggleTheme"
          />

          <!-- sun icon -->
          <svg
            class="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
        <a href="/"><img :src="grcLogo" alt="grc-logo" class="h-12 ml-10" /></a>
        <!-- <a className="btn btn-ghost text-xl" href="/">grc-enterprise</a> -->
      </div>
      <div className="navbar-end  lg:flex ">
        <ul className="menu menu-horizontal  hidden lg:flex ">
          <li><a href="/our-company">Our Company</a></li>
          <li><a href="/partners">Partners</a></li>
          <li className="dropdown dropdown-hover dropdown-center">
            <a href="/services"
              >Services <span><Icon icon="mdi-light:chevron-down" class="h-5 w-5" /></span
            ></a>
            <ul className="menu menu-sm dropdown-content bg-base-100  w-52 rounded-box shadow">
              <li>
                <a href="/services/information-technology"
                  ><Icon icon="mdi-light:content-save" class="h-5 w-5" />Information Technology</a
                >
              </li>
              <li>
                <a href="/services/construction-and-design"
                  ><Icon icon="mdi-light:home" class="h-5 w-5" />Construction & Design</a
                >
              </li>
              <li>
                <a href="/services/logistics-and-supply-chain"
                  ><Icon icon="mdi-light:truck" class="h-5 w-5" />Logistics & Supply Chain</a
                >
              </li>
            </ul>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div class="dropdown dropdown-left lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a href="/our-company">Our Company</a></li>
            <li><a href="/partners">Partners</a></li>
            <li>
              <a href="/services"> Services</a>
              <ul className="p-2">
                <li>
                  <a href="/services/information-technology"
                    ><Icon icon="mdi-light:content-save" class="h-5 w-5" />Information Technology</a
                  >
                </li>
                <li>
                  <a href="/services/construction-and-design"
                    ><Icon icon="mdi-light:home" class="h-5 w-5" />Construction & Design</a
                  >
                </li>
                <li>
                  <a href="/services/logistics-and-supply-chain"
                    ><Icon icon="mdi-light:truck" class="h-5 w-5" />Logistics & Supply Chain</a
                  >
                </li>
              </ul>
            </li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="!isNotFound && pageTitle"
      className="w-full h-15 bg-primary flex items-center align-center"
      data-aos="fade-in"
    >
      <div className="container mx-auto flex items-center align-center">
        <div className="w-full flex items-center align-center">
          <h1 className="lg:text-3xl text-xl font-bold text-base-100 text-center w-full">
            {{ pageTitle }}
          </h1>
        </div>
      </div>
    </div>
    <main className=" flex mx-auto flex-grow  w-full ">
      <RouterView></RouterView>
    </main>

    <footer
      class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
    >
      <nav class="grid grid-flow-col gap-4" v-motion-fade-visible>
        <a class="link link-hover" href="/">Home</a>
        <a class="link link-hover" href="/partners">Partners</a>
        <a class="link link-hover" href="/services">Services</a>
        <a class="link link-hover" href="/contact">Contact</a>
        <a class="link link-hover" href="/about">About</a>
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
          Copyright © {{ new Date().getFullYear() }} - All right reserved by Green Route Cambodia
          Enterprise
        </p>
      </aside>
    </footer>
  </div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
