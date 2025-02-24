<template lang="">
  <div className="container mx-auto flex items-center align-center w-full h-100 p-10">
    <div className="w-full flex flex-col items-center align-center gap-5">
      <h1 className="text-3xl font-bold  text-center w-full">Coming Soon</h1>
      <p className="text-sm opacity-60 text-center">
        in the meantime, you can explore other existing tab
      </p>
      <button class="btn btn-primary text-base-100" v-on:click="goToService('services')">
        service page
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToService(name) {
      window.location.href = `/${name}`
    },
  },
}
</script>
<style lang=""></style>
