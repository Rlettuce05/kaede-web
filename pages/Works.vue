<template>
  <div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <div id="app">
          <b-row>
            <div v-for="work in works" :key="work.id">
              <b-col cols="4">
                <a v-bind:href="work.link">
                  <div>
                    <b-img :src="require(`@/static/works/${work.img}`)" class="thumbnail"></b-img>
                  </div>
                </a>
                <div class="title">
                  {{ work.title }}
                </div>
              </b-col>
            </div>
          </b-row>
        </div>
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
.thumbnail {
  width: 40vw;
  height: auto;
}
.title {
  display: none;
  z-index: 1;
}
@keyframes titleslidein {
  from {
    opacity: 0%;
    position: absolute;
    top: -7px;
    font-size: 70%;
  }
  to {
    opacity: 100%;
    top: 1px;
    font-size: 100%;
  }
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
    const works = require('~/static/works/workdata.json')
    return{
      works
    }
  }
}
</script>
