<template>
    <div class="flex-content" >
        <nuxt-link to="/" class="text-white">ABOUT</nuxt-link>
        <nuxt-link to="/Works" class="text-white">WORKS</nuxt-link>
        <nuxt-link to="/Commission" class="text-white">COMMISSION</nuxt-link>
    </div>
</template>

<style scoped>
.flex-content {
  display: flex;
  justify-content: center;
  gap: 0 1.3em;
}
</style>

<script>
export default {
  name: 'NavBar',
}
</script>
