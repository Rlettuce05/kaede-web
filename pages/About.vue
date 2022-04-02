<template>
  <div>
    <NavBar />
    <div class="content">
      <div class="container">
        <h1 class="PageTitle">About</h1>
        <hr class="col-5">
      </div>
    </div>
  </div>
</template>

<style scoped>
hr {
  float: left;
  background-color: black;
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
