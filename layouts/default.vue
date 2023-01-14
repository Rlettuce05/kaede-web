<template>
    <b-container>
        <div class="text-center text-white py-5">
            <h1>Kaede Kamisame</h1>
            <p>3DCG / Motiongraphics Creator kamisame's portfolio</p>
            <Navbar class="mt-4" />
        </div>
        <Nuxt />
        <Footer id="footer" class="text-white" />
    </b-container>
</template>

<script>
export default {};
</script>

<style>
body {
    background-color: #333333;
}

#footer {
    margin-top: 5em;
}

.content {
    transition: opacity 0.5s;
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
