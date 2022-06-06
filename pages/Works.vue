<template>
  <div>
    <div class="background"></div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <div id="app">
          <b-row>
            <b-col v-for="(work, index) in works" :key="work.id" col lg="4" md="4" sm="12" cols="12" class="my-3">
              <a v-bind:href="work.link" target="_blank">
                <div @mouseover="mouseover(index)" @mouseleave="mouseleave(index)">
                  <b-img :src="require(`@/static/works/${work.img}`)" :class="{'thumbnail': true, 'attention': hover[index]}"></b-img>
                  <div :class="{'title': true, 'visible': hover[index]}">
                    {{ work.title }}
                  </div>
                </div>
              </a>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

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
  filter: blur(6px);
}
.title {
  opacity: 0%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;
  font-size: 70%;
  z-index: 1;
  color: white;
  transition: all 0.3s ease;
}
.title.visible {
  opacity: 100%;
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
