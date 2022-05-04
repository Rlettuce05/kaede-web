<template>
  <div>
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
.PageTitle {
  text-align: center;
}
.iconimg {
  width: 40vw;
  height: auto;
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
