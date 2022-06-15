<template>
  <div class="background">
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">About</h1>
      <b-container>
        <b-row>
          <b-col lg="7" md="6" sm="12">
            <p>3DCGやmotiongaphicsを用いてグラフィックを意識した映像を制作しています。</p>
          </b-col>
          <b-col lg="5" md="6" sm="12">
            <b-img class="iconimg" src="../static/icon.jpeg"></b-img>
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
  </div>
</template>

<script>
import { BIcon, BIconYoutube, BIconTwitter } from 'bootstrap-vue'
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'AboutPage',
  components: {
    NavBar,
    BIcon,
    BIconYoutube,
    BIconTwitter
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
.content {
  font-family: 'Akshar', sans-serif;
  text-align: center;
  transition: opacity 0.5s;
}
.PageTitle {
  padding-top: 50px;
}
.iconimg {
  width: 100%;
}
.background {
  background-color: #333333;
  color: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
.links {
  font-size: 20px;
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
