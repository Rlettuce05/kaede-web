export default {
    target: "static",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s｜Kaede Kamisame",
        htmlAttrs: {
            lang: "ja",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "映像クリエイター紙雨楓のポートフォリオサイトです。",
            },
            { name: "format-detection", content: "telephone=no" },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: "ka3de.work",
            },
            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://ka3de.work",
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "Kaede Kamisame Portfolio",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "映像クリエイター楓のポートフォリオ",
            },
            {
                hid: "og:image",
                property: "og:image",
                content:
                    "https://i.gyazo.com/ba26cc7e25287a60ad02ae561995eaf8.jpg",
            },
            { name: "twitter:card", content: "summary" },
        ],
        link: [
            { rel: "icon", type: "image/jpg", href: "/icon_1x1.jpg" },
            {
                rel: "stylesheet",
                href: "https://koruri.chillout.chat/koruri.css",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxt/image"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
