<script setup lang="ts">
import { useRoute } from 'vue-router'
interface RouteParams {
  id: string
}

const route = useRoute()
const partnerId = (route.params as RouteParams).id
</script>
<template>
  <div>
    <h1>Partner {{ partnerId }}</h1>
  </div>
</template>

<style lang=""></style>
