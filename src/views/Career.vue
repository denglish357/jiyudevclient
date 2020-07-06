<template>
    <div class="career">
        <PreLoader />
        <PageTitle />
        <ServiceArea />
        <GalleryArea />
        <Footer />
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import ServiceArea from '@/components/career/ServiceArea.vue'
    import GalleryArea from '@/components/career/GalleryArea.vue'
    import Footer from '@/components/home/Footer.vue'

    export default {
        name: 'Career',
        mixins: [MyComponent],
        components: {
            PreLoader,
            PageTitle,
            ServiceArea,
            GalleryArea,
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
