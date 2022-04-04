<template>
  <div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">About</h1>
      <b-container>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'AboutPage',
  components: {
    NavBar
  }
}
</script>
