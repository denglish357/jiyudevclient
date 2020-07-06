<template>
    <div class="about">
        <PreLoader />
        <TopNav />
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import TopNav from '@/components/home/TopNav.vue'
    import MyComponent from '@/mixins/Head.js'

    export default {
        name: 'About',
        mixins:[MyComponent],
        components: {
            PreLoader,
            TopNav
        },

    }

</script>


<style lang="text/css" scoped>
    import '../assets/css/main.css'
    import '../assets/css/barfiller.css'
    import'../assets/css/font-awesome.min.css'
    import '../assets/css/slicknav.css'
    import '../assets/css/owl.carousel.css'
    import '../assets/css/bootstrap.min.css'

</style>
