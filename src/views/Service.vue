<template>
    <div class="about">
        <PreLoader />
        <PageTitle />
        <ServiceArea />
        <Footer />
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import ServiceArea from '@/components/service/ServiceArea.vue'
    import Footer from '@/components/home/Footer.vue'

    export default {
        name: 'Service',
        mixins: [MyComponent],
        components: {
            PreLoader,
            PageTitle,
            ServiceArea,
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
