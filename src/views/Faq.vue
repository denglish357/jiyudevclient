<template>
    <div class="faq">
        <PreLoader />
        <PageTitle />
        <FaqArea2 />
        <Footer />
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import FaqArea2 from '@/components/faq/FaqArea2.vue'
    import Footer from '@/components/home/Footer.vue'

    export default {
        name: 'Faq',
        mixins: [MyComponent],
        components: {
            PreLoader,
            PageTitle,
            FaqArea2,
            Footer
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
