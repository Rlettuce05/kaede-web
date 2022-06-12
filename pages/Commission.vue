<template>
  <div>
    <div class="background"></div>
    <NavBar />
    <div class="content">
      <h1 class="PageTitle">Commission</h1>
      <b-container>
        <h2 class="Index">ご依頼について</h2>
        <div class="TextBody">
          <p>映像製作をしています。<br>依頼の際はぜひTwitterのダイレクトメッセージからお気軽に声をおかけください。</p>
        </div>
        <h2 class="Index">依頼の流れ</h2>
        <div class="TextBody">
          <p>まず音源などの素材をお送りしていただきます。<br>
          歌詞がある曲の場合、歌詞もお預かりします。その際に作ってほしいイメージや納期などをできるだけ詳しくお伝えください。<br>
          画像に関しましては、なるべく大きいものをご用意ください。画像の大きさがあまりに小さい場合、使用をお断りさせていただく場合があります。<br>
          イメージが定まったら制作を開始致します。<br>
          進捗はこちらからお送りさせていただきます。その際に訂正などがございましたらお気軽に声をおかけ下さい。また、中間提出などのご希望がございましたら、お申し付けください。進捗や完成品の提出の際、ウォーターマークを入れた状態でお送りします。<br>
          確認を頂いたら送金していただき、完成品を送信させていただきます。</p>
        </div>
        <h2 class="Index">料金について</h2>
        <div class="TextBody">
          <p>個人様の場合、基本的にはご予算に応じて対応させていただきます。まずはお気軽にご相談ください。<br>
          お支払いは銀行振込とさせていただいております。</p>
        </div>
        <h2 class="Index">納品方法</h2>
        <div class="TextBody">
          <p>基本的にはGoogleドライブを使って作品を納品します。指定などがございましたら教えてくださると幸いです。<br>
          動画は指定が無いようであれば 1920×1080 30FPS H264で納品させていただきます。</p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/Navbar.vue'
export default {
  name: 'ContactPage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
NavBar {
  width: 100vw;
}
.content {
  font-family: 'Akshar', sans-serif;
  width: 100vw;
  color: rgba(255, 255, 255, 0.8);
}
.PageTitle {
  text-align: center;
  padding-top: 50px;
}
.background {
  background-color: #333333;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
