<template>
  <div>
    <div class="content">
      <div class="background">
        <NavBar />
      </div>
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <div id="app">
          <b-row>
            <div v-for="(work, index) in works" :key="work.id">
              <b-col cols="6">
                <a v-bind:href="work.link" target="_blank">
                  <div @mouseover="mouseover(index)" @mouseleave="mouseleave(index)">
                    <b-img :src="require(`@/static/works/${work.img}`)" class="thumbnail"></b-img>
                  </div>
                </a>
                <div :class="{ 'visible': hover[index]}">
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
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
.content {
  font-family: 'Akshar', sans-serif;
  color: white;
}
.PageTitle {
  text-align: center;
}
b-container {
  margin: 5%;
}
.thumbnail {
  width: 300px;
  height: auto;
}
.title {
/*  visibility: hidden; */
/*  opacity: 100; */
  z-index: 1;
}
.title.visible {

}
.background {
  background-color: #333333;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
/* × animation   〇 trainsition */
@keyframes titleslidein {
  from {
    visibility: hidden;
    opacity: 0%;
    position: absolute;
    top: -7px;
    font-size: 70%;
  }
  to {
    visibility: visible;
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
      works,
      hover: []
    }
  },
  methods: {
    mouseover(index) {
      this.$set(this.hover, index, true)
    },
    mouseleave(index) {
      this.$set(this.hover, index, false)
    }
  }
}
</script>
