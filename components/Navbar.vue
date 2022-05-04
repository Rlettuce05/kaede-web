<template>
  <div class='content'>
    <b-container>
      <b-row>
        <b-col cols="4">
          <nuxt-link to="/About" class="linktext">ABOUT</nuxt-link>
        </b-col>
        <b-col cols="4">
          <nuxt-link to="/Works" class="linktext">WORKS</nuxt-link>
        </b-col>
        <b-col cols="4">
          <nuxt-link to="/Commission" class="linktext">COMMISSION</nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
.linktext {
  text-align: center;
}
.content {
  background-color: black;
  font-size: 25px;
}
.linktext {
  color: white;
}
</style>

<script>
export default {
  name: 'NavBar'
}
</script>
