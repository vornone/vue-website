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

<script lang="ts">
export default {
  computed: {
    news() {
      const newsName = this.$route.params
      const newsItem = this.newsItems.find((item) => item.title === newsName)

      if (!newsItem) {
        this.$router.replace('/404')
        return null
      }

      return newsItem
    },
  },
  data() {
    return {
      newsItems: [
        { id: '1', title: 'News 1', content: 'Full content for News 1...' },
        { id: '2', title: 'News 2', content: 'Full content for News 2...' },
        { id: '3', title: 'News 3', content: 'Full content for News 3...' },
      ],
    }
  },
}
</script>
