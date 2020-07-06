<template>
    <div class="about">
        <PreLoader />
        <PageTitle />
        <AboutArea />
        <SkillArea/>
        <TabsArea/>
    </div>
</template>

<script>
    import PreLoader from '@/components/home/PreLoader'
    import MyComponent from '@/mixins/Head.js'
    import PageTitle from '@/components/about/PageTitle.vue'
    import AboutArea from '@/components/about/AboutArea.vue'
    import SkillArea from '@/components/about/SkillArea.vue'
    import TabsArea from '@/components/about/TabsArea.vue'

    export default {
        name: 'About',
        mixins:[MyComponent],
        components: {
            PreLoader,
            PageTitle,
            AboutArea,
            SkillArea,
            TabsArea
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
