<template>
  <div class="background">
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">About</h1>
      <b-container>
        <b-row>
          <b-col cols="7">
            <p>3DCGやmotiongraphicsを用いてグラフィックを意識した映像を制作しています。</p>
          </b-col>
          <b-col cols="5">
            <b-img class="iconimg" src="../static/icon.jpeg"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
.content {
  font-family: 'Akshar', sans-serif;
}
.PageTitle {
  text-align: center;
}
.iconimg {
  width: 40vw;
  height: auto;
}
.background {
  background-color: #333333;
  color: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'AboutPage',
  components: {
    NavBar
  }
}
</script>
