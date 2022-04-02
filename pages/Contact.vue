<template>
  <div>
    <NavBar />
    <div class="content">
      <div class="container">
        <h1 class="PageTitle">Contact</h1>
        <hr class="col-5" >
      </div>
    </div>
  </div>
</template>

<style scoped>
hr {
  float: left;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'ContactPage',
  components: {
    NavBar
  }
}
</script>
