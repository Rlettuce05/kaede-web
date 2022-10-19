<template>
  <div class="background">
    <b-container class="text-center">
      <div class="icon-img ">
        <nuxt-picture :imgAttrs="{class: 'w-100'}" src="/icon.png" />
      </div>
      <b-row class="mt-5 mb-4">
        <b-col>
          <b-btn squared class="btn btn-outline-light px-5" href="Works"
            >WORKS</b-btn
          >
        </b-col>
        <b-col>
          <b-btn squared class="btn btn-outline-light px-5" href="About"
            >ABOUT</b-btn
          >
        </b-col>
        <b-col>
          <b-btn
            squared
            class="btn btn-outline-light px-5"
            href="Commission"
            >COMMISSION</b-btn
          >
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-btn
            class="btn btn-outline-light"
            href="https://www.youtube.com/channel/UCQu9wEzbJKYqBQLSz8MQKTg"
            target="_blank"
            style="font-size: 2em"
            ><b-icon icon="youtube"></b-icon
          ></b-btn>
        </b-col>
        <b-col>
          <b-btn
            class="btn btn-outline-light"
            href="https://twitter.com/ka3de_Rain"
            target="_blank"
            style="font-size: 2em"
            ><b-icon icon="twitter" style="margin-bottom: 2px"></b-icon
          ></b-btn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BIcon, BIconYoutube, BIconTwitter } from "bootstrap-vue";

export default {
  components: {
    BIcon,
    BIconYoutube,
    BIconTwitter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");

.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-img {
  max-width: 400px;
  padding: 0 2em;
  margin: 0 auto;
}
</style>
