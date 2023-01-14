<template>
    <div>
        <div class="background"></div>
        <transition>
            <div class="content">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/MBftCfroEjI?rel=0&player.setVolume(5)"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="my-5 flex-profile">
                    <b-img
                        width="200px"
                        rounded="circle"
                        src="/icon_1x1.jpg"
                    ></b-img>
                    <div class="text-white">
                        <h1>紙雨 楓</h1>
                        <p>Kaede Kamisame</p>
                        <p>
                            3DCGやmotiongaphicsを用いてグラフィックを意識した映像を制作しています。
                        </p>
                        <a href="" class="btn btn-primary">Twitter</a>
                        <a href="" class="btn btn-danger ml-2">YouTube</a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { BIcon, BIconYoutube, BIconTwitter } from "bootstrap-vue";
import NavBar from "~/components/Navbar.vue";
export default {
    components: {
        NavBar,
        BIcon,
        BIconYoutube,
        BIconTwitter,
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");
.flex-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
}
</style>
