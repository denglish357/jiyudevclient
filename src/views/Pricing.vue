<template>
    <div class="about">
        <PreLoader />
        <PageTitle />
        <PricingArea />
        <PricingArea2 />
        <Footer />
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import PricingArea from '@/components/pricing/PricingArea.vue'
    import PricingArea2 from '@/components/pricing/PricingArea2.vue'
    import Footer from '@/components/home/Footer.vue'

    export default {
        name: 'Pricing',
        mixins: [MyComponent],
        components: {
            PreLoader,
            PageTitle,
            PricingArea,
            PricingArea2,
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
