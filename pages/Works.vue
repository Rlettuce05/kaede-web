<template>
  <div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Works</h1>
      <b-container>
        <div id="app">
          <b-row>
            <b-col col="4" v-for="(work, index) in works" :key="work.id">
              <a v-bind:href="work.link">
                <b-img v-bind:src="work.img"></b-img>
              </a>
              <dev v-if="MouseOver(index)">
                <div class="title">
                  {{ work.title }}
                </div>
              </dev>
            </b-col>
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
</style>

<script>
import Vue from 'vue'
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
new Vue({
  el: '#app',
  data:{
    hoverFlag: false,
    hoverIndex: null
  },
  methods: {
    mouseOverAction(index){
      this.hoverFlag = true,
      this.hoverIndex = index
    },
    mouseLeaveAction(){
      this.hoverFlag = false
    }
  }
})
</script>
