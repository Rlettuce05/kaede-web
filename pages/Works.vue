<template>
  <div>
    <div class="background"></div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <div id="app">
          <b-row>
            <b-col v-for="(work, index) in works" :key="work.id" cols="4" class="my-3">
              <a v-bind:href="work.link" target="_blank">
                <div @mouseover="mouseover(index)" @mouseleave="mouseleave(index)">
                  <b-img :src="require(`@/static/works/${work.img}`)" :class="{'thumbnail': true, 'attention': hover[index]}"></b-img>
                </div>
              </a>
              <div :class="{'title': true, 'visible': hover[index]}">
                {{ work.title }}
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
.content {
  font-family: 'Akshar', sans-serif;
  color: white;
}
.PageTitle {
  text-align: center;
  padding-top: 50px;
}
b-container {
  margin: 5%;
}
.thumbnail {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
.thumbnail.attention {
  
}
.title {
  opacity: 0%;
  position: absolute;
  top: -7px;
  font-size: 70%;
  z-index: 1;
  transition: all 0.3s ease;
}
.title.visible {
  visibility: visible;
  opacity: 100%;
  top: 1px;
  font-size: 100%;
}
.background {
  background-color: #333333;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'WorksPage',
  components: {
    NavBar
  },
  asyncData () {
    const works = require('~/static/works/workdata.json')
    return {
      works,
      hover: []
    }
  },
  methods: {
    mouseover (index) {
      this.$set(this.hover, index, true)
    },
    mouseleave (index) {
      this.$set(this.hover, index, false)
    }
  }
}
</script>
