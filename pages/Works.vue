<template>
  <div>
    <div class="background"></div>
    <NavBar />
    <transition>
      <div class="content">
        <h1 class="PageTitle">Works</h1>
        <b-container>
          <div id="app">
            <h2 class="tag">MV</h2>
            <b-row>
              <b-col v-for="(work, index) in mv" :key="work.id" col lg="6" md="6" sm="12" cols="12" class="my-3">
                <a v-bind:href="work.link" target="_blank">
                  <div @mouseover="mouseover(index+20)" @mouseleave="mouseleave(index+20)">
                    <b-img :src="require(`@/static/works/${work.img}`)" :class="{'thumbnail': true, 'attention': hover[index+20]}"></b-img>
                    <div :class="{'title': true, 'visible': hover[index+20]}">
                      {{ work.title }}
                    </div>
                  </div>
                </a>
              </b-col>
            </b-row>
            <h2 class="tag">3DCG</h2>
            <b-row>
              <b-col v-for="(work, index) in cg" :key="work.id" col lg="6" md="6" sm="12" cols="12" class="my-3">
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
            <h2 class="tag">XFD</h2>
            <b-row>
              <b-col v-for="(work, index) in xfd" :key="work.id" col lg="6" md="6" sm="12" cols="12" class="my-3">
                <a v-bind:href="work.link" target="_blank">
                  <div @mouseover="mouseover(index+10)" @mouseleave="mouseleave(index+10)">
                    <b-img :src="require(`@/static/works/${work.img}`)" :class="{'thumbnail': true, 'attention': hover[index+10]}"></b-img>
                    <div :class="{'title': true, 'visible': hover[index+10]}">
                      {{ work.title }}
                    </div>
                  </div>
                </a>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>
    </transition>
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
    const cg = []
    const xfd = []
    const mv = []
    for (let i = 0; i < works.length; i++) {
      const a = works[i].tag
      if (a === 'CG') {
        cg.push(works[i])
      } else if (a === 'XFD') {
        xfd.push(works[i])
      } else if (a === 'MV') {
        mv.push(works[i])
      }
    }
    return {
      cg,
      xfd,
      mv,
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
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
.content {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 500;
  color: white;
  transition: opacity 0.5s;
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
.tag {
  margin-top: 8px;
  margin-bottom: 0px;
}
.background {
  background-color: #333333;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.page-enter-active .content,
.page-leave-active .content{
  opacity: 1;
}
.page-enter .content,
.page-leave-active .content{
  opacity: 0;
}
</style>
