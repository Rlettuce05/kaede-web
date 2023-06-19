<template>
    <div>
        <div class="background"></div>
        <transition class="content">
            <div class="text-white">
                <div class="mb-5">
                    <h2>ご依頼について</h2>
                    <div class="mt-4">
                        <p>
                            現在映像制作のご依頼を受け付けております。<br />
                            ミュージックビデオや歌ってみた動画、BGAなど幅広くお取り扱いできます。
                        </p>
                        <p>
                            まずはお気軽にメールにてお問い合わせください。
                        </p>
                    </div>
                    <a href="mailto:me@ka3de.work" target="_blank" class="btn btn-primary text-decoration-none">メールを開く</a>
                </div>
                <div class="mb-5">
                    <h2>依頼の流れ</h2>
                    <p class="mt-4">
                        まず音源などの素材をお送りしていただきます。<br />
                        歌詞がある曲の場合、歌詞もお預かりします。その際に作ってほしいイメージや納期などをできるだけ詳しくお伝えください。
                    </p>
                    <p class="mt-2">
                        画像に関しましては、なるべく大きいものをご用意ください。画像の大きさがあまりに小さい場合、使用をお断りさせていただく場合があります。<br />
                        イメージが定まったら制作を開始致します。
                    </p>
                    <p class="mt-2">
                        進捗はこちらからお送りさせていただきます。その際に訂正などがございましたらお気軽に声をおかけ下さい。また、中間提出などのご希望がございましたら、お申し付けください。進捗や完成品の提出の際、ウォーターマークを入れた状態でお送りします。<br />
                        確認を頂いたら送金していただき、完成品を送信させていただきます。
                    </p>
                </div>
                <div class="mb-5">
                    <h2>料金について</h2>
                    <p class="mt-4">
                        料金については、お問い合わせいただき、ご依頼内容をヒアリングした上でお見積りさせていただきます。<br />
                        ご予算等が決まっている場合は、ご依頼時にお知らせください。<br />
                        お支払いは銀行振込とさせていただいております。
                    </p>
                </div>
                <div class="mb-5">
                    <h2 class="Index">納品方法</h2>
                    <p>
                        基本的にはGoogleドライブを使って作品を納品します。その他指定などございましたら納品時にお申し出ください。<br />
                        動画は指定が無いようであれば 1920×1080 30FPS H264で納品させていただきます。
                    </p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Commission',
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Commission｜Kaede Kamisame',
                },
            ],
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");

.content {
    transition: opacity 0.5s;
}

.background {
    background-color: #333333;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
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
