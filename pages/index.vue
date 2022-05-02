<template>
  <div class="background">
    <b-container class="content">
      <div class="iconcont">
        <b-img src="../static/icon.jpeg"></b-img>
      </div>
      <b-row class="pagelinks-row">
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks" href="Works">WORKS</b-btn>
        </b-col>
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks" href="About">ABOUT</b-btn>
        </b-col>
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks" href="Commission">COMMISSION</b-btn>
        </b-col>
      </b-row>
      <b-row class="links-row">
        <b-col class="links-col">
          <b-btn class="links" href="https://www.youtube.com/channel/UCQu9wEzbJKYqBQLSz8MQKTg"><b-icon icon="youtube"></b-icon></b-btn>
        </b-col>
        <b-col class="links-col">
          <b-btn class="links" href="https://twitter.com/ka3de_KA"><b-icon icon="twitter"></b-icon></b-btn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.iconcont {
  z-index: 1;
  padding: 10vh 0vw;
}
.content {
  text-align: center;
}
.pagelinks {
  width: 200px;
  padding: 3px;
}
.links {
  font-size: 30px;
}
.background {
  background-color: #333333;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>

<script>
import { BIcon, BIconYoutube, BIconTwitter } from 'bootstrap-vue'
export default {
  name: 'IndexPage',
  components: {
    BIcon,
    BIconYoutube,
    BIconTwitter
  }
}
</script>
