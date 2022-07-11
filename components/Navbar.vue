<template>
  <div class="content">
    <b-container class="flex-content" >
      <nuxt-link to="/About" class="text-white">ABOUT</nuxt-link>
      <nuxt-link to="/Works" class="text-white">WORKS</nuxt-link>
      <nuxt-link to="/Commission" class="text-white">COMMISSION</nuxt-link>
    </b-container>
  </div>
</template>

<style scoped>
.content {
  position: fixed;
  width: 100vw;
  text-align: center;
  background-color: black;
  font-size: 20px;
  z-index: 1;
  color: white;
}

.flex-content {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  name: 'NavBar',
}
</script>
