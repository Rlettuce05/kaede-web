<template>
  <div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <b-row>
          <b-col col="4" v-for="work in works" :key="work.id">
            <a v-bind:href="work.link">
              <img v-bind:src="work.img">
            </a>
            <div class="title">
              {{ work.title }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.PageTitle {
  text-align: center;
}
b-container {
  margin: 5%;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'WorksPage',
  components: {
    NavBar
  },
  asyncData() {
    const works = require('~/works/workdata.json')
    return{
      works
    }
  }
}
</script>
