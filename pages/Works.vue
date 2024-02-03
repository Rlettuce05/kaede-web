<template>
    <div>
        <div class="background"></div>
        <transition>
            <b-tabs v-model="tabIndex">
                <b-tab title="All" :title-link-class="linkClass(0)">
                    <b-container>
                        <b-row class="mt-3" cols="1" cols-md="2" cols-lg="3">
                        <b-col v-for="(work) in works" :key="work.id" class="p-0">
                            <a v-bind:href="work.link" class="text-decoration-none text-white" target="_blank">
                                <div class="ratio ratio-16x9">
                                    <b-img :src="require(`@/static/works/${work.img}`)" style="object-fit: contain;"></b-img>
                                </div>
                                <p class="fs-5 mt-2">{{ work.title }}</p>
                            </a>
                        </b-col>
                    </b-row>
                    </b-container>
                </b-tab>
                <b-tab title="MV" :title-link-class="linkClass(1)">
                    <b-container>
                        <b-row class="mt-3" cols="1" cols-md="2" cols-lg="3">
                        <b-col v-for="(work) in mv" :key="work.id" class="p-0">
                            <a v-bind:href="work.link" class="text-decoration-none text-white" target="_blank">
                                <div class="ratio ratio-16x9">
                                    <b-img :src="require(`@/static/works/${work.img}`)" style="object-fit: contain;"></b-img>
                                </div>
                                <p class="fs-5 mt-2">{{ work.title }}</p>
                            </a>
                        </b-col>
                    </b-row>
                    </b-container>
                </b-tab>
                <b-tab title="3DCG" :title-link-class="linkClass(2)">
                    <b-container>
                        <b-row class="mt-3" cols="1" cols-md="2" cols-lg="3">
                        <b-col v-for="(work) in cg" :key="work.id" class="p-0">
                            <a v-bind:href="work.link" class="text-decoration-none text-white" target="_blank">
                                <div class="ratio ratio-16x9">
                                    <b-img :src="require(`@/static/works/${work.img}`)" style="object-fit: contain;"></b-img>
                                </div>
                                <p class="fs-5 mt-2">{{ work.title }}</p>
                            </a>
                        </b-col>
                    </b-row>
                    </b-container>
                </b-tab>
                <b-tab title="Other" :title-link-class="linkClass(3)">
                    <b-container>
                        <b-row class="mt-3" cols="1" cols-md="2" cols-lg="3">
                        <b-col v-for="(work) in other" :key="work.id" class="p-0">
                            <a v-bind:href="work.link" class="text-decoration-none text-white" target="_blank">
                                <div class="ratio ratio-16x9">
                                    <b-img :src="require(`@/static/works/${work.img}`)" style="object-fit: contain;"></b-img>
                                </div>
                                <p class="fs-5 mt-2">{{ work.title }}</p>
                            </a>
                        </b-col>
                    </b-row>
                    </b-container>
                </b-tab>
            </b-tabs>
        </transition>
    </div>
</template>

<script>
import NavBar from "~/components/Navbar.vue";
export default {
    name: "WorksPage",
    components: {
        NavBar,
    },
    asyncData() {
        const works = require("~/static/works/workdata.json");
        const reel = [];
        const cg = [];
        const other = [];
        const mv = [];
        for (let i = 0; i < works.length; i++) {
            const a = works[i].tag;
            if (a === "REEL") {
                reel.push(works[i]);
            } else if (a === "CG") {
                cg.push(works[i]);
            } else if (a === "OTHER") {
                other.push(works[i]);
            } else if (a === "MV") {
                mv.push(works[i]);
            }
        }
        return {
            reel,
            cg,
            other,
            mv,
            works,
            hover: [],
            tabIndex: 0
        };
    },
    methods: {
        mouseover(index) {
            this.$set(this.hover, index, true);
        },
        mouseleave(index) {
            this.$set(this.hover, index, false);
        },
        linkClass(idx) {
            if (this.tabIndex === idx) {
                return ["text-body"];
            } else {
                return ["text-light"];
            }
        },
    },
    head() {
        return {
            title: 'Works',
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Works｜Kaede Kamisame',
                },
            ],
        }
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");
.content {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 500;
    color: white;
    transition: opacity 0.5s;
}
.PageTitle {
    text-align: center;
    padding-top: 50px;
}
b-container {
    margin: 5%;
}
.thumbnail {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
.thumbnail.attention {
    filter: blur(6px);
}
.title {
    opacity: 0%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    margin: auto;
    font-size: 70%;
    z-index: 1;
    color: white;
    transition: all 0.3s ease;
}
.tag {
  margin-top: 8px;
  margin-bottom: 0px;
}
.title.visible {
    opacity: 100%;
    font-size: 1.5rem;
}
.tag {
    margin-top: 8px;
    margin-bottom: 0px;
}
.background {
    background-color: #333333;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
</style>
