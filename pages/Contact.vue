<template>
  <div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Contact</h1>
      <b-container>
        <h2 class="Index">ご依頼について</h2>
        <div class="TextBody">
          <p>映像製作をしています。<br>依頼の際はぜひTwitterのダイレクトメッセージからお気軽に声をおかけください。</p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.PageTitle {
  text-align: center;
}
</style>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'ContactPage',
  components: {
    NavBar
  }
}
</script>
