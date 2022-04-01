<template>
  <div class='content'>
    <b-container>
      <b-row>
        <b-col sm="3">
          <nuxt-link to="/Abont">ABOUT</nuxt-link>
        </b-col>
        <b-col sm="3">
          <nuxt-link to="/Works">WORKS</nuxt-link>
        </b-col>
        <b-col sm="3">
          <nuxt-link to="/Contact">CONTACT</nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
