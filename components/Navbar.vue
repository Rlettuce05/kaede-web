<template>
  <div div :class="{'content': true, 'smartphone': smartphone}">
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
  position: fixed;
  width: 100vw;
  text-align: center;
  background-color: black;
  font-size: 25px;
  z-index: 1;
}
.smartphone {
  font-size: 18px;
  text-decoration: underline;
}
.linktext {
  color: white;
  text-align: center;
}
</style>

<script>
export default {
  name: 'NavBar',
  data() {
    return{
      smartphone: false
    }
  },
  mounted() {
    if(window.innerWidth <= 760) {
      this.smartphone = true
    }
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        if(window.innerWidth <= 760) {
          this.smartphone = true
        }
      })
    })
  },
}
</script>
