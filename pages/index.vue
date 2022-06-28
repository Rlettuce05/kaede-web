<template>
  <div class="background">
    <b-container class="content">
      <div class="iconcont">
        <b-img src="../static/icon.jpeg"></b-img>
      </div>
      <b-row class="pagelinks-row">
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks btn btn-outline-light" href="Works">WORKS</b-btn>
        </b-col>
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks btn btn-outline-light" href="About">ABOUT</b-btn>
        </b-col>
        <b-col class="pagelinks-col">
          <b-btn squared class="pagelinks btn btn-outline-light" href="Commission">COMMISSION</b-btn>
        </b-col>
      </b-row>
      <b-row class="links-row mt-4">
        <b-col class="links-col">
          <b-btn class="links btn btn-outline-light" href="https://www.youtube.com/channel/UCQu9wEzbJKYqBQLSz8MQKTg" target="_blank"><b-icon icon="youtube"></b-icon></b-btn>
        </b-col>
        <b-col class="links-col">
          <b-btn class="links btn btn-outline-light" href="https://twitter.com/ka3de_Rain" target="_blank"><b-icon icon="twitter"></b-icon></b-btn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
.content {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-align: center;
  transition: opacity 0.5s;
}
.iconcont {
  z-index: 1;
  padding: 9vh 0vw 5vh 0vw;
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
.page-enter-active .content,
.page-leave-active .content {
  opacity: 1;
}
.page-enter .content,
.page-leave-active .content {
  opacity: 0;
}
</style>
