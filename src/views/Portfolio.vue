<template>
    <div class="portfolio">
        <PreLoader />
        <PageTitle />
        <PortfolioArea />
        <Footer />
    </div>
</template>


<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import PortfolioArea from '@/components/portfolio/PortfolioArea.vue'
    import Footer from '@/components/home/Footer.vue'

    export default {
        name: 'Portfolio',
        components: {
            PreLoader,
            PageTitle,
            PortfolioArea,
            Footer
        },
        mixins:[MyComponent]
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
