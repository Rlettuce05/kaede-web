<template>
  <div>
    <NavBar />
    <div class="content">
      <b-container>
        <h1 class="PageTitle">About</h1>
        <hr class="col-5">
      </b-container>
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
