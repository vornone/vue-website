<template>
  <div>
    <template v-if="news">
      <h1>News Detail: {{ news.title }}</h1>
      <p>{{ news.content }}</p>
      <router-link to="/services/information-technology">Back to News</router-link>
    </template>
    <template v-else>
      <p>Redirecting...</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { itNewsItems, type NewsItem } from '@/data/news'

const route = useRoute()
const router = useRouter()

const news = computed<NewsItem | null>(() => {
  const params = route.params as { id?: string }
  const id = params.id
  if (!id) return null
  return itNewsItems.find((item) => item.id === id) ?? null
})

watchEffect(() => {
  if (!news.value) {
    router.replace('/404')
  }
})
</script>
